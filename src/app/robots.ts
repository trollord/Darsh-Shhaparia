import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/* Research is hidden for now. The route still builds and can still be opened
   directly, but nothing links to it, it is out of the sitemap, and crawlers
   are asked to leave it alone. Delete the disallow list to bring it back. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/research"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
