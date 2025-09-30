import {
  BLOG_REMOTE_CANDIDATES,
  HERO_REMOTE_CANDIDATES,
} from "@/lib/remote-images";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/page-hero";
import StaticBreadcrumb from "../../components/StaticBreadcrumb";
import { getBlog } from "@/lib/api/queries";
import RichTextRenderer from "@/app/helpers/RichTextRenderer";
// Breadcrumb removed: auto breadcrumb handles this at layout level

type BlogPostItem = {
  slug: string;
  title: string;
  id: string;
  excerpt: string;
  // Minimal shape for Lexical JSON; allow index signature for flexibility
  // Avoids using 'any' while keeping renderer compatibility
  content: SerializedEditorState | null;
  publishedAt: string;
  author: {
    name: string;
    photo: { url: string } | null;
    role: string | null;
  };
  coverImage: { url: string } | null;
  tags: { value: string }[];
};

let post: BlogPostItem | null = null;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const isThenable = (value: unknown): value is Promise<{ slug: string }> =>
    typeof value === "object" && value !== null && "then" in value;
  const resolved = isThenable(params)
    ? await params
    : (params as { slug: string });
  const { slug } = resolved;
  // Removed debug log

  const loadedData = (await getBlog(`${slug}`)) as {
    BlogPosts: {
      docs: BlogPostItem[];
    };
  };
  post = loadedData.BlogPosts.docs[0];

  if (!post) return { title: "Blog Post" };
  return {
    title: post.title,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const isThenable = (value: unknown): value is Promise<{ slug: string }> =>
    typeof value === "object" && value !== null && "then" in value;
  const resolved = isThenable(params)
    ? await params
    : (params as { slug: string });
  const { slug } = resolved;

  await generateMetadata({ params });

  if (!post) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-semibold">Post not found</h1>
        <Link
          href="/blogs"
          className="underline underline-offset-4 mt-4 inline-block"
        >
          Back to blogs
        </Link>
      </div>
    );
  }
  return (
    <div>
      <StaticBreadcrumb
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/blogs", label: "Bài viết" },
          { href: `/blogs/${slug}`, label: post.title },
        ]}
      />
      <PageHero
        title={post.title}
        subtitle={
          post.author.name || post.publishedAt
            ? `${post.author.name ?? ""}${
                post.publishedAt
                  ? ` • ${new Date(post.publishedAt).toLocaleDateString()}`
                  : ""
              }`
            : undefined
        }
        imageSrc={`${process.env.ADMIN_API_ENDPOINT}/${post.coverImage?.url}`}
        imageFallbackRemotes={(
          BLOG_REMOTE_CANDIDATES[slug] ?? HERO_REMOTE_CANDIDATES.blogs
        ).slice(1)}
        imageFallbackSrc="/heroes/blogs.svg"
        imageAlt="Blog hero"
      />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="prose max-w-none mt-6">
          {post.content ? (
            <RichTextRenderer className=" font-garamond" data={post.content} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
