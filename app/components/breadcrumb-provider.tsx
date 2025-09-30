"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

type OverrideEntry = { path: string; label: string };
export type CustomBreadcrumbItem = { href: string; label: string };
interface BreadcrumbContextValue {
  overrides: Record<string, string>;
  setOverrides: (entries: OverrideEntry[]) => void;
  customItems: CustomBreadcrumbItem[] | null;
  setCustomItems: (items: CustomBreadcrumbItem[] | null) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextValue | null>(null);

export function BreadcrumbProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [overrides, setOverridesState] = useState<Record<string, string>>({});
  const [customItems, setCustomItems] = useState<CustomBreadcrumbItem[] | null>(
    null
  );
  const setOverrides = (entries: OverrideEntry[]) => {
    setOverridesState((prev) => {
      const next = { ...prev };
      for (const e of entries) next[e.path] = e.label;
      return next;
    });
  };
  const value = useMemo(
    () => ({ overrides, setOverrides, customItems, setCustomItems }),
    [overrides, customItems]
  );
  return (
    <BreadcrumbContext.Provider value={value}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumbOverrides() {
  const ctx = useContext(BreadcrumbContext);
  if (!ctx)
    throw new Error(
      "useBreadcrumbOverrides must be used within BreadcrumbProvider"
    );
  return ctx;
}

// Client component to set overrides from a server component tree.
export function SetBreadcrumb({ entries }: { entries: OverrideEntry[] }) {
  const { setOverrides } = useBreadcrumbOverrides();
  // Serialize entries to detect real changes (order + content)
  const signature = useMemo(
    () =>
      JSON.stringify(entries.map((e) => ({ path: e.path, label: e.label }))),
    [entries]
  );
  const [lastSig, setLastSig] = useState<string | null>(null);
  useEffect(() => {
    if (lastSig === signature) return; // no real change
    setOverrides(entries);
    setLastSig(signature);
  }, [signature, entries, lastSig, setOverrides]);
  return null;
}

// Completely replace breadcrumb items (except Home will be auto-added if missing) for a page.
export function SetBreadcrumbItems({
  items,
}: {
  items: CustomBreadcrumbItem[];
}) {
  const { setCustomItems } = useBreadcrumbOverrides();
  const signature = useMemo(
    () => JSON.stringify(items.map((i) => ({ href: i.href, label: i.label }))),
    [items]
  );
  const [last, setLast] = useState<string | null>(null);
  useEffect(() => {
    if (last === signature) return;
    setCustomItems(items);
    setLast(signature);
    return () => {
      // Clear on unmount (page boundary) to avoid bleeding into other pages
      setCustomItems(null);
    };
  }, [signature, items, last, setCustomItems]);
  return null;
}
