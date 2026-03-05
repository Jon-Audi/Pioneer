import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',       // static export — works on Vercel and any nginx/Docker
  trailingSlash: true,
  images: { unoptimized: true },  // required for static export
}

export default nextConfig
