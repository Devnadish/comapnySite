/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "dreamtoapp-worksample.s3.eu-north-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "d1jgb0iyz7gf72.cloudfront.net",
      },
    ],
    // domains: ["images.unsplash.com"], // Add any other domains you want to allow
  },
};

export default nextConfig;
