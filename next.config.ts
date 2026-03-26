import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // Optional: you can limit it to your specific Cloudinary cloud name
        // pathname: '/your-cloud-name/**',
      },
    ],
  },
};

export default nextConfig;
