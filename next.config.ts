import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/login-evil-martians',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
