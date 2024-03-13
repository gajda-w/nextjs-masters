/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ hostname: "storefront-nextjs-wine.vercel.app" }],
	},
	experimental: {
		typedRoutes: true,
	},
};

export default nextConfig;
