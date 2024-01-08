/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "omhuahwcnzfjnfvzvdxz.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
