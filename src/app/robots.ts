import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/* Writing, Podcast and Research are hidden for now. The routes still build
   and can still be opened directly, but nothing links to them, they are out
   of the sitemap, and crawlers are asked to leave them alone. Delete the
   disallow list to bring them back. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/writing", "/podcast", "/research"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
