/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
    
      {
        source: '/etudes',
        destination: '/Etudes/',
        permanent: true,
      },
    ]
  },
}