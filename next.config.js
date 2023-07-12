/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com', 'pisces.bbystatic.com']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
