/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com', 'pisces.bbystatic.com','avatars.githubusercontent.com']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
