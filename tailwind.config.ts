import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["selector", '[data-mode="dark"]'],
	important: true,
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"dark-1200": "#002B35",
				"dark-1100": "#002B35",
				"primary-700": "#0F7FEF",
			},
			fontSize: {
				md: "1.125rem",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			container: {
				screens: {
					sm: "500px",
					md: "768px",
					lg: "1024px",
					xl: "1170px",
					"2xl": "1496px",
				},
			},
		},
	},
	plugins: [],
};
export default config;
