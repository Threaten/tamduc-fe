"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

export interface StaffMember {
  id?: string;
  slug: string;
  name: string;
  role: string;
  years?: number;
  languages?: { value: string }[];
  schedule?: { day: string; time: string }[];
  photo?: { url?: string };
}

interface RoleSectionProps {
  role: string;
  members: StaffMember[];
  perPage?: number;
  mediaBase?: string; // base URL to prepend to relative photo paths
}

export function RoleSection({
  role,
  members,
  perPage = 6,
  mediaBase = "",
}: RoleSectionProps) {
  const [page, setPage] = useState(1);
  const total = members.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  const pageItems = useMemo(() => {
    const start = (page - 1) * perPage;
    return members.slice(start, start + perPage);
  }, [page, perPage, members]);

  function next() {
    setPage((p) => (p < totalPages ? p + 1 : p));
  }
  function prev() {
    setPage((p) => (p > 1 ? p - 1 : p));
  }

  if (!members.length) return null;

  // Map canonical role codes from backend to Vietnamese display labels.
  const translateRole = (r: string) => {
    const key = r.toLowerCase();
    switch (key) {
      case "doctor":
        return "Bác sĩ";
      case "nurse":
        return "Điều dưỡng";
      case "therapist":
        return "Kỹ thuật viên";
      case "others":
      case "other":
        return "Khác";
      default:
        return r; // Fallback: show original if unknown
    }
  };

  const mappedRole = translateRole(role);
  return (
    <section className="role-section">
      <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
        {mappedRole}
        <span className="text-xs font-normal rounded-full border border-black/30 dark:border-white/40 px-2 py-0.5">
          {total}
        </span>
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageItems.map((d) => (
          <div
            key={d.slug}
            className="rounded-xl border border-black/30 dark:border-white/40 p-5"
          >
            <div className="h-32 rounded-lg border border-black/30 dark:border-white/40 relative overflow-hidden flex items-center justify-center text-xs opacity-60">
              {d.photo?.url ? (
                <Image
                  src={
                    d.photo.url.startsWith("http")
                      ? d.photo.url
                      : `${mediaBase}/${d.photo.url}`
                  }
                  fill
                  alt={d.name}
                  className="object-contain"
                />
              ) : (
                <span>Không có ảnh</span>
              )}
            </div>
            <h4 className="font-medium mt-3">{d.name}</h4>
            <p className="text-sm opacity-80">{translateRole(d.role)}</p>
            {d.years !== undefined && (
              <p className="text-xs mt-1 opacity-70">
                {d.years}+ năm •{" "}
                {(d.languages || []).map((l) => l.value).join(", ")}
              </p>
            )}
            {d.schedule?.length ? (
              <div className="mt-3 text-xs opacity-80">
                <p>Lịch làm việc:</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  {d.schedule.map((s) => (
                    <li key={`${s.day}-${s.time}`}>
                      {s.day} {s.time}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="mt-4 flex gap-3">
              <Link
                href={`/teams/${d.slug}`}
                className="text-sm underline underline-offset-4"
              >
                Xem hồ sơ →
              </Link>
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-between gap-4 text-sm">
          <button
            onClick={prev}
            disabled={page === 1}
            className="px-3 py-1 border border-black/30 dark:border-white/40 rounded disabled:opacity-40 hover:bg-black/10 dark:hover:bg-white/10"
            aria-label="Trang trước"
          >
            Trước
          </button>
          <div className="flex items-center gap-2 text-xs">
            <span>
              Trang {page} / {totalPages}
            </span>
          </div>
          <button
            onClick={next}
            disabled={page === totalPages}
            className="px-3 py-1 border border-black/30 dark:border-white/40 rounded disabled:opacity-40 hover:bg-black/10 dark:hover:bg-white/10"
            aria-label="Trang sau"
          >
            Tiếp
          </button>
        </div>
      )}
    </section>
  );
}
