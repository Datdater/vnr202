// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ['hair-salon-fpt.io.vn', 'images.unsplash.com'],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Cho phép tất cả hostname
      },
      {
        protocol: 'http',
        hostname: '**', // Cho phép cả HTTP nếu cần
      },
    ],
  },
};

export default nextConfig;