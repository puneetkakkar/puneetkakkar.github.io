/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only configure production mode - let development use defaults
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    images: {
      unoptimized: true
    },
    trailingSlash: false
  })
}

module.exports = nextConfig
