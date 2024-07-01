import React, { FC } from "react";

const AuthenticationPage: FC = () => {
	return (
		<div className="h-[250px] flex flex-col items-center space-y-6 max-w-[670px]">
			<div className="max-w-lg leading-8 text-base font-poppins">
				Sign in below with Google to create a free account and redesign your
				avatar today. You will get <b>3 generations</b> for free.
			</div>
			<button className="bg-gray-200 text-black font-semibold py-3 px-6 rounded-2xl flex items-center space-x-2">
				<img
					alt="google's logo"
					loading="lazy"
					width={20}
					height={20}
					decoding="async"
					data-nimg={1}
					src="https://assets.roomgpt.io/google.png"
					style={{ color: "transparent" }}
				/>
				<span className="text-base">Sign in with Google</span>
			</button>
		</div>
	);
};

export default React.memo(AuthenticationPage);
