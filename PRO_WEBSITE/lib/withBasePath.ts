const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? "https://keya770.github.io";

/**
 * Prefixes asset paths with the configured basePath for GitHub Pages.
 * Ensures the provided path begins with a slash.
 */
export const withBasePath = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};

/** Builds an absolute URL using the site origin plus the basePath-prefixed resource. */
export const withBaseUrl = (path: string) => `${siteOrigin}${withBasePath(path)}`;

export const siteBaseUrl = withBaseUrl("");
export const basePathValue = basePath;
export const siteOriginValue = siteOrigin;
