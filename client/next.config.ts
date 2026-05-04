import type { NextConfig } from "next";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
let apiHostname = 'localhost';
try { apiHostname = new URL(apiUrl).hostname; } catch { /* keep default */ }

const nextConfig: NextConfig = {
  output: 'standalone',
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'pixabay.com' },
      {
        protocol: apiUrl.startsWith('https') ? 'https' : 'http',
        hostname: apiHostname,
      },
    ],
  },
};

export default nextConfig;
