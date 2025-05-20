import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint checks during `next build`
  },
   images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
