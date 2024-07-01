import { SvgIconProps } from "@/shared/types/svg-icon";

export const SelectedCheckboxIcon = ({ className }: SvgIconProps) => {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4Z" />
			<path
				d="M18.1875 7.875L9.9375 16.125L5.8125 12"
				stroke="white"
				strokeWidth="1.3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M4 2H20V0H4V2ZM22 4V20H24V4H22ZM20 22H4V24H20V22ZM2 20V4H0V20H2ZM4 22C2.89543 22 2 21.1046 2 20H0C0 22.2091 1.79086 24 4 24V22ZM22 20C22 21.1046 21.1046 22 20 22V24C22.2091 24 24 22.2091 24 20H22ZM20 2C21.1046 2 22 2.89543 22 4H24C24 1.79086 22.2091 0 20 0V2ZM4 0C1.79086 0 0 1.79086 0 4H2C2 2.89543 2.89543 2 4 2V0Z" />
		</svg>
	);
};
