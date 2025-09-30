"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { NAV_LINKS } from "./navigation";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);
  // Mark mounted to avoid hydration mismatch for dynamic style changes
  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Close on route change
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Detect theme changes (mirrors logic used in Navbar)
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

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <>
      {/* Toggle Button (visible on small screens) */}
      <button
        aria-label={open ? "Đóng menu" : "Mở menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        className="md:hidden inline-flex items-center justify-center rounded-md border border-black/30 dark:border-white/40 p-2 text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="sr-only">Menu</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform"
        >
          {open ? (
            <path d="M6 6l12 12M6 18L18 6" />
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}
      {/* Drawer Panel */}
      <aside
        id="mobile-menu-panel"
        className={`fixed z-50 top-0 left-0 h-full w-72 max-w-[80%] md:hidden transform border-r shadow-xl transition-transform duration-300 ease-out flex flex-col border-black/30 dark:border-white/40 ${open ? "translate-x-0" : "-translate-x-full"}`}
        style={
          mounted && isDark !== null
            ? { backgroundColor: isDark ? "#000000" : "#ffffff" }
            : undefined
        }
        role="dialog"
        aria-modal="true"
        aria-label="Điều hướng di động"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-black/30 dark:border-white/40">
          <Link
            href="/"
            className="font-semibold tracking-tight text-base"
            onClick={close}
            aria-label="Trang chủ"
          >
            Tam Duc Clinic
          </Link>
          <button
            aria-label="Đóng menu"
            className="rounded-md p-2"
            onClick={close}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => {
              const isActive =
                pathname === l.href ||
                (l.href !== "/" && pathname?.startsWith(l.href));
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={close}
                    className={`block rounded px-3 py-2 text-sm font-medium transition-colors ${isActive ? "bg-black/5 dark:bg-white/10 underline underline-offset-4" : "hover:bg-black/5 dark:hover:bg-white/10"}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="px-4 py-4 border-t border-black/30 dark:border-white/40 flex items-center justify-between gap-3">
          <ThemeToggle />
          <Link href="/reservation" onClick={close} className="btn-secondary">
            Đặt lịch
          </Link>
        </div>
      </aside>
    </>
  );
}
