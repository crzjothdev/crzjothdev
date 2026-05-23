/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config) => {
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOf) => {
          if (Array.isArray(oneOf.use)) {
            oneOf.use.forEach((use) => {
              if (
                use.loader &&
                use.loader.includes('css-loader') &&
                use.options &&
                use.options.url !== false
              ) {
                use.options.url = false
              }
            })
          }
        })
      }
    })
    return config
  },
}

module.exports = nextConfig
