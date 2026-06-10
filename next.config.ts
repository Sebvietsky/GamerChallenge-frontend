import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["react-infinite-scroll-component"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      // ajoute aussi les autres domaines que tu utilises (avatars.githubusercontent.com, etc.)
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.igdb.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net"
      }
    ],
  },
};

export default nextConfig;
