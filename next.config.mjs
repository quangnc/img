/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["flowbite.s3.amazonaws.com", "picsum.photos"],
		deviceSizes: [
			64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840,
		],
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 60,
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
};

export default nextConfig;
