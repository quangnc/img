import { EEnv } from "@/shared/types";

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

declare const window: Window & { dataLayer: Record<string, unknown>[] };

export const pageview = (url: string) => {
	if (process.env.NEXT_PUBLIC_VERCEL_ENV !== EEnv.PRODUCTION) {
		return;
	}

	window.dataLayer.push({
		event: "pageview",
		page: url,
	});
};
