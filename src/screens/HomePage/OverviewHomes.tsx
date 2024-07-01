import React, { FC } from "react";

const OverviewHomes: FC = () => {
	return (
		<main className="pt-3 md:pt-[107px] mb-16 md:pb-[156px] overflow-hidden">
			<div className="container flex items-center md:flex-row flex-col md:gap-0 gap-12 relative">
				<div className="">
					<div className="max-w-[574px] md:text-left text-center">
						<div className="px-7 py-4 text-sm md:text-md bg-gray-200 rounded-[20px] inline-block mb-8 md:mb-10">
							Used by over{" "}
							<a
								href="https://twitter.com/nutlope/status/1696210433168814518"
								target="_blank"
								className="text-primary-700 font-extrabold hover:underline underline-offset-4 transition hover:text-primary-600">
								2 million people
							</a>{" "}
							to redesign homes
						</div>
						<h1 className="text-4xl font-bold mb-7 md:mb-[60px]">
							Your personal <span className="text-primary-700">AI</span>{" "}
							interior designer
						</h1>
						<div className="flex justify-center md:justify-start">
							<a
								className="font-bold text-md leading-[1.1] inline-flex items-center text-center justify-center gap-3 focus:ring-4  py-4 md:py-5 px-8 md:px-10 rounded-full border border-primary-700 bg-primary-700 ring-primary-700/40 text-white"
								href="/dream">
								Redesign your room
								<img src="https://assets.roomgpt.io/logout.svg" alt="" />
							</a>
						</div>
					</div>
				</div>
				<div>
					<img
						className="absolute -translate-y-1/2 left-[48%] w-[871px] hidden md:block"
						src="https://assets.roomgpt.io/main-hero-desktop.png"
						alt=""
					/>
					<img
						className="block w-full md:hidden"
						src="https://assets.roomgpt.io/main-hero.png"
						alt=""
					/>
				</div>
			</div>
		</main>
	);
};

export default React.memo(OverviewHomes);
