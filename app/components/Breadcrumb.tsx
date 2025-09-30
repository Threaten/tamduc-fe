"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./navigation";
import { ReactNode, useMemo } from "react";
import { HomeIcon } from "./icons/home-icon";

// Breadcrumb component
// Usage examples:
// <Breadcrumb items={[{ href: '/', label: 'Home' }, { href: '/blogs', label: 'Blogs' }, { href: '/blogs/abc', label: 'Post Title'}]} />
// Or rely on automatic derivation from pathname: <Breadcrumb currentLabel={postTitle} />
// Accessibility: nav element with aria-label="Breadcrumb" and list semantics.
export type BreadcrumbItem = { href: string; label: string; icon?: ReactNode };

interface BreadcrumbProps {
  items?: BreadcrumbItem[]; // If provided, used directly
  currentLabel?: string; // Override label for last item if deriving automatically
  className?: string;
  separator?: ReactNode;
  hideCurrentLink?: boolean; // Render last crumb as span instead of link
  showHomeIcon?: boolean; // Prepend icon to Home label
  homeIcon?: ReactNode; // Custom home icon
}

// Simple utility to title-case a slug (cardiology -> Cardiology)
function titleCase(slug: string) {
  return slug
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

export function Breadcrumb({
  items,
  currentLabel,
  className = "",
  separator = <span className="opacity-40">/</span>,
  hideCurrentLink = true,
  showHomeIcon = true,
  homeIcon,
}: BreadcrumbProps) {
  const pathname = usePathname();

  const derived: BreadcrumbItem[] = useMemo(() => {
    if (items && items.length) return items;
    if (!pathname) return [];
    // Build automatic breadcrumbs from pathname, mapping first segment using NAV_LINKS labels.
    const segments = pathname
      .split("?")[0]
      .split("#")[0]
      .split("/")
      .filter(Boolean);
    const crumbs: BreadcrumbItem[] = [{ href: "/", label: "Trang chủ" }];
    let cumulative = "";
    segments.forEach((seg, i) => {
      cumulative += `/${seg}`;
      // Try to find a nav link label for the cumulative path or root segment path
      const match = NAV_LINKS.find(
        (l) => l.href === `/${seg}` || l.href === cumulative
      );
      let label = match?.label || titleCase(seg);
      // Map common English auto labels to Vietnamese if not already translated via NAV_LINKS
      const map: Record<string, string> = {
        home: "Trang chủ",
        departments: "Chuyên khoa",
        department: "Chuyên khoa",
        services: "Dịch vụ",
        service: "Dịch vụ",
        gallery: "Thư viện hình ảnh",
        blogs: "Bài viết",
        blog: "Bài viết",
        contact: "Liên hệ",
        reservation: "Đặt lịch khám",
        teams: "Đội ngũ",
        team: "Đội ngũ",
        faq: "Hỏi đáp",
        emergency: "Cấp cứu",
      };
      const lower = label.toLowerCase();
      if (map[lower]) label = map[lower];
      // If it's the last segment and a currentLabel override is provided, use that.
      if (i === segments.length - 1 && currentLabel) label = currentLabel;
      crumbs.push({ href: cumulative, label });
    });
    return crumbs;
  }, [items, pathname, currentLabel]);

  if (!derived.length) return null;
  const lastIndex = derived.length - 1;

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`.trim()}>
      <ol className="flex flex-wrap items-w gap-2">
        {derived.map((item, idx) => {
          const isLast = idx === lastIndex;
          const labelContent = (
            <span className={isLast ? "font-medium" : "hover:underline"}>
              {item.label}
            </span>
          );
          const content =
            idx === 0 && showHomeIcon ? (
              <span className="inline-flex items-center gap-1">
                {homeIcon || <HomeIcon className="w-3.5 h-3.5" />}
                {labelContent}
              </span>
            ) : (
              labelContent
            );
          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast && hideCurrentLink ? (
                content
              ) : (
                <Link
                  href={item.href}
                  prefetch={false}
                  className="transition-colors"
                >
                  {content}
                </Link>
              )}
              {!isLast && <span className="select-none">{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
