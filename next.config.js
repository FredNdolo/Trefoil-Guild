/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  eslint: {
    ignoreDuringBuilds: true,     // This skips ESLint errors during Vercel build
  },
}

module.exports = nextConfig