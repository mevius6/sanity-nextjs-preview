import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // https://nextjs.org/docs/app/api-reference/next-config-js/typescript
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    taint: true,
  },

  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },

  async redirects() {
    return [
      {
        source: '/artists',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/artworks',
        destination: '/catalog',
        permanent: true,
      },
      // Wildcard path matching
      // {
      //   source: '/artists/:slug',
      //   destination: '/about/:slug',
      //   permanent: true,
      // },
    ]
  },
};

export default nextConfig;
