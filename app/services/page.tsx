import { HERO_REMOTE_CANDIDATES } from "@/lib/remote-images";
export const dynamic = "force-static";
import type { Metadata } from "next";
import PageHero from "../components/page-hero";
import StaticBreadcrumb from "../components/StaticBreadcrumb";
import Image from "next/image";
// Removed unused SERVICES import
import { getHeroes, getServices } from "@/lib/api/queries";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Khám tổng quát, chẩn đoán hình ảnh, xét nghiệm, khám từ xa, tiêm chủng và vật lý trị liệu.",
  openGraph: { images: [{ url: "/og-default.png", width: 1200, height: 630 }] },
};

type ServiceIItem = {
  id: string;
  title: string;
  desc: string;
  prep?: string;
  icon: { url: string };
  items: { value: string }[];
};

type Heroes = {
  serviceHero: { url: string | null };
  serviceSlogan: string;
  serviceDescription: string;
};

export default async function ServicesPage() {
  // Safely load heroes
  let loadedHeroes: { SectionHero?: Partial<Heroes> } | null = null;
  try {
    loadedHeroes = (await getHeroes()) as { SectionHero?: Partial<Heroes> };
  } catch {
    loadedHeroes = null;
  }
  const hero = loadedHeroes?.SectionHero || ({} as Partial<Heroes>);

  // Safely load services
  let loadedData: { Services?: { docs?: ServiceIItem[] } } | null = null;
  try {
    loadedData = (await getServices()) as {
      Services?: { docs?: ServiceIItem[] };
    };
  } catch {
    loadedData = null;
  }
  const services: ServiceIItem[] = loadedData?.Services?.docs || [];
  return (
    <div>
      <StaticBreadcrumb
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/services", label: "Dịch vụ" },
        ]}
      />
      <PageHero
        title={hero?.serviceSlogan || "Dịch vụ"}
        subtitle={
          hero?.serviceDescription ||
          "Chăm sóc chất lượng cao, lấy bệnh nhân làm trung tâm trên nhiều chuyên khoa."
        }
        imageSrc={
          hero?.serviceHero?.url
            ? `${process.env.ADMIN_API_ENDPOINT}/${hero.serviceHero.url}`
            : undefined
        }
        imageFallbackRemotes={HERO_REMOTE_CANDIDATES.services.slice(1)}
        imageFallbackSrc="/heroes/services.svg"
        imageAlt="Services overview"
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="rounded-xl border border-black/10 dark:border-white/10 p-5"
            >
              <div className="flex items-center gap-2">
                {s?.icon?.url ? (
                  <Image
                    src={`${process.env.ADMIN_API_ENDPOINT}/${s.icon.url}`}
                    alt=""
                    width={50}
                    height={50}
                  />
                ) : (
                  <div className="w-[50px] h-[50px] rounded bg-black/10 dark:bg-white/10 flex items-center justify-center text-[10px] opacity-50">
                    N/A
                  </div>
                )}
                <h3 className="font-medium">{s.title || "(Không tiêu đề)"}</h3>
              </div>
              {s.desc ? (
                <p className="text-sm mt-1 opacity-80">{s.desc}</p>
              ) : null}
              {Array.isArray(s.items) && s.items.length ? (
                <ul className="mt-3 text-sm opacity-80 list-disc pl-5 space-y-1">
                  {s.items.map((i) => (
                    <li key={i.value}>{i.value}</li>
                  ))}
                </ul>
              ) : null}
              {s.prep ? (
                <p className="text-xs mt-3 opacity-70">Chuẩn bị: {s.prep}</p>
              ) : null}
            </div>
          ))}
          {!services.length && (
            <p className="text-sm opacity-70 col-span-full">
              Không có dịch vụ.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
