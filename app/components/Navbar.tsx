"use client";

import Link from "next/link";
import ThemeToggle from "../components/theme-toggle";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "./navigation";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect theme (prefer data-theme; fallback to html.dark class).
  useEffect(() => {
    const el = document.documentElement;
    const compute = () => {
      const attr = el.getAttribute("data-theme");
      if (attr) return attr === "dark";
      return el.classList.contains("dark");
    };
    setIsDark(compute());

    const observer = new MutationObserver(() => setIsDark(compute()));
    observer.observe(el, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header
      className={
        `sticky top-0 z-40 transition-colors duration-200 ` +
        (scrolled
          ? "bg-white border-b border-black/30 dark:border-white/40"
          : "bg-transparent border-b border-transparent")
      }
      style={{
        backgroundColor: scrolled
          ? isDark
            ? "#000000"
            : "#ffffff"
          : undefined,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-lg"
          aria-label="Trang chủ"
        >
          Tam Duc Clinic
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {NAV_LINKS.map((l) => {
            const isActive =
              pathname === l.href ||
              (l.href !== "/" && pathname?.startsWith(l.href));
            return (
              <Link
                key={l.href}
                className={
                  `transition-colors hover:opacity-70 ` +
                  (isActive ? "underline underline-offset-4" : "")
                }
                href={l.href}
                aria-current={isActive ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <MobileMenu />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => router.push("/reservation")}
            className="hidden sm:inline-flex btn-secondary"
          >
            Đặt lịch
          </button>
        </div>
      </div>
    </header>
  );
}
