/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    domains: ['slack.wajih.co'],
  },
}

export default nextConfig
