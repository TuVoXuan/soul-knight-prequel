import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import useWindowSize from "../../hooks/useWindowSize";

type Props = {};

const FeatureSwiper = (props: Props) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [isDesktopScreen, setIsDesktopScreen] = useState<boolean>(false);

	const featureSwiperRef = useRef<HTMLUListElement>(null);
	const windowSize = useWindowSize();

	const handleClickNavigationButton = (type: "next" | "prev") => {
		if (featureSwiperRef.current) {
			const slideItems = featureSwiperRef.current.querySelectorAll(".feature-swiper li");
			let currActiveIndex = 0;

			if (type === "next") {
				if (activeIndex === slideItems.length - 1) {
					setActiveIndex(0);
					currActiveIndex = 0;
				} else {
					setActiveIndex(activeIndex + 1);
					currActiveIndex = activeIndex + 1;
				}
			} else {
				if (activeIndex === 0) {
					setActiveIndex(slideItems.length - 1);
					currActiveIndex = slideItems.length - 1;
				} else {
					setActiveIndex(activeIndex - 1);
					currActiveIndex = activeIndex - 1;
				}
			}

			handleNavigateSlide(currActiveIndex);
		}
	};

	const handleNavigateSlide = (index: number) => {
		if (featureSwiperRef.current) {
			setActiveIndex(index);

			const slideItems = featureSwiperRef.current.querySelectorAll(".feature-swiper li");
			if (slideItems.length > 0) {
				slideItems.forEach((item) => {
					item.className = "feature-swiper-slide-not-active";
				});

				if (index === 0) {
					slideItems[0].className = "feature-swiper-slide-active";
					slideItems[1].className = "feature-swiper-next";
					slideItems[slideItems.length - 1].className = "feature-swiper-prev";
				} else if (index === slideItems.length - 1) {
					slideItems[index].className = "feature-swiper-slide-active";
					slideItems[0].className = "feature-swiper-next";
					slideItems[index - 1].className = "feature-swiper-prev";
				} else {
					slideItems[index].className = "feature-swiper-slide-active";
					slideItems[index + 1].className = "feature-swiper-next";
					slideItems[index - 1].className = "feature-swiper-prev";
				}
			}
		}
	};

	useEffect(() => {
		if (windowSize) {
			let tempImgUrls = [];
			if (windowSize < 992) {
				setIsDesktopScreen(false);
			} else {
				setIsDesktopScreen(true);
			}
		}
	}, [windowSize]);

	useEffect(() => {
		const autoSlideTimeout = setTimeout(() => {
			handleClickNavigationButton("next");
		}, 3000);

		return () => {
			clearTimeout(autoSlideTimeout);
		};
	}, [activeIndex]);

	return (
		<div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
			<ul
				ref={featureSwiperRef}
				className="feature-swiper relative h-[390px] w-[230px] md:w-[316px] md:h-[536px] lg:w-[691px] lg:h-[421px]"
			>
				{!isDesktopScreen ? (
					<>
						<li className="feature-swiper-slide-active">
							<Image src={require("@/assets/images/img-feature-1-m.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-next">
							<Image src={require("@/assets/images/img-feature-2-m.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-slide-not-active">
							<Image src={require("@/assets/images/img-feature-3-m.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-slide-not-active">
							<Image src={require("@/assets/images/img-feature-4-m.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-slide-not-active">
							<Image src={require("@/assets/images/img-feature-5-m.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-slide-not-active">
							<Image src={require("@/assets/images/img-feature-6-m.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-slide-not-active">
							<Image src={require("@/assets/images/img-feature-7-m.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-prev">
							<Image src={require("@/assets/images/img-feature-8-m.webp")} alt="feature game" quality={100} />
						</li>
					</>
				) : (
					<>
						<li className="feature-swiper-slide-active">
							<Image src={require("@/assets/images/img-feature-1.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-next">
							<Image src={require("@/assets/images/img-feature-2.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-slide-not-active">
							<Image src={require("@/assets/images/img-feature-3.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-slide-not-active">
							<Image src={require("@/assets/images/img-feature-4.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-slide-not-active">
							<Image src={require("@/assets/images/img-feature-5.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-slide-not-active">
							<Image src={require("@/assets/images/img-feature-6.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-slide-not-active">
							<Image src={require("@/assets/images/img-feature-7.webp")} alt="feature game" quality={100} />
						</li>
						<li className="feature-swiper-prev">
							<Image src={require("@/assets/images/img-feature-8.webp")} alt="feature game" quality={100} />
						</li>
					</>
				)}
			</ul>

			<div className="feature-swiper-navigation">
				<li
					onClick={() => handleClickNavigationButton("prev")}
					className="bg-size-full z-[200] w-[23px] h-[43px] md:w-8 md:h-[60px] rotate-180 bg-[url('../assets/images/arrow-feature-right.png')]"
				></li>
				<li
					onClick={() => handleClickNavigationButton("next")}
					className="bg-size-full z-[200] w-[23px] h-[43px] md:w-8 md:h-[60px] bg-[url('../assets/images/arrow-feature-right.png')]"
				></li>
			</div>

			<ul className="feature-swiper-pagination">
				{Array.from({ length: 8 }, (_, index) => index).map((index) => (
					<li
						key={index}
						className={clsx(index === activeIndex && "feature-swiper-active")}
						onClick={() => handleNavigateSlide(index)}
					></li>
				))}
			</ul>
		</div>
	);
};

export default FeatureSwiper;
