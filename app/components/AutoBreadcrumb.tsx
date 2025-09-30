"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "./Breadcrumb";
import { useBreadcrumbOverrides } from "./breadcrumb-provider";

// Automatically renders breadcrumb trail based on pathname and context overrides.
export function AutoBreadcrumb() {
  const pathname = usePathname();
  const { overrides, customItems } = useBreadcrumbOverrides();
  const [dynamicTitle, setDynamicTitle] = useState<string | null>(null);

  // Allow dynamic document.title extraction ONLY for certain detail pages (e.g. blog posts)
  // to avoid overriding explicitly provided breadcrumb labels (like staff names).
  const DYNAMIC_TITLE_ALLOWED_PREFIXES = ["/blogs/"];
  const isStaffRoute =
    /^\/teams\/[^/]+$/.test(pathname) ||
    /^\/departments\/[^/]+\/staffs\/[^/]+$/.test(pathname);
  const isEligibleForDynamicTitle =
    DYNAMIC_TITLE_ALLOWED_PREFIXES.some((p) => pathname.startsWith(p)) &&
    !isStaffRoute;
  const GENERIC_TITLES = React.useMemo(
    () =>
      new Set([
        "Team",
        "Our Team",
        "Departments",
        "Department",
        "Staff",
        "Staffs",
        "Home",
        // Vietnamese equivalents
        "Đội ngũ",
        "Chuyên khoa",
        "Nhân sự",
        "Trang chủ",
      ]),
    []
  );

  const disabled = !pathname || pathname === "/"; // no breadcrumb on home

  const rawSegments = pathname
    .split("?")[0]
    .split("#")[0]
    .split("/")
    .filter(Boolean);
  // Ignore structural segments that shouldn't appear as their own breadcrumb level.
  const segments = rawSegments.filter((seg) => !["staffs"].includes(seg));
  const items: { href: string; label: string }[] = [
    { href: "/", label: "Trang chủ" },
  ];
  let cumulative = "";
  segments.forEach((seg) => {
    cumulative += `/${seg}`;
    const label =
      overrides[cumulative] ||
      seg.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    items.push({ href: cumulative, label });
  });

  // Attempt dynamic document title extraction for last segment if not overridden
  const lastPath = items[items.length - 1]?.href;
  const lastHasOverride = !!(lastPath && overrides[lastPath]);
  useEffect(() => {
    if (disabled || lastHasOverride || customItems) {
      setDynamicTitle(null);
      return;
    }
    if (!isEligibleForDynamicTitle) {
      setDynamicTitle(null);
      return;
    }
    const raw = document.title;
    if (!raw) return;
    const baseSplit = raw.split("—");
    const candidate = baseSplit[0].trim();
    if (
      candidate &&
      candidate.length > 0 &&
      candidate.toLowerCase() !== "healthplus clinic" &&
      !GENERIC_TITLES.has(candidate)
    ) {
      setDynamicTitle(candidate);
    } else {
      setDynamicTitle(null);
    }
  }, [
    pathname,
    lastHasOverride,
    disabled,
    customItems,
    isEligibleForDynamicTitle,
    GENERIC_TITLES,
  ]);

  let finalItems = items.map((it, idx) => {
    if (idx === items.length - 1 && dynamicTitle && !lastHasOverride) {
      return { ...it, label: dynamicTitle };
    }
    return it;
  });

  if (customItems && customItems.length) {
    // Ensure Home is present at start; if not, add it.
    const withHome =
      customItems[0].href === "/"
        ? customItems
        : [{ href: "/", label: "Trang chủ" }, ...customItems];
    finalItems = withHome;
  }

  if (disabled) return null;

  return (
    <div className="w-full mt-1 mb-1">
      <div
        className="mx-auto max-w-6xl px-4 flex justify-start relative z-10 overflow-x-auto"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="min-w-fit">
          <Breadcrumb items={finalItems} hideCurrentLink showHomeIcon />
        </div>
      </div>
    </div>
  );
}
export default AutoBreadcrumb;
