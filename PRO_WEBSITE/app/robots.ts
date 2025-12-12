import { withBaseUrl } from "@/lib/withBasePath";

export const dynamic = "force-static";

const siteUrl = withBaseUrl("/");

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
