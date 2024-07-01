import LayoutPage from "@/components/LayoutPage";
import { FC } from "react";
import EditorScreensThumb from "../EditorScreens/EditorScreensThumb";
import EditorDetailContent from "./EditorDetailContent";
import EditorDetailGenerate from "./EditorDetailGenerate";
import RecommendedModel from "../RecommendedModel";

const EditorDetailScreens: FC = () => {
	return (
		<LayoutPage>
			<main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
				<EditorScreensThumb />
				<div className="grid gap-4 grid-cols-2 w-full">
					<EditorDetailContent />
					<EditorDetailGenerate />
				</div>
				<div>
					<RecommendedModel />
				</div>
			</main>
		</LayoutPage>
	);
};

export default EditorDetailScreens;
