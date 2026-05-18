/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pollicy.org", pathname: "/wp-content/uploads/**" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;