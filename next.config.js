/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random/800x800?img=1', // https://source.unsplash.com/random/800x800/?img=1
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/random/800x800?img=1', // https://source.unsplash.com/random/800x800/?img=1
      },
    ],
  },
}

module.exports = nextConfig
