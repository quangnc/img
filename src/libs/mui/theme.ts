import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#42A87A",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
		text: {
			primary: "#42A87A",
			secondary: "#666666",
			disabled: "#999999",
		},
	},
	typography: {
		fontSize: 16,
	},
});

export default theme;
