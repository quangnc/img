import type { ReactElement } from "react";
import type { CheckboxProps as MuiCheckboxProps } from "@mui/material";
import type { CheckboxLabelProps } from "./CheckboxLabel";

import cx from "classnames";
import { Checkbox as MuiCheckbox } from "@mui/material";

import { CheckboxLabel } from "./CheckboxLabel";
import { SizeProps } from "@/shared/utils/sizes";
import { EmptyRoundedCheckboxIcon } from "@/icons/EmptyRoundedCheckboxIcon";
import { EmptyCheckboxIcon } from "@/icons/EmptyCheckboxIcon";
import { OutlinedRoundedCheckboxIcon } from "@/icons/OutlinedRoundedCheckboxIcon";
import { SelectedCheckboxIcon } from "@/icons/SelectedCheckboxIcon";
import { FilledRoundedCheckboxIcon } from "@/icons/FilledRoundedCheckboxIcon";
import { IndeterminateRoundedCheckboxIcon } from "@/icons/IndeterminateRoundedCheckboxIcon";
import { IndeterminateCheckboxIcon } from "@/icons/IndeterminateCheckboxIcon";

export type CheckboxProps = Omit<MuiCheckboxProps, "size"> &
	SizeProps &
	Partial<Pick<CheckboxLabelProps, "label">> & {
		circular?: boolean;
		outlined?: boolean;
	};

export const Checkbox = ({
	outlined = false,
	circular = false,
	size = "small",
	color = "primary",
	disabled = false,
	label,
	...props
}: CheckboxProps) => {
	const uncheckedColor = {
		"text-gray-200": disabled,
		"text-gray-600": !disabled,
	};

	const checkedColor = {
		"text-gray-500": disabled,
		"text-primary": color === "primary",
		"text-secondary": color === "secondary",
		"text-danger": color === "error",
		"text-success": color === "success",
		"text-info": color === "info",
		"text-warning": color === "warning",
	};

	const sizing = {
		"h-4 w-4": size === "small",
		"h-5 w-5": size === "medium",
		"h-6 w-6": size === "large",
	};

	const EmptyIcon = circular ? EmptyRoundedCheckboxIcon : EmptyCheckboxIcon;
	const FilledIcon = circular
		? outlined
			? OutlinedRoundedCheckboxIcon
			: FilledRoundedCheckboxIcon
		: SelectedCheckboxIcon;
	const IndterminateIcon = circular
		? IndeterminateRoundedCheckboxIcon
		: IndeterminateCheckboxIcon;

	const LabelWrapper = ({ children }: { children: ReactElement }) =>
		label ? (
			<CheckboxLabel label={label}>{children}</CheckboxLabel>
		) : (
			<>{children}</>
		);

	return (
		<LabelWrapper>
			<MuiCheckbox
				disabled={disabled}
				icon={
					<EmptyIcon
						className={cx({
							...uncheckedColor,
							...sizing,
						})}
					/>
				}
				checkedIcon={
					<FilledIcon
						className={cx(
							{
								...checkedColor,
								...sizing,
							},
							props.className
						)}
					/>
				}
				indeterminateIcon={
					<IndterminateIcon
						className={cx({
							...checkedColor,
							...sizing,
						})}
					/>
				}
				{...props}
			/>
		</LabelWrapper>
	);
};
