import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/writing", destination: "/research", permanent: true },
      { source: "/writing/:slug", destination: "/research/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
