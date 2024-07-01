import { SvgIconProps } from "@/shared/types/svg-icon";

export const IndeterminateRoundedCheckboxIcon = ({
	className,
}: SvgIconProps) => {
	return (
		<svg
			width="24px"
			height="24px"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={className}>
			<circle id="Oval" cx="12" cy="12" r="12"></circle>
			<rect
				id="Path"
				fill="#FFFFFF"
				x="4"
				y="11"
				width="16"
				height="2"
				rx="0.5"></rect>
		</svg>
	);
};
