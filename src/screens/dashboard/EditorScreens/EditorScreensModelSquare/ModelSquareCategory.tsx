import React, { FC } from "react";
import { categories } from "../__mock__";

const ModelSquareCategory: FC = () => {
	return (
		<ul className="pt-4 flex items-center flex-wrap gap-2">
			{categories.map((cate, index) => (
				<li
					key={`category-${index}`}
					className="border border-gray-300 px-2.5 py-1 text-sm rounded-full cursor-pointer">
					{cate}
				</li>
			))}
		</ul>
	);
};

export default React.memo(ModelSquareCategory);
