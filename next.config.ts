import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["react-infinite-scroll-component"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
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
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
  async rewrites() {
    return [
      {
<<<<<<< HEAD
        source: "/api/:path*",
=======
        source: "/api/:path",
>>>>>>> b27537c (Fix: differents fixs)
        destination: `${process.env.BACKEND_INTERNAL_URL}/api/:path`,
      },
    ];
  },
};

export default nextConfig;
