
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["guarded-atoll-38212.herokuapp.com"],
  },
}

module.exports = nextConfig
