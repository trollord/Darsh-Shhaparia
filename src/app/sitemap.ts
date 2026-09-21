import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/journey",
    "/book",
    "/upcoming-book",
    "/hall-of-fame",
    "/beyond-finance",
    "/contact",
    "/things-i-got-wrong",
  ];

  const pages = [
    ...routes.map((r) => ({ url: `${site.url}${r}`, priority: r ? 0.7 : 1 })),
  ];

  return pages.map((p) => ({ ...p, changeFrequency: "monthly" as const }));
}
