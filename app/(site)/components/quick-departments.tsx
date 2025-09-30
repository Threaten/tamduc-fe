import Link from "next/link";
import Image from "next/image";
import { getDepartments } from "@/lib/api/queries";

type DepartmentItem = {
  slug: string;
  title: string;
  about: string;
  staffs?: { docs: unknown[] } | null;
  icons: { url: string };
};

export default async function QuickDepartments() {
  const loadedData = (await getDepartments()) as {
    Departments: { docs: DepartmentItem[] };
  };
  const departments: DepartmentItem[] = loadedData.Departments.docs;
  const items = departments.slice(0, 3);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Chuyên khoa
        </h2>
        <Link
          href="/departments"
          className="text-sm underline underline-offset-4"
        >
          Xem tất cả
        </Link>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((d) => (
          <div
            key={d.slug}
            className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Image
                src={`${process.env.ADMIN_API_ENDPOINT}/${d.icons.url}`}
                alt=""
                width={50}
                height={50}
              />
              <h3 className="font-medium">{d.title}</h3>
            </div>
            <p className="text-sm mt-1 opacity-80">{d.about}</p>
            <div className="mt-4">
              <Link
                href={`/departments/${d.slug}`}
                className="text-sm underline underline-offset-4"
              >
                Tìm hiểu thêm →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
