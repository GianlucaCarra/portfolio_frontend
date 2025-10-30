import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	 remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
    ],
};

export default nextConfig;
