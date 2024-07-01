import { footerItems, menuItems, meta } from "@/constants";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	// menu routes
	const routes = menuItems.map((route) => ({
		url: `${meta.URL}${route.path}`,
		lastModified: new Date(),
	}));

	// routes in footer
	const footerRoutes = footerItems.legal.map((route) => ({
		url: `${meta.URL}${route.path}`,
		lastModified: new Date(),
	}));

	//   return [...routes, ...posts];
	return [...routes, ...footerRoutes];
}
