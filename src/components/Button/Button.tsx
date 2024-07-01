"use client";

import {
	Button as MuiButton,
	type ButtonProps as MuiButtonProps,
} from "@mui/material";

import cx from "classnames";
import { Loading } from "../Loading";

export type ButtonProps = MuiButtonProps & {
	loading?: boolean;
};

export const Button = ({
	color = "primary",
	variant = "contained",
	size = "large",
	loading = false,
	startIcon,
	classes,
	onClick,
	children,
	...props
}: ButtonProps) => {
	return (
		<MuiButton
			disableElevation
			size={size}
			color={color}
			variant={variant}
			startIcon={loading ? <Loading size="small" color="inherit" /> : startIcon}
			onClick={(e) => {
				if (!loading && onClick) {
					onClick(e);
				}
			}}
			classes={{
				...classes,
				disabled: cx("border-gray-300", classes?.disabled),
				root: cx(`${classes?.root || ""} !normal-case font-semibold`, {
					"text-white": variant === "contained" && color !== "inherit",
					"bg-white": variant === "outlined",
					"text-xs": size === "small",
					"text-sm": size === "medium",
					"text-base": size === "large",
				}),
			}}
			{...props}>
			{children}
		</MuiButton>
	);
};
