"use client";

import { ThemeProvider } from "next-themes";
import { EmotionCache } from "@emotion/react";
import MuiThemeProvider from "@/libs/mui/ThemeProvider";
import { LazyMotion, domAnimation } from "framer-motion";
import createEmotionCache from "@/libs/mui/createEmotionCache";

const emotionCache = createEmotionCache();

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<MuiThemeProvider emotionCache={emotionCache as EmotionCache}>
			<ThemeProvider attribute="class">
				<LazyMotion features={domAnimation}>{children}</LazyMotion>
			</ThemeProvider>
		</MuiThemeProvider>
	);
};
