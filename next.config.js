/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://boramyy.github.io/invitation"
      : "",
};

module.exports = nextConfig;
