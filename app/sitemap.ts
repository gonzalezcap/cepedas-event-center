import type { MetadataRoute } from "next";
import { NAV, EVENT_TYPES, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/", "/spaces", "/events", "/gallery", "/pricing", "/inquiry",
    "/about", "/faq", "/contact", "/privacy", "/terms",
    ...EVENT_TYPES.map((e) => e.slug),
  ];
  const unique = Array.from(new Set(routes));
  return unique.map((path) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
