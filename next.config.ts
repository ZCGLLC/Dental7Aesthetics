import type { NextConfig } from "next";

const repoName = "Dental7Aesthetics";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Project Pages URL: https://zcgllc.github.io/Dental7Aesthetics/
  basePath,
  assetPrefix: isGithubPages ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    // next/image does not always honor basePath for unoptimized static export
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
