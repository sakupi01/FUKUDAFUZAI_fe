const million = require('million/compiler')
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/seed/picsum/200/200',
      },
    ],
  },
}

module.exports = million.next(nextConfig, { auto: { rsc: true } })
