import type { MetadataRoute } from "next";
import { departments as DEPARTMENTS, doctorsByDepartment } from "@/lib/data";

const BASE = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/blogs",
    "/contact",
    "/departments",
    "/emergency",
    "/faq",
    "/gallery",
    "/reservation",
    "/services",
  ].map((p) => ({ url: `${BASE}${p}`, lastModified: now, changeFrequency: "weekly", priority: p === "" ? 1 : 0.8 }));

  const deptRoutes: MetadataRoute.Sitemap = DEPARTMENTS.flatMap((d) => {
    const list: MetadataRoute.Sitemap = [
      { url: `${BASE}/departments/${d.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${BASE}/departments/${d.slug}/doctors`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ];
    const docs = doctorsByDepartment[d.slug] || [];
    for (const doc of docs) {
      list.push({ url: `${BASE}/departments/${d.slug}/doctors/${doc.id}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
    }
    return list;
  });

  // Keep in sync with blog slugs used in app/blogs/*
  const blogSlugs = [
    "healthy-heart-tips",
    "child-vaccination-guide",
    "managing-chronic-pain",
    "understanding-high-cholesterol",
    "flu-season-prep",
    "when-to-see-a-dermatologist",
  ];
  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/blogs/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...deptRoutes, ...blogRoutes];
}
