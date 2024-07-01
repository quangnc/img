import { EMetaDataOgType, type TMetaData } from "@/shared/types";

export const COMPANY = "Pixelity";

export const menuItems = [
	{ path: "/", name: "Home", new: false },
	{ path: "/about", name: "About", new: false },
	{ path: "/blog", name: "Blog", new: true },
];

export const footerItems = {
	resources: [
		{ path: "/", name: "Support", internal: true },
		{ path: "/", name: "Contact Us", internal: true },
	],
	company: [
		{ path: "/", name: "Home", internal: true },
		{ path: "/editor", name: "Editor", internal: true },
	],
	legal: [
		{ path: "/privacy", name: "Privacy Policy", internal: true },
		{ path: "/terms", name: "Terms of Service", internal: true },
		{ path: "/cookies", name: "Cookies", internal: true },
	],
};

export const meta: TMetaData = {
	URL: "http://localhost:3000",
	siteName: COMPANY,
	title: "Gen avatar using AI",
	description: "Gen Avatar",
	themeColor: "##F5E1E6",
	backgroundColor: "#F5E1E6",
	og: {
		locale: "en-US",
		type: EMetaDataOgType.WEBSITE,
		ogImage: "/ogimage.jpg",
		width: 1200,
		height: 630,
	},
	twitter: {
		card: "summary_large_image",
		site: "@pixelity",
	},
};
