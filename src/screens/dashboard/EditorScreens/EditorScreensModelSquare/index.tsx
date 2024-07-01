import React, { FC } from "react";
import ModelSquareFilter from "./ModelSquareFilter";
import ModelSquareCategory from "./ModelSquareCategory";
import ModelSquareSelected from "./ModelSquareSelected";
import ModelSquareSuggested from "./ModelSquareSuggested";

const EditorScreensModelSquare: FC = () => {
	return (
		<div className="w-full">
			<ModelSquareFilter />
			<ModelSquareCategory />
			<ModelSquareSelected />
			<ModelSquareSuggested />
		</div>
	);
};

export default React.memo(EditorScreensModelSquare);
