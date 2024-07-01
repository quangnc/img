import { FC } from "react";
import LayoutPage from "@/components/LayoutPage";
import OverviewHomes from "./OverviewHomes";
import PartnerHome from "./PartnerHome";
import FeedbackFormHome from "./FeedbackFormHome";
import TransformHome from "./TransformHome";

const HomeScreens: FC = () => {
	return (
		<LayoutPage>
			<OverviewHomes />
			<PartnerHome />
			<FeedbackFormHome />
			<section className="mb-20 md:mb-40">
				<div className="">
					<div className="container">
						<div className="max-w-[800px] mx-auto mb-9 md:mb-12">
							<h2 className="font-poppins text-3xl text-center font-semibold">
								Rooms that <span className="text-primary-700">RoomGPT</span>{" "}
								created
							</h2>
						</div>
					</div>
					<div>
						<div className="container block md:hidden">
							<div className="flex flex-col gap-5">
								<div
									tabIndex={0}
									className="gi-image justify-center flex select-none ">
									<img
										className="rounded-xl md:rounded-none"
										src="/sample-1.png"
										alt=""
									/>
								</div>
								<div
									tabIndex={0}
									className="gi-image justify-center flex select-none second-slide">
									<img
										className="rounded-xl md:rounded-none"
										src="/sample-2.png"
										alt=""
									/>
								</div>
								<div
									tabIndex={0}
									className="gi-image justify-center flex select-none ">
									<img
										className="rounded-xl md:rounded-none"
										src="/sample-3.png"
										alt=""
									/>
								</div>
								<div
									tabIndex={0}
									className="gi-image justify-center flex select-none ">
									<img
										className="rounded-xl md:rounded-none"
										src="/sample-4.png"
										alt=""
									/>
								</div>
								<div
									tabIndex={0}
									className="gi-image justify-center flex select-none ">
									<img
										className="rounded-xl md:rounded-none"
										src="/sample-5.png"
										alt=""
									/>
								</div>
								<div
									tabIndex={0}
									className="gi-image justify-center flex select-none ">
									<img
										className="rounded-xl md:rounded-none"
										src="/sample-6.png"
										alt=""
									/>
								</div>
								<div
									tabIndex={0}
									className="gi-image justify-center flex select-none ">
									<img
										className="rounded-xl md:rounded-none"
										src="/sample-7.png"
										alt=""
									/>
								</div>
								<div
									tabIndex={0}
									className="gi-image justify-center flex select-none ">
									<img
										className="rounded-xl md:rounded-none"
										src="/sample-8.png"
										alt=""
									/>
								</div>
								<div
									tabIndex={0}
									className="gi-image justify-center flex select-none ">
									<img
										className="rounded-xl md:rounded-none"
										src="/sample-9.png"
										alt=""
									/>
								</div>
								<div
									tabIndex={0}
									className="gi-image justify-center flex select-none ">
									<img
										className="rounded-xl md:rounded-none"
										src="/sample-10.png"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="hidden md:block">
							<div
								className="slick-slider generated-images slick-initialized"
								dir="ltr">
								<div className="slick-list" style={{ padding: "0px 50px" }}>
									<div
										className="slick-track"
										style={{
											width: 15510,
											opacity: 1,
											transform: "translate3d(-5161.5px, 0px, 0px)",
										}}>
										<div
											data-index={-10}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-1.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={-9}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer second-slide"
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-2.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={-8}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-3.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={-7}
											tabIndex={-1}
											className="slick-slide slick-center slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-4.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={-6}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-5.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={-5}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-6.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={-4}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-7.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={-3}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-8.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={-2}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-9.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={-1}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-10.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={0}
											className="slick-slide"
											tabIndex={-1}
											aria-hidden="true"
											style={{ outline: "none" }}>
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-1.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={1}
											className="slick-slide"
											tabIndex={-1}
											aria-hidden="true"
											style={{ outline: "none" }}>
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer second-slide"
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-2.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={2}
											className="slick-slide slick-active"
											tabIndex={-1}
											aria-hidden="false"
											style={{ outline: "none" }}>
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-3.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={3}
											className="slick-slide slick-active slick-center slick-current"
											tabIndex={-1}
											aria-hidden="false"
											style={{ outline: "none" }}>
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-4.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={4}
											className="slick-slide slick-active"
											tabIndex={-1}
											aria-hidden="false"
											style={{ outline: "none" }}>
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-5.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={5}
											className="slick-slide"
											tabIndex={-1}
											aria-hidden="true"
											style={{ outline: "none" }}>
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-6.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={6}
											className="slick-slide"
											tabIndex={-1}
											aria-hidden="true"
											style={{ outline: "none" }}>
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-7.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={7}
											className="slick-slide"
											tabIndex={-1}
											aria-hidden="true"
											style={{ outline: "none" }}>
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-8.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={8}
											className="slick-slide"
											tabIndex={-1}
											aria-hidden="true"
											style={{ outline: "none" }}>
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-9.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={9}
											className="slick-slide"
											tabIndex={-1}
											aria-hidden="true"
											style={{ outline: "none" }}>
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-10.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={10}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-1.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={11}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer second-slide"
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-2.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={12}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-3.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={13}
											tabIndex={-1}
											className="slick-slide slick-center slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-4.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={14}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-5.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={15}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-6.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={16}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-7.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={17}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-8.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={18}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-9.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div
											data-index={19}
											tabIndex={-1}
											className="slick-slide slick-cloned"
											aria-hidden="true">
											<div>
												<div
													tabIndex={-1}
													className="gi-image justify-center flex select-none cursor-pointer "
													style={{
														width: "100%",
														display: "inline-block",
													}}>
													<img
														className="rounded-lg"
														src="/sample-10.png"
														alt=""
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<TransformHome />
		</LayoutPage>
	);
};

export default HomeScreens;
