import React, { FC } from "react";
import { squareSelected } from "../__mock__";
import { IconButton } from "@mui/material";
import { CloseIcon } from "@/icons/CloseIcon";

const ModelSquareSelected: FC = () => {
	return (
		<ul className="pt-4 flex items-center flex-wrap gap-2">
			{squareSelected.map((square, index) => (
				<li
					key={`square-select-${index}`}
					className="flex items-center px-2.5 py-1 gap-1 border border-gray-300 text-sm rounded-full">
					<IconButton classes={{ root: "p-1 bg-blue-400" }}>
						<CloseIcon className="w-3 h-3 text-gray-300" />
					</IconButton>
					<span>{square}</span>
				</li>
			))}
		</ul>
	);
};

export default React.memo(ModelSquareSelected);
