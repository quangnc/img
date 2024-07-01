import Link from "next/link";
import React, { FC } from "react";

const LayoutNavbar: FC = () => {
	return (
		<nav className="py-6 md:py-8">
			<div className="container flex items-center">
				<div className="flex-grow">
					<div>
						<Link href="/">
							<img
								className="md:h-auto h-5"
								src="https://assets.roomgpt.io/roomgptLogo.svg"
								alt=""
							/>
						</Link>
					</div>
				</div>
				<div className="flex gap-4 items-center">
					<Link
						className="font-bold text-md leading-[1.1] inline-flex items-center text-center justify-center gap-3 focus:ring-4 md:px-9 py-2 md:py-3.5  bg-primary-700 rounded-lg text-white"
						href="/dream">
						Login
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default React.memo(LayoutNavbar);
