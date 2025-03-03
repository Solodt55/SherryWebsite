/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx'],
  distDir: '.next',
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  output: 'export',  
};

export default nextConfig;
