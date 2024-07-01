import React, { FC } from "react";

const LayoutFooter: FC = () => {
	return (
		<footer>
			<div className="container">
				<div className="border-t border-[#C1C1C1] md:border-dark-500 pt-5 md:pt-10 pb-11 text-base leading-[26px] md:text-left text-center flex justify-between">
					<p className="md:col-span-5">
						Powered by{/* */}{" "}
						<a className="underline" href="https://replicate.com/">
							Replicate
						</a>{" "}
						{/* */}and{/* */}{" "}
						<a className="underline" href="https://www.bytescale.com/">
							Bytescale
						</a>{" "}
					</p>
					<p className="md:col-span-5 md:text-right">
						Created by{/* */}{" "}
						<a className="underline" href="https://twitter.com/nutlope">
							Hassan
						</a>{" "}
						{/* */}(hassan@roomgpt.io)
					</p>
				</div>
			</div>
		</footer>
	);
};

export default React.memo(LayoutFooter);
