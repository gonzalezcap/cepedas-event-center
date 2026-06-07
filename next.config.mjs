/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add real CDN/host domains when photos are uploaded
    remotePatterns: [],
  },
};
export default nextConfig;
