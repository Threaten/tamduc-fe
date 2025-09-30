import { HERO_REMOTE, HERO_REMOTE_CANDIDATES } from "@/lib/remote-images";
import type { Metadata } from "next";
import PageHero from "../components/page-hero";
import { getGeneral } from "@/lib/api/queries";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Cấp cứu",
  description:
    "Khi nào nên gọi cấp cứu 115 và khi nào nên đến phòng khám – kèm thông tin liên hệ & giờ làm việc.",
  openGraph: { images: [{ url: "/og-default.png", width: 1200, height: 630 }] },
};

export default async function EmergencyPage() {
  type GeneralInfo = {
    hotline1?: string | null;
    hotline2?: string | null;
    emergencyHotline?: string | null;
    email?: string | null;
    address?: string | null;
    operatingHours?: string | null;
    socials?: { name: string; url: string }[] | null;
  };
  const loadedData = (await getGeneral()) as {
    GeneralInformation: GeneralInfo;
  };
  const general = loadedData?.GeneralInformation;

  return (
    <div>
      <PageHero
        title="Cấp cứu"
        subtitle="Nếu bạn hoặc người khác trong tình trạng nguy kịch, hãy gọi 115 ngay lập tức."
        imageSrc={HERO_REMOTE.emergency}
        imageFallbackRemotes={HERO_REMOTE_CANDIDATES.emergency.slice(1)}
        imageFallbackSrc="/heroes/emergency.svg"
        imageAlt="Cấp cứu"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-10">
        <section className="space-y-3 text-sm">
          <h2 className="text-xl font-medium">Khi nào cần gọi 115</h2>
          <ul className="list-disc pl-5 opacity-80 space-y-1">
            <li>Đau ngực đột ngột, khó thở, mất ý thức</li>
            <li>Dấu hiệu đột quỵ (xệ mặt, yếu tay, nói khó)</li>
            <li>Chảy máu nhiều, chấn thương nặng, co giật</li>
          </ul>
          <h2 className="text-xl font-medium mt-6">Chăm sóc khẩn trong ngày</h2>
          <p className="opacity-80">
            Chúng tôi xử lý các tình trạng nhẹ đến trung bình trong ngày.
          </p>
          <ul className="list-disc pl-5 opacity-80 space-y-1">
            <li>Sốt, ho/cảm, gãy xương nhẹ, bong gân</li>
            <li>Phát ban, dị ứng nhẹ</li>
            <li>Gia hạn đơn thuốc & kiểm tra nhanh</li>
          </ul>
          <div className="mt-4 flex">
            <a href={`tel:${general?.hotline1}`} className="btn-secondary">
              Gọi phòng khám: {general?.hotline1}
            </a>

            {general?.hotline2 && (
              <a
                href={`tel:${general.hotline2}`}
                className="btn-secondary ml-2"
              >
                Gọi phòng khám: {general.hotline2}
              </a>
            )}
          </div>
        </section>
        <aside className="rounded-2xl border border-black/10 dark:border-white/10 p-6 text-sm">
          <h3 className="font-medium">Địa chỉ & Giờ làm việc</h3>
          <p className="mt-2 opacity-80">{general?.address}</p>
          <p className="opacity-80">{general?.operatingHours}</p>
          <div className="mt-6 rounded-xl border border-black/10 dark:border-white/10 aspect-video" />
        </aside>
      </div>
    </div>
  );
}
