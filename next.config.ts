import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Files in /public are served with `max-age=0, must-revalidate` by default,
  // which is right for documents and wrong for a 6 MB video: every repeat
  // visit re-checks it and a cold edge cache re-downloads it. The reel files
  // are content-stable — a new cut gets a new filename — so they can be
  // cached hard and for good. This is what keeps playback instant on a
  // second view rather than streaming from scratch again.
  async headers() {
    return [
      {
        source: "/video/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, s-maxage=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // /achievements was folded into the Hall of Fame; keep old links alive.
      { source: "/achievements", destination: "/hall-of-fame", permanent: true },
      // Millionaire Roadmap launched in October 2026, so there is no longer an
      // "upcoming" book; its page was folded into /book, which now covers both.
      { source: "/upcoming-book", destination: "/book", permanent: true },
    ];
  },
};

export default nextConfig;
