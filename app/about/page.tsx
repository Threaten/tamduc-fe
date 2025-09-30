import { HERO_REMOTE_CANDIDATES } from "@/lib/remote-images";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import type { Metadata } from "next";
import PageHero from "../components/page-hero";
import StaticBreadcrumb from "../components/StaticBreadcrumb";
import { getAbout, getHeroes } from "@/lib/api/queries";
import RichTextRenderer from "../helpers/RichTextRenderer";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Tìm hiểu về Phòng khám HealthPlus: chứng nhận, mô hình chăm sóc tích hợp, chi phí và nguyên tắc thiết kế.",
  openGraph: { images: [{ url: "/og-default.png", width: 1200, height: 630 }] },
};

type OurStory = {
  content: string; // stored as JSON string from CMS
};

type Heroes = {
  aboutusHero: { url: string | null };
  aboutUsSlogan: string;
  aboutUsDescription: string;
};

export default async function AboutPage() {
  let hero: Heroes | null = null;
  let about: OurStory | null = null;
  try {
    const loadedHeroes = (await getHeroes()) as { SectionHero: Heroes };
    hero = loadedHeroes.SectionHero;
  } catch {}
  try {
    const loadedData = (await getAbout()) as {
      OurStory: OurStory;
    };
    about = loadedData.OurStory;
  } catch {}

  // Removed debug log

  return (
    <div>
      <StaticBreadcrumb
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/about", label: "Giới thiệu" },
        ]}
      />
      <PageHero
        title={hero?.aboutUsSlogan || "Về chúng tôi"}
        subtitle={
          hero?.aboutUsDescription ||
          "Y học dựa trên bằng chứng – minh bạch và tận tâm."
        }
        imageSrc={
          hero?.aboutusHero?.url
            ? `${process.env.ADMIN_API_ENDPOINT}/${hero.aboutusHero.url}`
            : undefined
        }
        imageFallbackRemotes={HERO_REMOTE_CANDIDATES.about.slice(1)}
        imageFallbackSrc="/heroes/about.svg"
        imageAlt="Giới thiệu phòng khám"
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        {about?.content
          ? (() => {
              const raw = about.content as unknown;
              function parseLexical(
                value: unknown
              ): SerializedEditorState | null {
                let candidate: unknown = value;
                if (typeof value === "string") {
                  try {
                    candidate = JSON.parse(value);
                  } catch {
                    return null;
                  }
                }
                if (
                  candidate &&
                  typeof candidate === "object" &&
                  "root" in candidate
                ) {
                  return candidate as SerializedEditorState;
                }
                return null;
              }
              const parsed = parseLexical(raw);
              if (!parsed) return null;
              return (
                <RichTextRenderer data={parsed} className="prose max-w-none" />
              );
            })()
          : null}
      </div>
    </div>
  );
}
