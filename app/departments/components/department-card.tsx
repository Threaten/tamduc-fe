import Link from "next/link";
import Image from "next/image";

export function DepartmentCard({
  slug,
  title,
  description,
  icon,
  staffs,
}: {
  slug: string;
  title: string;
  description: string;
  icon?: string;
  staffs?: { docs: unknown[] } | null;
}) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
      <div className="flex items-center gap-2">
        {icon ? <Image src={icon} alt="" width={50} height={50} /> : null}
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-sm mt-1 opacity-80">{description}</p>
      <div className="mt-3 flex items-center gap-4 text-xs opacity-80">
        <div className="flex items-center gap-1">
          <span
            aria-hidden
            className="shrink-0 inline-block w-1.5 h-1.5 rounded-full bg-[currentColor]"
          />{" "}
          {staffs?.docs.length ?? 0} Nhân sự
        </div>
        <div className="flex items-center gap-1">
          <span
            aria-hidden
            className="shrink-0 inline-block w-1.5 h-1.5 rounded-full bg-[currentColor]"
          />{" "}
          Thời gian chờ TB 15p
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <Link
          href={`departments/${slug}`}
          className="text-sm underline underline-offset-4"
        >
          Chi tiết →
        </Link>
      </div>
    </div>
  );
}
