/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  output: 'standalone',
  eslint: {
    // Disable ESLint during build
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['via.placeholder.com'],
  },
  // You can specify a custom port in the server settings (though using .env.local is preferred)
  // server: {
  //   port: 3001
  // }
}

module.exports = nextConfig
