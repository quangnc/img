declare type Locale = string;

export enum EEnv {
	DEVELOPER = "developer",
	PRODUCTION = "production",
}

export enum EMetaDataOgType {
	WEBSITE = "website",
}

export type TMetaData = {
	URL: string | URL;
	siteName: string;
	title?: string;
	description?: string;
	themeColor?: string;
	backgroundColor?: string;
	og: {
		locale?: Locale;
		type?: EMetaDataOgType;
		ogImage: string | URL;
		width?: number;
		height?: number;
	};
	twitter: {
		card?: string;
		site?: string;
	};
};
