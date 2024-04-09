"use client";
import { useRef } from "react";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FeatureSwiper from "../components/featureSwiper/featureSwiper";
import ArticleBoard from "../components/articleBoard/articleBoard";

export default function Home() {
	const swiperRef = useRef<SwiperClass>();

	return (
		<div className="relative h-screen">
			<Swiper
				direction={"vertical"}
				slidesPerView={1}
				mousewheel={true}
				modules={[Mousewheel, Pagination]}
				className="w-full h-full"
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
			>
				<SwiperSlide>
					<main className="h-full bg-center bg-cover bg-[url('../assets/images/bg-home-small.jpg')] lg:bg-[url('../assets/images/bg-home-large.jpg')]"></main>
				</SwiperSlide>
				<SwiperSlide className="overflow-hidden">
					<main className="h-full bg-center bg-cover bg-[url('../assets/images/bg-feature-small.jpg')] lg:bg-[url('../assets/images/bg-feature-large.jpg')]">
						<FeatureSwiper />

						<div className="absolute z-10 w-[562px] h-[670px] bottom-[60px] translate-y-0 md:bottom-[82px] md:w-[772px] md:h-[921px] lg:w-[1145px] lg:h-[700px] lg:bottom-[50%] left-[50%] lg:translate-y-1/2 -translate-x-1/2">
							<span className="bg-size-full w-[296px] h-[172px] absolute scale-50 bottom-[60px] right-[-20px] md:bottom-[115px] md:right-7 md:scale-[0.7] lg:scale-[0.8] lg:bottom-16 lg:right-12">
								<Image src={require("@/assets/images/stone-1.png")} alt="stone" />
							</span>
							<span className="bg-size-full w-[204px] h-[164px] absolute bottom-[90px] left-[38px] md:bottom-[175px] md:left-20 lg:bottom-16 lg:left-20 scale-50 md:scale-[0.7] lg:scale-[0.8]">
								<Image src={require("@/assets/images/stone-2.png")} alt="stone" />
							</span>
							<span className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-1/2 w-[360px] h-[202px] md:w-[495px] md:h-[278px] lg:w-[600px] lg:h-[337px] lg:bottom-12">
								<Image src={require("@/assets/images/npc-rabbit.gif")} alt="npc rabbit" />
							</span>
						</div>
					</main>
				</SwiperSlide>
				<SwiperSlide>
					<main className="relative flex flex-col items-center justify-center h-full bg-center bg-cover bg-[url('../assets/images/bg-news-small.jpg')] lg:bg-[url('../assets/images/bg-news-large.jpg')]">
						<div className="relative lg:flex w-[335px] h-[568px] md:w-[460px] md:h-[781px] lg:w-[1000px] lg:h-[504px] mt-6 bg-size-full bg-[url('../assets/images/news-board.png')] lg:bg-[url('../assets/images/news-board-lg.png')]">
							<div>
								<Swiper
									pagination={true}
									modules={[Pagination]}
									loop={true}
									autoplay={{
										delay: 2000,
									}}
									className="article-swiper-container"
								>
									<SwiperSlide>
										<div className="w-[280px] h-[158px] md:w-[385px] md:h-[217px] lg:w-[458px] lg:h-[275px] rounded-2xl overflow-hidden">
											<Image
												src={require("@/assets/images/article-img-1.webp")}
												alt="article image"
												className="object-cover lg:h-full"
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="w-[280px] h-[158px] md:w-[385px] md:h-[217px] lg:w-[458px] lg:h-[275px] rounded-2xl overflow-hidden">
											<Image
												src={require("@/assets/images/article-img-2.webp")}
												alt="article image"
												className="object-cover lg:h-full"
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="w-[280px] h-[158px] md:w-[385px] md:h-[217px] lg:w-[458px] lg:h-[275px] rounded-2xl overflow-hidden">
											<Image
												src={require("@/assets/images/article-img-3.webp")}
												alt="article image"
												className="object-cover lg:h-full"
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="w-[280px] h-[158px] md:w-[385px] md:h-[217px] lg:w-[458px] lg:h-[275px] rounded-2xl overflow-hidden">
											<Image
												src={require("@/assets/images/article-img-4.webp")}
												alt="article image"
												className="object-cover lg:h-full"
											/>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>

							<ArticleBoard />

							<span className="absolute scale-50 lg:scale-[0.61] w-[326px] h-[344px] bottom-[-136px] left-[-180px] md:w-[448px] md:h-[473px] md:bg-no-repeat md:bg-cover md:bottom-[-180px] md:left-[-250px] lg:left-[-280px] lg:bottom-[-200px] bg-[url('../assets/images/grass.png')]"></span>
						</div>
					</main>
				</SwiperSlide>
				<SwiperSlide className="bg-green-200">
					<main className="h-full bg-center bg-cover bg-[url('../assets/images/bg-news-small.jpg')] lg:bg-[url('../assets/images/bg-news-large.jpg')]"></main>
				</SwiperSlide>

				<span onClick={() => swiperRef.current?.slideNext()} className="absolute bottom-5 left-[50%] z-30">
					<Image
						src={require("@/assets/images/arrow-down.webp")}
						alt="arrow down"
						className="w-[20px] h-auto animate-bounce md:w-7 lg:w-10"
					/>
				</span>
			</Swiper>
		</div>
	);
}
