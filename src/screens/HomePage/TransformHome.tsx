import React, { FC } from "react";

const TransformHome: FC = () => {
	return (
		<section className="mb-[50px] md:mb-20">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-10 items-center">
					<div className="max-w-[500px] text-center md:text-left">
						<h2 className="font-bold text-2xl mb-4 md:mb-8">
							<span className="text-primary-700">Transform any room</span> with
							just one photo
						</h2>
						<p className="text-[#555F68] dark:text-dark-200 mb-8">
							See what our over 2 million users are saying about the product.
						</p>
						<div>
							<a
								className="font-bold text-md leading-[1.1] inline-flex items-center text-center justify-center gap-3 focus:ring-4  py-4 md:py-5 px-8 md:px-10 rounded-full border border-primary-700 bg-primary-700 ring-primary-700/40 text-white"
								href="/dream">
								Try it now
								<img src="https://assets.roomgpt.io/logout.svg" alt="" />
							</a>
						</div>
					</div>
					<div className="flex lg:justify-end">
						<img
							className="w-full md:w-auto max-w-[527px]"
							src="https://assets.roomgpt.io/ctaImage.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default React.memo(TransformHome);
