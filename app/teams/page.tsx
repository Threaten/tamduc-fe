import type { Metadata } from "next";
import PageHero from "../components/page-hero";
import StaticBreadcrumb from "../components/StaticBreadcrumb";
import { HERO_REMOTE_CANDIDATES } from "@/lib/remote-images";
import { getHeroes, getStaffs } from "@/lib/api/queries";
import { RoleSection, StaffMember } from "@/app/components/role-section";

type StaffItem = {
  id: string;
  slug: string;
  name: string;
  role: string;
  specialty: string;
  years?: number | null;
  languages?: { value?: string | null }[] | null;
  department?: { title?: string; slug?: string } | null;
  photo?: { url?: string | null } | null;
};
type Heroes = {
  teamHero: { url: string | null };
  teamSlogan: string;
  teamDescription: string;
};

export const metadata: Metadata = {
  title: "Đội ngũ",
  description:
    "Gặp gỡ đội ngũ y tế đa chuyên khoa: bác sĩ, điều dưỡng, kỹ thuật viên và nhân sự hỗ trợ.",
  openGraph: { images: [{ url: "/og-default.png", width: 1200, height: 630 }] },
};

function groupByRole(list: StaffItem[]) {
  const order = ["Doctor", "Nurse", "Therapist", "Others"] as const;
  const grouped: Record<string, StaffItem[]> = {};
  for (const d of list) {
    const role = d.role || "Others";
    if (!grouped[role]) grouped[role] = [];
    grouped[role].push(d);
  }
  const dynamic = Object.keys(grouped).filter(
    (r) => !(order as readonly string[]).includes(r)
  );
  const final = [
    ...order.filter((r) => grouped[r]?.length),
    ...dynamic.filter((r) => r !== "Others"),
    ...(grouped["Others"] ? ["Others"] : []),
  ];
  return final.map((r) => ({ role: r, members: grouped[r] }));
}

export default async function TeamPage() {
  let hero: Partial<Heroes> = {};
  let staff: StaffItem[] = [];
  try {
    const loadedHeroes = (await getHeroes()) as { SectionHero: Heroes };
    hero = loadedHeroes.SectionHero || {};
  } catch {}
  try {
    const loaded = (await getStaffs()) as { Staffs: { docs: StaffItem[] } };
    staff = loaded?.Staffs?.docs || [];
  } catch {}
  const roles = staff.length ? groupByRole(staff) : [];

  return (
    <div>
      <StaticBreadcrumb
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/teams", label: "Đội ngũ" },
        ]}
      />
      <PageHero
        title={hero?.teamSlogan || "Đội ngũ"}
        subtitle={
          hero?.teamDescription ||
          "Kỹ năng, tận tâm và phối hợp giữa các chuyên khoa."
        }
        imageSrc={
          hero?.teamHero?.url
            ? `${process.env.ADMIN_API_ENDPOINT}/${hero.teamHero.url}`
            : undefined
        }
        imageFallbackRemotes={HERO_REMOTE_CANDIDATES.departments.slice(1)}
        imageFallbackSrc="/heroes/departments.svg"
        imageAlt="Đội ngũ y tế"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-12">
        {roles.map((section) => {
          const normalized: StaffMember[] = section.members.map((m) => ({
            id: m.id,
            slug: m.slug,
            name: m.name,
            role: m.role,
            years: m.years ?? undefined,
            languages: (m.languages || [])
              .filter((l) => l?.value)
              .map((l) => ({ value: l?.value as string })),
            schedule: [],
            photo: m.photo?.url
              ? { url: `${process.env.ADMIN_API_ENDPOINT}/${m.photo.url}` }
              : undefined,
          }));
          return (
            <RoleSection
              key={section.role}
              role={section.role}
              members={normalized}
              perPage={6}
            />
          );
        })}
        {!roles.length && (
          <p className="text-sm opacity-70">Chưa có dữ liệu nhân sự.</p>
        )}
      </div>
    </div>
  );
}

export const dynamic = "force-static";
