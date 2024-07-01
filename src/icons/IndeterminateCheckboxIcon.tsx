import { SvgIconProps } from "@/shared/types/svg-icon";

export const IndeterminateCheckboxIcon = ({ className }: SvgIconProps) => {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg">
			<rect
				id="Rectangle"
				fill="white"
				stroke="#DADADA"
				x="0.5"
				y="0.5"
				width="23"
				height="23"
				rx="2"></rect>
			<rect id="Rectangle" x="4" y="4" width="16" height="16" rx="2"></rect>
		</svg>
	);
};
