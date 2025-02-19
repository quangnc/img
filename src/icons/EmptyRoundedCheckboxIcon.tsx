import { SvgIconProps } from "@/shared/types/svg-icon";

export const EmptyRoundedCheckboxIcon = ({ className }: SvgIconProps) => {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg">
			<circle cx="12" cy="12" r="11.5" fill="white" stroke="#DADADA" />
		</svg>
	);
};
