"use client";
import React, { createContext, useCallback, useContext, useState } from "react";

export type ToastType = "success" | "error" | "info";
interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
  timeout?: number;
}
interface ToastContextValue {
  push: (message: string, type?: ToastType, timeout?: number) => void;
}
const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const push = useCallback(
    (message: string, type: ToastType = "info", timeout = 3500) => {
      const id = Math.random().toString(36).slice(2);
      setItems((prev) => [...prev, { id, message, type, timeout }]);
      if (timeout > 0) {
        setTimeout(() => {
          setItems((prev) => prev.filter((t) => t.id !== id));
        }, timeout);
      }
    },
    []
  );
  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      {/* fallback viewport if consumer forgets */}
      <ToastViewport items={items} setItems={setItems} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export function ToastViewport({
  items,
  setItems,
}: {
  items?: ToastItem[];
  setItems?: React.Dispatch<React.SetStateAction<ToastItem[]>>;
}) {
  // If used via provider's injected viewport, items prop populated; otherwise no-op.
  const list = items || [];
  return (
    <div className="fixed z-50 bottom-4 right-4 flex flex-col gap-2 w-80 max-w-[calc(100%-1rem)]">
      {list.map((t) => {
        // Solid, non-transparent backgrounds for all themes (better visibility on light & dark).
        // Each type gets a saturated background with white text and a slightly brighter accent bar.
        let toneClasses = "";
        let accentColor = "";
        let icon = "";
        switch (t.type) {
          case "success":
            toneClasses =
              "bg-emerald-600 text-white border-emerald-500 dark:bg-emerald-600 dark:border-emerald-500";
            accentColor = "bg-emerald-400";
            icon = "✓";
            break;
          case "error":
            toneClasses =
              "bg-red-600 text-white border-red-500 dark:bg-red-600 dark:border-red-500";
            accentColor = "bg-red-400";
            icon = "⚠";
            break;
          default:
            toneClasses =
              "bg-sky-600 text-white border-sky-500 dark:bg-sky-600 dark:border-sky-500";
            accentColor = "bg-sky-400";
            icon = "ℹ";
        }
        return (
          <div
            key={t.id}
            role={t.type === "error" ? "alert" : "status"}
            aria-live={t.type === "error" ? "assertive" : "polite"}
            aria-atomic="true"
            className={`group relative overflow-hidden rounded-lg border px-4 py-3 text-sm shadow-[0_4px_14px_-2px_rgba(0,0,0,0.25),0_2px_6px_-2px_rgba(0,0,0,0.15)] flex items-start gap-3 animate-fade-in focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black/40 dark:focus-within:ring-white/40 ${toneClasses}`}
          >
            <span
              className={`absolute left-0 top-0 h-full w-1.5 ${accentColor}`}
              aria-hidden="true"
            />
            <span className="mt-0.5 text-base leading-none select-none shrink-0">
              {icon}
            </span>
            <span className="flex-1 leading-relaxed font-medium tracking-tight">
              {t.message}
            </span>
            {setItems && (
              <button
                onClick={() =>
                  setItems((prev) => prev.filter((i) => i.id !== t.id))
                }
                className="opacity-70 hover:opacity-100 active:scale-95 transition text-xs mt-0.5 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-current/40 rounded"
                aria-label="Close notification"
              >
                ✕
              </button>
            )}
          </div>
        );
      })}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.25s ease forwards;
        }
      `}</style>
    </div>
  );
}
