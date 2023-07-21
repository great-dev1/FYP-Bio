/** @type {import('next').NextConfig} */
// const withVideos = require('next-videos');
const nextConfig = {
  // reactStrictMode: true,
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  // images: {
  //   dangerouslyAllowSVG: true,
  //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  // },
  // experimental: {
  //   externalDir: true,
  //   fontLoaders: [
  //     { loader: '@next/font/google', options: { subsets: ['latin'] } },
  //   ],
  // },
  // ...withVideos()
}

module.exports = nextConfig
