import { HERO_REMOTE_CANDIDATES } from "@/lib/remote-images";
import type { Metadata } from "next";
import PageHero from "../components/page-hero";
import StaticBreadcrumb from "../components/StaticBreadcrumb";
import ContactForm from "./components/ContactForm";
import { getGeneral, getHeroes } from "@/lib/api/queries";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ đội ngũ chăm sóc: điện thoại, email, địa chỉ, giờ làm việc và biểu mẫu liên hệ.",
  openGraph: { images: [{ url: "/og-default.png", width: 1200, height: 630 }] },
};

type Heroes = {
  contactHero: { url: string | null };
  contactSlogan: string;
  contactDescription: string;
};

type GeneralInfo = {
  hotline1?: string | null;
  hotline2?: string | null;
  emergencyHotline?: string | null;
  email?: string | null;
  address?: string | null;
  operatingHours?: string | null;
  socials?: { name: string; url: string }[] | null;
};

export default async function ContactPage() {
  const loadedHeroes = (await getHeroes()) as { SectionHero: Heroes };
  const hero = loadedHeroes.SectionHero;

  const loadedData = (await getGeneral()) as {
    GeneralInformation: GeneralInfo;
  };
  const general = loadedData?.GeneralInformation;
  return (
    <div>
      <StaticBreadcrumb
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/contact", label: "Liên hệ" },
        ]}
      />
      <PageHero
        title={hero?.contactSlogan || "Liên hệ"}
        subtitle={
          hero?.contactDescription ||
          "Chúng tôi luôn sẵn sàng hỗ trợ. Hãy gửi câu hỏi của bạn."
        }
        imageSrc={`${process.env.ADMIN_API_ENDPOINT}/${hero.contactHero.url}`}
        imageFallbackRemotes={HERO_REMOTE_CANDIDATES.contact.slice(1)}
        imageFallbackSrc="/heroes/contact.svg"
        imageAlt="Liên hệ"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <div className="mt-6 space-y-2 text-sm">
            <p>
              <strong>Điện thoại:</strong> {general?.hotline1 || "0123 456 789"}
              {general?.hotline2 ? ` - ${general.hotline2}` : ""}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {general?.email || "care@healthplus.example"}
            </p>
            <p>
              <strong>Địa chỉ:</strong>{" "}
              {general?.address || "123 Nguyen Trai, District 1, HCMC"}
            </p>
            <p>
              <strong>Giờ làm việc:</strong>{" "}
              {general?.operatingHours || "Mon–Sat 8:00–18:00"}
            </p>
          </div>
          <div
            className="mt-6 rounded-2xl border border-black/10 dark:border-white/10 aspect-video"
            aria-label="Map placeholder"
          />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
