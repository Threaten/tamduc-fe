import type { Metadata } from "next";
import PageHero from "../components/page-hero";
import StaticBreadcrumb from "../components/StaticBreadcrumb";
import HeroImage from "../components/hero-image";
import { HERO_REMOTE, HERO_REMOTE_CANDIDATES } from "@/lib/remote-images";
import { getGalleries, getHeroes } from "@/lib/api/queries";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Thư viện hình ảnh",
  description: "Hình ảnh cơ sở vật chất và công nghệ của chúng tôi.",
  openGraph: { images: [{ url: "/og-default.png", width: 1200, height: 630 }] },
};

type Heroes = {
  galleryHero: { url: string | null };
  gallerySlogan: string;
  galleryDescription: string;
};

type GalleryItem = {
  id: string;
  title: string;
  image: { url: string | null };
};

export default async function GalleryPage() {
  let hero: Partial<Heroes> = {};
  let galleries: GalleryItem[] = [];
  try {
    const loadedHeroes = (await getHeroes()) as { SectionHero: Heroes };
    hero = loadedHeroes.SectionHero || {};
  } catch {}
  try {
    const loadedData = (await getGalleries()) as {
      Galleries: { docs: GalleryItem[] };
    };
    galleries = loadedData?.Galleries?.docs || [];
  } catch {}
  // Removed debug log

  const admin = (process.env.ADMIN_API_ENDPOINT || "").replace(/\/$/, "");
  const heroSrc = hero?.galleryHero?.url
    ? hero.galleryHero.url.includes("/api/media")
      ? `${admin}${hero.galleryHero.url}`
      : hero.galleryHero.url
    : HERO_REMOTE.gallery;

  return (
    <div>
      <StaticBreadcrumb
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/gallery", label: "Thư viện" },
        ]}
      />
      <PageHero
        title={hero?.gallerySlogan || "Thư viện hình ảnh"}
        subtitle={
          hero?.galleryDescription ||
          "Hình ảnh cơ sở vật chất và công nghệ của chúng tôi."
        }
        imageSrc={heroSrc}
        imageFallbackRemotes={HERO_REMOTE_CANDIDATES.gallery.slice(1)}
        imageFallbackSrc="/heroes/gallery.svg"
        imageAlt="Thư viện hình ảnh"
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((img) => {
            const imgSrc = img.image?.url
              ? img.image.url.includes("/api/media")
                ? `${admin}${img.image.url}`
                : img.image.url
              : undefined;
            return (
              <figure
                key={img.id}
                className="rounded-xl border border-black/10 dark:border-white/10 overflow-hidden"
              >
                <div className="aspect-video relative">
                  {imgSrc ? (
                    <HeroImage
                      src={imgSrc}
                      alt={img.title || "Gallery image"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <HeroImage
                      src={HERO_REMOTE.gallery}
                      alt="Gallery placeholder"
                      fill
                      className="object-cover opacity-60"
                    />
                  )}
                </div>
                <figcaption className="p-3 text-xs opacity-80">
                  {img.title}
                </figcaption>
              </figure>
            );
          })}
          {!galleries.length && (
            <p className="text-sm opacity-70 col-span-full">
              Chưa có hình ảnh.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
