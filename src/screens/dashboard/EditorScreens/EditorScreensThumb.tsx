import React, { FC } from "react";

const EditorScreensThumb: FC = () => {
	return (
		<section className="py-4 text-center w-full h-40 bg-gray-500 text-white">
			<h4 className="hidden">Thumb</h4>
			<p>gif image banner</p>
		</section>
	);
};

export default React.memo(EditorScreensThumb);
