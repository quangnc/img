import React, { FC } from "react";
import { COMPANY } from "@/constants";
import LayoutPage from "@/components/LayoutPage";
import AuthenticationPage from "./auth/AuthenticationPage";

const SignInScreen: FC = () => {
	return (
		<LayoutPage>
			<main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
				<a
					href="https://twitter.com/nutlope/status/1635674124738523139?cxt=HHwWhsCz1ei8irMtAAAA"
					target="_blank"
					rel="noopener noreferrer"
					className="border border-gray-700 rounded-2xl py-2 px-4 text-gray-600 text-sm my-6 duration-300 ease-in-out hover:text-gray-800 transition font-poppins">
					Over{" "}
					<span className="font-semibold text-blue-500">2 million users</span>{" "}
					have used {COMPANY} so far
				</a>
				<h1 className="mx-auto max-w-[620px] font-display text-4xl font-bold sm:text-6xl mb-5">
					Redesign your <span className="text-primary-700">Avatar</span> in
					seconds
				</h1>
				<AuthenticationPage />
			</main>
		</LayoutPage>
	);
};

export default React.memo(SignInScreen);
