"use client";
import Link from "next/link";
import { HomeIcon } from "./icons/home-icon";
import { ReactNode } from "react";

export type StaticCrumb = { href: string; label: string; icon?: ReactNode };

interface StaticBreadcrumbProps {
  items: StaticCrumb[]; // Must include full chain already (we won't auto-insert)
  className?: string;
  separator?: ReactNode;
  hideCurrentLink?: boolean;
  showHomeIcon?: boolean;
}

export default function StaticBreadcrumb({
  items,
  className = "",
  separator = <span className="opacity-40">/</span>,
  hideCurrentLink = true,
  showHomeIcon = true,
}: StaticBreadcrumbProps) {
  if (!items || !items.length) return null;
  const lastIndex = items.length - 1;
  return (
    <div className="w-full mt-1 mb-1">
      <div
        className="mx-auto max-w-6xl px-4 flex justify-start relative z-10 overflow-x-auto"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <nav
          aria-label="Breadcrumb"
          className={`text-sm min-w-fit ${className}`.trim()}
        >
          <ol className="flex flex-wrap items-center gap-2">
            {items.map((item, idx) => {
              const isLast = idx === lastIndex;
              const labelContent = (
                <span className={isLast ? "font-medium" : "hover:underline"}>
                  {item.label}
                </span>
              );
              const content =
                idx === 0 && showHomeIcon ? (
                  <span className="inline-flex items-center gap-1">
                    <HomeIcon className="w-3.5 h-3.5" />
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
      </div>
    </div>
  );
}
