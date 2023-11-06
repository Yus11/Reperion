/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com']
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  env: {
    API_TOKEN: process.env.API_TOKEN,
    API: process.env.API,
    API_URL: process.env.API_URL,
  },

  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    }

    return config
  },
}

module.exports = nextConfig
