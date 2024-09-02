/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pocketbase.sapphirenw.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
