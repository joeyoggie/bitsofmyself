/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

module.exports = nextConfig
