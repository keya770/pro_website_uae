import type { NextConfig } from "next";

const repoInfo = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const repoOwner = repoInfo[0] || "keya770";
const repoName = repoInfo[1] || "pro_website_uae";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : undefined,
  assetPrefix: isProd ? `https://${repoOwner}.github.io/${repoName}` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
