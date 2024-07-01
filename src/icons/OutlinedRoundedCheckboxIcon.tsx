import { SvgIconProps } from "@/shared/types/svg-icon";

export const OutlinedRoundedCheckboxIcon = ({ className }: SvgIconProps) => {
	return (
		<svg
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}>
			<path
				d="M0.5 10C0.5 4.76192 4.76192 0.5 10 0.5C15.2381 0.5 19.5 4.76192 19.5 10C19.5 15.2381 15.2381 19.5 10 19.5C4.76192 19.5 0.5 15.2381 0.5 10Z"
				stroke="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.61456 13.1558L5.90628 10.4475C5.6585 10.1999 5.65853 9.79974 5.90631 9.55208C6.15395 9.30432 6.55388 9.30427 6.80172 9.55211L9.06228 11.8127L14.0313 6.84379C14.279 6.59603 14.6789 6.59599 14.9267 6.84383C15.1744 7.09148 15.1744 7.49145 14.9267 7.7393L9.51 13.1558C9.38636 13.2795 9.22451 13.3415 9.06228 13.3415C8.90005 13.3415 8.7382 13.2795 8.61456 13.1558Z"
				fill="currentColor"
			/>
		</svg>
	);
};
