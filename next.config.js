/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      beforeFiles: [
        // Serve static HTML files from public directory
        {
          source: '/classroom.html',
          destination: '/classroom.html',
        },
      ],
    };
  },
};

module.exports = nextConfig;
