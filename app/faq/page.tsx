import { HERO_REMOTE, HERO_REMOTE_CANDIDATES } from "@/lib/remote-images";
import type { Metadata } from "next";
import PageHero from "../components/page-hero";
import { getFAQs } from "@/lib/api/queries";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Hỏi đáp",
  description:
    "Các câu hỏi thường gặp về khám trực tiếp, bảo hiểm, kết quả và ngôn ngữ.",
  openGraph: { images: [{ url: "/og-default.png", width: 1200, height: 630 }] },
};

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export default async function FAQPage() {
  const loadedData = (await getFAQs()) as {
    Faqs: { docs: FAQItem[] };
  };
  const faqs: FAQItem[] = loadedData.Faqs.docs;
  return (
    <div>
      <PageHero
        title="Câu hỏi thường gặp"
        imageSrc={HERO_REMOTE.faq}
        imageFallbackRemotes={HERO_REMOTE_CANDIDATES.faq.slice(1)}
        imageFallbackSrc="/heroes/faq.svg"
        imageAlt="Hỏi đáp"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-6">
        {faqs.map((f) => (
          <div
            key={f.id}
            className="rounded-xl border border-black/10 dark:border-white/10 p-5"
          >
            <h3 className="font-medium">{f.question}</h3>
            <p className="text-sm mt-1 opacity-80">{f.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
