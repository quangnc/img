import React, { FC } from "react";

import LayoutPage from "@/components/LayoutPage";
import EditorScreensThumb from "./EditorScreensThumb";
import EditorScreensModelSquare from "./EditorScreensModelSquare";

const EditorScreens: FC = () => {
	return (
		<LayoutPage>
			<main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
				<EditorScreensThumb />
				<EditorScreensModelSquare />
			</main>
		</LayoutPage>
	);
};

export default React.memo(EditorScreens);
