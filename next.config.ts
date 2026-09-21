import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /achievements was folded into the Hall of Fame; keep old links alive.
      { source: "/achievements", destination: "/hall-of-fame", permanent: true },
    ];
  },
};

export default nextConfig;
