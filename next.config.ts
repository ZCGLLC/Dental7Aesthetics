import type { NextConfig } from "next";

const repoName = "Dental7Aesthetics";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Project Pages URL: https://zcgllc.github.io/Dental7Aesthetics/
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
