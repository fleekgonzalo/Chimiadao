/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  trailingSlash: true,
  images: {
         // Add any other domains if needed
    unoptimized: true,
   
  },
  output: 'export',
};
