export const dynamic = "force-static";

import { services } from "@/lib/services";

const siteUrl = "https://example.ae";

export default function sitemap() {
  const baseRoutes = ["", "/services", "/about", "/contact"].map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified: new Date().toISOString(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...baseRoutes, ...serviceRoutes];
}
