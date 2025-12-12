import type { NextConfig } from "next";

const repoInfo = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const repoOwner = repoInfo[0] || "keya770";
const repoName = repoInfo[1] || "pro_website_uae";

// More reliable for GitHub Pages than NODE_ENV alone
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const basePath = isGitHubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // GitHub Pages repo deployment: https://<owner>.github.io/<repo>/
  basePath: isGitHubPages ? basePath : "",
  assetPrefix: isGitHubPages ? `${basePath}/` : "",

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_REPO_OWNER: repoOwner,
    NEXT_PUBLIC_REPO_NAME: repoName,
  },
};

export default nextConfig;
