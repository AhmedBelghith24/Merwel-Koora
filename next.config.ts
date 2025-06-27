// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors during builds (e.g., for Vercel deployment)
    ignoreDuringBuilds: true,
  },
  images: {
    // Allow images from this external domain
    domains: ['images.pexels.com'],
  },
}

module.exports = nextConfig
