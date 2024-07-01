import React, { FC, ReactNode } from "react";
import LayoutFooter from "./LayoutFooter";
import LayoutNavbar from "./LayoutNavbar";

type TLayoutPageProps = {
	children: ReactNode;
};

const LayoutPage: FC<TLayoutPageProps> = ({ children }) => {
	return (
		<main className="__variable_51dd11 __variable_aee939">
			<div className="dark:bg-dark-1200 bg-white dark:text-white text-dark-1100 font-gilroy">
				<div className="p-2 bg-no-repeat bg-cover bg-top bg-light-main dark:bg-dark-main">
					<LayoutNavbar />
					{children}
				</div>
				<LayoutFooter />
			</div>
		</main>
	);
};

export default React.memo(LayoutPage);
