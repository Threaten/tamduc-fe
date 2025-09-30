import { HERO_REMOTE_CANDIDATES } from "@/lib/remote-images";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/page-hero";
import StaticBreadcrumb from "../components/StaticBreadcrumb";
import { getBlogs, getHeroes } from "@/lib/api/queries";

export const metadata: Metadata = {
  title: "Bài viết",
  description: "Mẹo chăm sóc sức khỏe và cập nhật mới nhất từ đội ngũ bác sĩ.",
  openGraph: { images: [{ url: "/og-default.png", width: 1200, height: 630 }] },
};

type Heroes = {
  blogHero: { url: string | null };
  blogSlogan: string;
  blogDescription: string;
};

export default async function BlogsPage() {
  let hero: Partial<Heroes> = {};
  try {
    const loadedHeroes = (await getHeroes()) as { SectionHero: Heroes };
    hero = loadedHeroes.SectionHero || {};
  } catch {}
  type BlogPostItem = {
    slug: string;
    title: string;
    id: string;
    excerpt: string;
    content: string;
    publishedAt: string;
    author: {
      name: string;
      photo: { url: string } | null;
      role: string | null;
    };
    coverImage: { url: string } | null;
    tags: { value: string }[];
  };

  // Fetch blog posts from the API
  let blogPosts: BlogPostItem[] = [];
  try {
    const loadedData = (await getBlogs()) as {
      BlogPosts: { docs: BlogPostItem[] };
    };
    blogPosts = loadedData?.BlogPosts?.docs || [];
  } catch {}
  return (
    <div>
      <StaticBreadcrumb
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/blogs", label: "Bài viết" },
        ]}
      />
      <PageHero
        title={hero?.blogSlogan || "Bài viết"}
        subtitle={
          hero?.blogDescription ||
          "Mẹo chăm sóc sức khỏe và cập nhật mới nhất từ đội ngũ bác sĩ."
        }
        imageSrc={
          hero?.blogHero?.url
            ? `${process.env.ADMIN_API_ENDPOINT}/${hero.blogHero.url}`
            : undefined
        }
        imageFallbackRemotes={HERO_REMOTE_CANDIDATES.blogs.slice(1)}
        imageFallbackSrc="/heroes/blogs.svg"
        imageAlt="Bài viết"
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((p) => (
            <article
              key={p.slug}
              className="rounded-xl border border-black/10 dark:border-white/10 p-5"
            >
              <h3 className="font-medium">
                <Link
                  href={`/blogs/${p.slug}`}
                  className="underline underline-offset-4"
                >
                  {p.title}
                </Link>
              </h3>
              <p className="text-sm mt-1 opacity-80">{p.excerpt}</p>
              <Link
                href={`/blogs/${p.slug}`}
                className="text-sm underline underline-offset-4 mt-4 inline-block"
              >
                Đọc thêm →
              </Link>
            </article>
          ))}
          {!blogPosts.length && (
            <p className="text-sm opacity-70 col-span-full">
              Chưa có bài viết.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-static";
