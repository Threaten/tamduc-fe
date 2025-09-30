import Link from "next/link";
import HeroImage from "@/app/components/hero-image";
import StaticBreadcrumb from "../../components/StaticBreadcrumb";
import { doctorsByDepartment, departments as DEPARTMENTS } from "@/lib/data";
import { getStaff } from "@/lib/api/queries";

type Staff = {
  id: string;
  slug: string;
  name: string;
  status: string;
  department?: { title: string; slug: string } | null; // now optional / nullable
  specialty: string;
  role: string;
  years: number;
  languages: { value: string }[];
  schedule: { day: string; time: string }[];
  education: { value: string }[];
  bio?: string;
  photo: { url: string };
};

export default async function StaffProfile({
  params,
}: {
  params: Promise<{ staff: string }> | { staff: string };
}) {
  // Next.js 15: ensure params is resolved if it's a thenable.
  const isThenable = (value: unknown): value is Promise<{ staff: string }> =>
    typeof value === "object" && value !== null && "then" in value;
  const resolved = isThenable(params)
    ? await params
    : (params as { staff: string });
  const staffSlug = resolved.staff;

  let staff: Staff | null = null;
  try {
    const loadedData = (await getStaff(staffSlug)) as {
      Staffs: { docs: Staff[] };
    };
    staff = loadedData?.Staffs?.docs?.[0] || null;
  } catch {}

  if (!staff) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-semibold">Không tìm thấy nhân sự</h1>
        <Link
          href="/teams"
          className="underline underline-offset-4 mt-4 inline-block"
        >
          Quay lại đội ngũ
        </Link>
      </div>
    );
  }

  const dept = staff.department;
  return (
    <div className="mx-auto max-w-6xl">
      <StaticBreadcrumb
        items={
          dept?.slug && dept?.title
            ? [
                { href: "/", label: "Trang chủ" },
                { href: "/teams", label: "Đội ngũ" },
                { href: `/departments/${dept.slug}`, label: dept.title },
                { href: `/teams/${staff.slug}`, label: staff.name },
              ]
            : [
                { href: "/", label: "Trang chủ" },
                { href: "/teams", label: "Đội ngũ" },
                { href: `/teams/${staff.slug}`, label: staff.name },
              ]
        }
      />
      <div className="grid md:grid-cols-3 gap-10 px-4 py-12">
        <div className="md:col-span-1">
          <div className="aspect-square rounded-2xl border border-black/10 dark:border-white/10 relative overflow-hidden">
            <HeroImage
              src={
                staff?.photo?.url
                  ? `${process.env.ADMIN_API_ENDPOINT}/${staff.photo.url}`
                  : "/heroes/home.svg"
              }
              fallbackSrc="/heroes/home.svg"
              alt={staff?.name || "Nhân sự"}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            {staff?.name || "(Không tên)"}
          </h1>
          <p className="mt-1 opacity-80">{staff?.role}</p>
          <p className="mt-1 opacity-80">
            Chuyên khoa:{" "}
            {staff?.department?.slug ? (
              <Link
                href={`/departments/${staff.department.slug}`}
                className="underline underline-offset-4"
              >
                {staff.department.title}
              </Link>
            ) : (
              <span className="font-medium">Khác</span>
            )}
          </p>

          {staff?.specialty ? (
            <p className="mt-1 opacity-80">
              Chuyên môn: <span className="font-medium">{staff.specialty}</span>
            </p>
          ) : null}
          {staff?.bio && <p className="mt-4 opacity-80">{staff.bio}</p>}
          <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm opacity-80">
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
              <h3 className="font-medium">Học vấn</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {(staff?.education || []).map((e) => (
                  <li key={e.value}>{e.value}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
              <h3 className="font-medium">Ngôn ngữ</h3>
              <p className="mt-2">
                {(staff?.languages || []).map((l) => l.value).join(", ")}
              </p>
              <h3 className="font-medium mt-4">Lịch làm việc</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {(staff?.schedule || []).map((s) => (
                  <li key={`${s.day}-${s.time}`}>
                    {s.day} {s.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Link
              href="/reservation"
              className="rounded-full px-5 py-3 text-sm font-medium border border-black/10 dark:border-white/10"
            >
              Đặt lịch khám
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const ids = new Set<string>();
  for (const d of DEPARTMENTS) {
    for (const member of doctorsByDepartment[d.slug] || []) {
      ids.add(member.id);
    }
  }
  return Array.from(ids).map((id) => ({ staff: id }));
}
