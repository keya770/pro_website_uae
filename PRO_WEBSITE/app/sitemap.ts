import { services } from "@/lib/services";
import { withBaseUrl } from "@/lib/withBasePath";

export const dynamic = "force-static";

export default function sitemap() {
  const baseRoutes = ["", "/services", "/about", "/contact"].map((path) => ({
    url: withBaseUrl(path || "/"),
    lastModified: new Date().toISOString(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: withBaseUrl(`/services/${service.slug}`),
    lastModified: new Date().toISOString(),
  }));

  return [...baseRoutes, ...serviceRoutes];
}
