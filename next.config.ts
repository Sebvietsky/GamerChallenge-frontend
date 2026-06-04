import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ],
  },
};

export default nextConfig;
