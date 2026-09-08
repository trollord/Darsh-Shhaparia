import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { articles } from "@/content/writing";
import { entries } from "@/content/research";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/journey",
    "/book",
    "/writing",
    "/podcast",
    "/achievements",
    "/hall-of-fame",
    "/research",
    "/contact",
    "/things-i-got-wrong",
  ];

  const pages = [
    ...routes.map((r) => ({ url: `${site.url}${r}`, priority: r ? 0.7 : 1 })),
    ...articles
      .filter((a) => a.status === "published")
      .map((a) => ({ url: `${site.url}/writing/${a.slug}`, priority: 0.8 })),
    ...entries.map((e) => ({
      url: `${site.url}/research/${e.slug}`,
      priority: 0.6,
    })),
  ];

  return pages.map((p) => ({ ...p, changeFrequency: "monthly" as const }));
}
