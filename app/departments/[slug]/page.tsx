import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { departments as DEPARTMENTS } from "@/lib/data";
// import HeroImage from "@/app/components/hero-image"; // no longer directly used after refactor
import { RoleSection } from "@/app/components/role-section";
import PageHero from "../../components/page-hero";
import StaticBreadcrumb from "../../components/StaticBreadcrumb";
import { getDepartment } from "@/lib/api/queries";

export const metadata: Metadata = {
  title: "Chuyên khoa",
};

export default async function DepartmentDetail({
  params,
}: {
  // In Next.js 15 with React 19, params may be a thenable and must be awaited before property access.
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const isThenable = (value: unknown): value is Promise<{ slug: string }> =>
    typeof value === "object" && value !== null && "then" in value;
  const resolved = isThenable(params)
    ? await params
    : (params as { slug: string });
  const { slug } = resolved;

  type Department = {
    title: string;
    about: string;
    heroImage: { url: string };
    icons: { url: string };
    services: { value: string }[];
    conditions: { value: string }[];
    staffs: {
      docs: {
        id: string;
        slug: string;
        name: string;
        specialty: string;
        role: string;
        years: number;
        languages: { value: string }[];
        schedule: { day: string; time: string }[];
        photo: { url: string };
      }[];
    };
    phone: string;
    email: string;
    hours: string;
    address: string;
  };

  const loadedData = (await getDepartment(`/${slug}`)) as {
    Departments: {
      docs: Department[];
    };
  };
  const department = loadedData.Departments.docs[0];

  // const dept = DEPARTMENTS.find((d) => d.slug === slug);
  // const doctors = doctorsByDepartment[slug] || [];
  // const info = dept;
  if (!department) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-4" />
        <h1 className="text-2xl font-semibold">Không tìm thấy chuyên khoa</h1>
        <Link
          href="/departments"
          className="underline underline-offset-4 mt-4 inline-block"
        >
          Quay lại danh sách chuyên khoa
        </Link>
      </div>
    );
  }
  return (
    <div>
      <StaticBreadcrumb
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/departments", label: "Chuyên khoa" },
          { href: `/departments/${slug}`, label: department.title },
        ]}
      />
      <PageHero
        title={department.title}
        subtitle={department.about}
        imageSrc={`${process.env.ADMIN_API_ENDPOINT}/${department.heroImage.url}`}
        imageFallbackSrc="/heroes/departments.svg"
        imageAlt={`Chuyên khoa ${department.title}`}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <Image
              src={`${process.env.ADMIN_API_ENDPOINT}/${department.icons.url}`}
              alt=""
              width={50}
              height={50}
            />
            <h2 className="text-xl font-medium">Tổng quan</h2>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm opacity-80">
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
              <h3 className="font-medium">Dịch vụ</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {department.services.map((s) => (
                  <li key={s.value}>{s.value}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
              <h3 className="font-medium">Bệnh lý thường gặp</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {department.conditions.map((c) => (
                  <li key={c.value}>{c.value}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8" id="staff">
            <h2 className="text-xl font-medium">Nhân sự</h2>
            {(() => {
              const staffList = department.staffs?.docs || [];
              if (!staffList.length) {
                return (
                  <p className="mt-4 text-sm opacity-70">Chưa có nhân sự.</p>
                );
              }
              const order = ["Doctor", "Nurse"] as const;
              const buckets: Record<string, typeof staffList> = {};
              const dynamicOthers: string[] = [];
              for (const member of staffList) {
                const role = member.role || "Other";
                if (!buckets[role]) buckets[role] = [];
                buckets[role].push(member);
                // Only push to dynamicOthers if role not in predefined order
                if (
                  !(order as readonly string[]).includes(role) &&
                  !dynamicOthers.includes(role)
                ) {
                  dynamicOthers.push(role);
                }
              }
              const finalRoles = [
                ...order.filter((r) => buckets[r]?.length),
                ...dynamicOthers,
              ];
              return (
                <div className="mt-4 space-y-12">
                  {finalRoles.map((role) => (
                    <RoleSection
                      key={role}
                      role={role}
                      members={buckets[role]}
                      perPage={6}
                      mediaBase={process.env.ADMIN_API_ENDPOINT || ""}
                    />
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
        <aside className="lg:col-span-1">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
            <h3 className="font-medium">Liên hệ & Giờ làm việc</h3>
            <div className="mt-3 text-sm opacity-80 space-y-1">
              <p>Điện thoại: {department.phone}</p>
              <p>Email: {department.email}</p>
              <p>Giờ làm việc: {department.hours}</p>
              <p>Địa chỉ: {department.address}</p>
            </div>
            <div className="mt-4">
              <Link href="/reservation" className="btn-secondary">
                Đặt lịch
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return DEPARTMENTS.map((d) => ({ slug: d.slug }));
}
