import { SvgIconProps } from "@/shared/types/svg-icon";

export const CheckIcon = ({ className }: SvgIconProps) => {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M5 13l4 4L19 7"
			/>
		</svg>
	);
};
