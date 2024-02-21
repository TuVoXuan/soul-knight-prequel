"use client";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function Home() {
	const swiperRef = useRef<SwiperClass>();
	const windowSize = useWindowSize();

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
					<main className="h-full bg-cover bg-[url('../assets/images/bg-home-small.jpg')] lg:bg-[url('../assets/images/bg-home-large.jpg')]"></main>
				</SwiperSlide>
				<SwiperSlide className="bg-yellow-200">Slide 2</SwiperSlide>
				<SwiperSlide className="bg-orange-500">Slide 3</SwiperSlide>
				<SwiperSlide className="bg-green-200">Slide 4</SwiperSlide>

				<span
					onClick={() => swiperRef.current?.slideNext()}
					className="absolute bottom-5 left-[50%] -translate-x-[50%] z-30"
				>
					<Image
						src={require("@/assets/images/arrow-down.webp")}
						alt="arrow down"
						className="w-[20px] h-auto"
					/>
				</span>
			</Swiper>
		</div>
	);
}
