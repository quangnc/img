import { SvgIconProps } from "@/shared/types/svg-icon";

export const EmptyCheckboxIcon = ({ className }: SvgIconProps) => {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg">
			<rect x="0.5" y="0.5" width="23" height="23" rx="3.5" fill="white" />
		</svg>
	);
};
