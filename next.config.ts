import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
		],
	},
	experimental: {
		staleTimes: {
			dynamic: 0,
			static: 30,
		},
	},
};

export default nextConfig;
