"use client";

import { useState, useEffect } from "react";
import cx from "classnames";
import { List } from "@mui/material";
import { ChevronDownIcon } from "@/icons/ChevronDownIcon";
import { ButtonWithPopover } from "./ButtonWithPopover";
import { Button } from "./Button";
import { CheckIcon } from "@/icons/CheckIcon";

type ResultDefault = {
	text?: string;
	color?: string;
};

type ButtonDropdownSelectTagProps = {
	options: {
		value: string;
		color: string;
		bg: string;
		text: string;
	}[];
	classNameButton?: string;
	resultDefault?: ResultDefault;
	mutationFn: (value: string) => Promise<void>;
};

export const ButtonDropdownSelectTag = ({
	options,
	resultDefault,
	mutationFn,
	classNameButton = "flex justify-center rounded-lg mx-auto ",
}: ButtonDropdownSelectTagProps) => {
	const [isUpdate, setIsUpdate] = useState(false);
	const [result, setResult] = useState<ResultDefault>();

	useEffect(() => {
		setResult(resultDefault);
	}, [resultDefault]);

	return (
		<ButtonWithPopover
			renderButton={({ openPopover }) => (
				<Button
					className={`${classNameButton} ${
						isUpdate ? "bg-blue-200" : "bg-transparent"
					}`}
					variant="outlined"
					color="inherit"
					onClick={(e) => {
						setIsUpdate(true);
						e.stopPropagation();
						openPopover(e);
					}}>
					<p
						className={cx(
							`font-inter font-medium text-xs px-2 text-center rounded-full ${result?.color}`
						)}>
						{result?.text}
					</p>
				</Button>
			)}
			renderPopover={({ Popover, isPopoverOpen, anchorEl, closePopover }) => (
				<Popover
					disableScrollLock
					PaperProps={{
						elevation: 0,
						classes: {
							root: "mr-8 border border-blue-400 rounded-lg box-border shadow",
						},
					}}
					id="menu"
					open={isPopoverOpen}
					anchorEl={anchorEl}
					onClose={(e: Event) => {
						e.stopPropagation();
						setIsUpdate(false);
						closePopover();
					}}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "center",
					}}>
					<nav aria-label="past showing actions" className="w-[160px]">
						<List>
							{options.map(({ value, text, color, bg }) => (
								<div
									key={value}
									className="text-xs p-2 font-semibold cursor-pointer font-inter flex items-center relative text-black"
									onClick={(e) => {
										e.stopPropagation();

										mutationFn(value)
											.then(() => {
												setResult({
													color: `${color} ${bg}`,
													text,
												});
												setIsUpdate(false);
											})
											.catch(() => setIsUpdate(false));
									}}>
									{result?.text === text && (
										<CheckIcon className="h-4 w-4 text-black absolute" />
									)}
									<span className="ml-6">{text} </span>
								</div>
							))}
						</List>
					</nav>
				</Popover>
			)}
		/>
	);
};
