/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/solutions/consulting',
        destination: '/staffing',
        permanent: true,
      },
      {
        source: '/solutions/fractional',
        destination: '/staffing/fractional',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
