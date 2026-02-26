import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/research", destination: "/writing", permanent: true },
      { source: "/research/:slug", destination: "/writing/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
