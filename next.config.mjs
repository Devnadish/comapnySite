/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // domains: ["images.unsplash.com"], // Add any other domains you want to allow
  },
};

export default nextConfig;
