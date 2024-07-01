import { type ReactNode } from "react";

import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import theme from "./theme";

type MuiThemeProviderProps = {
	children: ReactNode;
	emotionCache: any;
};

const MuiThemeProvider = ({
	children,
	emotionCache,
}: MuiThemeProviderProps) => {
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</CacheProvider>
	);
};

export default MuiThemeProvider;
