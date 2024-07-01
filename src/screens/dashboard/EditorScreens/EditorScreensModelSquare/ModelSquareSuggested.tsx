"use client";

import Image from "next/image";
import React, { FC } from "react";

import { squares } from "../__mock__";

const ModelSquareSuggested: FC = () => {
	return (
		<div className="columns-3 gap-2">
			{squares.map((square, index) => (
				<div className="break-inside-avoid" key={`squares-${index}`}>
					<div className="bg-white p-4 mt-2.5">
						<Image
							src={square?.img}
							alt={square?.title}
							width={200}
							height={250}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default React.memo(ModelSquareSuggested);
