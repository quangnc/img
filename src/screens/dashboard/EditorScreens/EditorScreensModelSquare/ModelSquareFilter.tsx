"use client";

import { ButtonDropdownSelectTag } from "@/components/Button/ButtonDropdownSelectTag";
import React, { FC } from "react";

const OPTIONS = [
	{
		value: "",
		color: "",
		bg: "",
		text: "All types",
	},
	{
		value: "1",
		color: "",
		bg: "",
		text: "Boys",
	},
	{
		value: "2",
		color: "",
		bg: "",
		text: "Space scene",
	},
];

const ModelSquareFilter: FC = () => {
	const mutationFn = async (value: string) => {
		console.log(value);
	};
	return (
		<section className="flex justify-between pt-4 items-center">
			<h4>Modal Square</h4>
			<div className="w-max">
				<ButtonDropdownSelectTag
					options={OPTIONS}
					mutationFn={mutationFn}
					resultDefault={{ text: "All types", color: "" }}
				/>
			</div>
		</section>
	);
};

export default React.memo(ModelSquareFilter);
