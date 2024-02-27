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
				<SwiperSlide className="bg-yellow-200">
					<main className="h-full bg-center bg-cover bg-[url('../assets/images/bg-feature-small.jpg')] lg:bg-[url('../assets/images/bg-feature-large.jpg')]">
						<FeatureSwiper />
					</main>
				</SwiperSlide>
				<SwiperSlide className="bg-orange-500">
					<main className="h-full bg-center bg-cover bg-[url('../assets/images/bg-news-small.jpg')] lg:bg-[url('../assets/images/bg-news-large.jpg')]"></main>
				</SwiperSlide>
				<SwiperSlide className="bg-green-200">
					<Image
						src={require("@/assets/images/img-feature-1-m.webp")}
						alt="feature game"
						className="h-[375px] w-[212px]"
						quality={100}
					/>
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
