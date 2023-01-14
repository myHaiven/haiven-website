/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  rewrites: rewrites,
  swcMinify: true,
};

async function rewrites() {
  return [
    {
      source: "/about",
      destination: "/",
    },
  ];
}
