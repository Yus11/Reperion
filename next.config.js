/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  env: {
    API_TOKEN: process.env.API_TOKEN,
    API: process.env.API,
    API_URL: process.env.API_URL,
  },
}

module.exports = nextConfig
