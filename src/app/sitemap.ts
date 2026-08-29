import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { articles } from "@/content/writing";
import { projects } from "@/content/projects";
import { entries } from "@/content/research";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/writing",
    "/book",
    "/podcast",
    "/projects",
    "/research",
    "/learning",
    "/journey",
    "/achievements",
    "/things-i-got-wrong",
    "/contact",
  ];

  const pages = [
    ...routes.map((r) => ({ url: `${site.url}${r}`, priority: r ? 0.7 : 1 })),
    ...articles
      .filter((a) => a.status === "published")
      .map((a) => ({ url: `${site.url}/writing/${a.slug}`, priority: 0.8 })),
    ...projects.map((p) => ({
      url: `${site.url}/projects/${p.slug}`,
      priority: 0.8,
    })),
    ...entries.map((e) => ({
      url: `${site.url}/research/${e.slug}`,
      priority: 0.6,
    })),
  ];

  return pages.map((p) => ({ ...p, changeFrequency: "monthly" as const }));
}
