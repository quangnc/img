import { SvgIconProps } from "@/shared/types/svg-icon";

export const FilledRoundedCheckboxIcon = ({ className }: SvgIconProps) => {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg">
			<circle cx="12" cy="12" r="12" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.4351 7.70711C18.6304 7.90237 18.6304 8.21895 18.4351 8.41421L10.3912 16.4581C10.1959 16.6534 9.87935 16.6534 9.68409 16.4581L5.35355 12.1276C5.15829 11.9324 5.15829 11.6158 5.35355 11.4205L5.70711 11.067C5.90237 10.8717 6.21895 10.8717 6.41421 11.067L9.89622 14.549C9.97433 14.6271 10.101 14.6271 10.1791 14.549L17.3745 7.35355C17.5697 7.15829 17.8863 7.15829 18.0816 7.35355L18.4351 7.70711Z"
				fill="white"
			/>
		</svg>
	);
};
