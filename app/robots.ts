import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default function robots(): MetadataRoute.Robots {
  const headerList = headers();
  const protocol = headerList.get("x-forwarded-proto") || "https";
  const host = headerList.get("host");
  const BASE_URL = `${protocol}://${host}`;

  return {
    rules: {
      userAgent: "*",
      allow: ["*"],
      disallow: [],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
