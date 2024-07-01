import React, { FC } from "react";

const PartnerHome: FC = () => {
	return (
		<section className="mb-20 md:mb-[120px]">
			<div className="container">
				<div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
					<a className="flex justify-center" href="/">
						<img
							className="w-[70%] md:w-auto"
							src="https://assets.roomgpt.io/businessInsider.svg"
							alt=""
						/>
					</a>
					<a className="flex justify-center" href="/">
						<img
							className="w-[70%] md:w-auto"
							src="https://assets.roomgpt.io/MSN.svg"
							alt=""
						/>
					</a>
					<a className="flex justify-center" href="/">
						<img
							className="w-[70%] md:w-auto"
							src="https://assets.roomgpt.io/NBC.svg"
							alt=""
						/>
					</a>
					<a className="flex justify-center" href="/">
						<img
							className="w-[70%] md:w-auto"
							src="https://assets.roomgpt.io/businessOfHome.svg"
							alt=""
						/>
					</a>
					<a className="flex justify-center" href="/">
						<img
							className="w-[70%] md:w-auto"
							src="https://assets.roomgpt.io/yahooNews.svg"
							alt=""
						/>
					</a>
				</div>
			</div>
		</section>
	);
};

export default React.memo(PartnerHome);
