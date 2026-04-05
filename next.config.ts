import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "outreachful.allwpblogbackends.com",
      },
      {
        protocol: "https",
        hostname: "xponent.allwpblogbackends.com",
      },
    ],
  },
};

export default nextConfig;
