import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable modern image formats (WebP, AVIF)
    formats: ['image/webp', 'image/avif'],
    // Enable image optimization
    unoptimized: false,
  },
  // Enable compression for better performance
  compress: true,
};

export default nextConfig;
