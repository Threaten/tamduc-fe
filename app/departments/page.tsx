import { HERO_REMOTE_CANDIDATES } from "@/lib/remote-images";
import type { Metadata } from "next";
import PageHero from "../components/page-hero";
import StaticBreadcrumb from "../components/StaticBreadcrumb";
import { DepartmentCard } from "./components/department-card";
import { getDepartments, getHeroes } from "@/lib/api/queries";

export const metadata: Metadata = {
  title: "Chuyên khoa",
  description:
    "Khám phá các chuyên khoa và đội ngũ: tim mạch, nhi, chỉnh hình, da liễu, thần kinh...",
  openGraph: { images: [{ url: "/og-default.png", width: 1200, height: 630 }] },
};

type DepartmentItem = {
  slug: string;
  title: string;
  about: string;
  staffs?: { docs: unknown[] } | null;
  icons: { url: string };
};

type Heroes = {
  departmentHero: { url: string | null };
  departmentSlogan: string;
  departmentDescription: string;
};

export default async function DepartmentsPage() {
  const loadedHeroes = (await getHeroes()) as { SectionHero: Heroes };
  const hero = loadedHeroes.SectionHero;
  const loadedData = (await getDepartments()) as {
    Departments: { docs: DepartmentItem[] };
  };
  const departments: DepartmentItem[] = loadedData.Departments.docs;

  return (
    <div>
      <StaticBreadcrumb
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/departments", label: "Chuyên khoa" },
        ]}
      />
      <PageHero
        title={hero?.departmentSlogan || "Chuyên khoa"}
        subtitle={
          hero?.departmentDescription ||
          "Duyệt các chuyên khoa và đội ngũ chăm sóc."
        }
        imageSrc={`${process.env.ADMIN_API_ENDPOINT}/${hero.departmentHero.url}`}
        imageFallbackRemotes={HERO_REMOTE_CANDIDATES.departments.slice(1)}
        imageFallbackSrc="/heroes/departments.svg"
        imageAlt="Chuyên khoa"
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((d: DepartmentItem) => (
            <DepartmentCard
              key={d.slug}
              slug={d.slug}
              title={d.title}
              description={d.about}
              staffs={d.staffs}
              icon={`${process.env.ADMIN_API_ENDPOINT}/${d.icons.url}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-static";
