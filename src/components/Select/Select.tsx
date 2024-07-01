import type { ReactNode } from "react";
import type { SelectProps as MuiSelectProps } from "@mui/material";

import { useState, useEffect } from "react";
import { MenuItem, Select as MuiSelect } from "@mui/material";

import { Loading } from "../Loading";
import { Checkbox } from "../Checkbox";

export type Value = string | string[] | number | number[] | unknown;

export type SelectOption<T extends Value> = {
	value: T;
	label: string;
	disabled?: boolean;
};

export type RenderOptionFn<T extends Value> = (
	option: SelectOption<T>,
	selectedValue?: T
) => ReactNode;

export type SelectProps<T extends Value = string> = Omit<
	MuiSelectProps<T>,
	"onChange" | "renderValue"
> & {
	options?: SelectOption<T>[];
	loading?: boolean;
	placeholder?: ReactNode;
	onChange?: (selectedValue: T) => void;
	renderLabel?: RenderOptionFn<T>;
	renderCheckIcon?: RenderOptionFn<T>;
	renderOption?: RenderOptionFn<T>;
	renderValue?: RenderOptionFn<T>;
};

export const Select = <T extends Value = string>({
	loading,
	value: valueProps,
	placeholder,
	options = [],
	native = false,
	multiple = false,
	displayEmpty = true,
	variant = "outlined",
	onChange,
	renderLabel,
	renderCheckIcon,
	renderOption,
	renderValue,
	...props
}: SelectProps<T>) => {
	const [selectedValue, setValue] = useState(valueProps);
	const [optionsMap, setOptionsMap] = useState<Record<string, string>>({});

	useEffect(() => {
		setOptionsMap(
			options.reduce(
				(map, { value, label }) => ({
					...map,
					[`${value}`]: label,
				}),
				{}
			)
		);
	}, [options]);

	useEffect(() => {
		setValue(valueProps);
	}, [valueProps]);

	return (
		<MuiSelect<T>
			value={selectedValue}
			variant={variant}
			native={native}
			multiple={multiple}
			displayEmpty={displayEmpty}
			componentsProps={{
				root: {
					className: "font-inter text-sm",
				},
				input: {
					className: "py-1.5 w-full",
				},
			}}
			onChange={(e) => {
				const value = e.target.value as T;

				setValue(value);
				if (onChange) {
					onChange(value);
				}
			}}
			renderValue={(selectedValue) => {
				if (renderValue) {
					const selectedOption =
						options.find(({ value }) => value === selectedValue) || options[0];
					return renderValue(selectedOption, selectedValue);
				}

				if (loading) {
					return <Loading size="small" />;
				}

				if (
					placeholder &&
					(!selectedValue ||
						(Array.isArray(selectedValue) && selectedValue.length === 0))
				) {
					return placeholder;
				}

				if (multiple && Array.isArray(selectedValue)) {
					return selectedValue.map((val) => optionsMap[val]).join(", ");
				} else {
					return optionsMap[selectedValue as string | number];
				}
			}}
			{...props}>
			{options.map(({ label, value, disabled }) =>
				renderOption ? (
					renderOption({ label, value, disabled }, selectedValue)
				) : native ? (
					<option
						key={`${value}`}
						disabled={disabled}
						label={label}
						value={`${value}`}
					/>
				) : (
					<MenuItem key={label} value={`${value}`} disabled={disabled}>
						{renderCheckIcon
							? renderCheckIcon({ label, value, disabled }, selectedValue)
							: multiple && (
									<Checkbox
										size="medium"
										checked={
											Array.isArray(selectedValue) &&
											selectedValue.includes(value as never)
										}
									/>
							  )}
						{renderLabel ? (
							renderLabel({ label, value, disabled }, selectedValue)
						) : (
							<p className="pl-2 text-sm">{label}</p>
						)}
					</MenuItem>
				)
			)}
		</MuiSelect>
	);
};
