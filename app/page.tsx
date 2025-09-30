import type { Metadata } from "next";
import Hero from "./(site)/components/hero";
import QuickDepartments from "./(site)/components/quick-departments";
import ServicesPreview from "./(site)/components/services-preview";
import Link from "next/link";
import { getHeroes } from "@/lib/api/queries";

export const metadata: Metadata = {
  title: "Trang chủ",
  description:
    "Website phòng khám hiện đại, tối giản với đa chuyên khoa và đặt lịch dễ dàng.",
  openGraph: { images: [{ url: "/og-home.png", width: 1200, height: 630 }] },
  twitter: { images: ["/og-home.png"] },
};
type Heroes = {
  homeHero: { url: string | null };
  homeDescription: string;
  homeSlogan: string;
};

export default async function Home() {
  const loadedHeroes = (await getHeroes()) as { SectionHero: Heroes };
  const hero = loadedHeroes.SectionHero;
  return (
    <div className="font-sans">
      <Hero
        homeHero={hero.homeHero.url ?? ""}
        homeDescription={hero.homeDescription}
        homeSlogan={hero.homeSlogan}
      />
      <QuickDepartments />
      <ServicesPreview />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Cần hỗ trợ nhanh?
            </h3>
            <p className="text-sm mt-1 opacity-80">
              Liên hệ đội ngũ chăm sóc hoặc đặt lịch ngay.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="rounded-full border border-black/10 dark:border-white/10 px-5 py-3 text-sm font-medium"
            >
              Liên hệ
            </Link>
            <Link
              href="/reservation"
              className="rounded-full border border-black/10 dark:border-white/10 px-5 py-3 text-sm font-medium"
            >
              Đặt lịch khám
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
