/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  reactStrictMode: true,
  ...nextTranslate(),
    images: {
    domains: ['res.cloudinary.com', 'ui-avatars.com', 'i.ibb.co'],
  },
};

module.exports = nextConfig;
