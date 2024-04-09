import React from "react";
import Image from "next/image";

type Props = {};

const ArticleBoard = (props: Props) => {
	return (
		<div className="px-[30px] md:px-[41px] lg:px-0 lg:pl-5 lg:pt-[53px] lg:w-[420px]">
			<div className="pt-[2px] h-8 w-full md:h-full lg:h-fit">
				<div className="relative px-5 py-[5px] md:px-7 md:py-[7px] md:h-[44px] h-full border-b border-b-[#855628] border-opacity-[0.17]">
					<div className="absolute w-4 h-[18px] md:w-[22px] md:h-7 bg-size-full left-0 rotate-180 bg-[url('../assets/images/arrow-article-right.png')]"></div>
					<div className="absolute w-4 h-[18px] md:w-[22px] md:h-7 bg-size-full right-0 bg-[url('../assets/images/arrow-article-right.png')]"></div>

					<div className="relative w-full h-full">
						<div className="absolute inline-block whitespace-nowrap w-full overflow-x-hidden">
							<ul className="flex px-1 pb-1 article-list-category-nav">
								<li className="active-category">Newest</li>
								<li className="">Information</li>
								<li className="">Pack Notes</li>
								<li className="">Events</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<ul className="pt-2 h-[220px] overflow-hidden md:pt-[11px] md:h-[291px]">
				<li className="flex items-center justify-between text-[#895b2f] px-2 border-b-[#855628] border-b border-opacity-30 border-dashed cursor-pointer leading-8 md:px-[11px] md:leading-[45px] md:text-[20px]">
					<span className="truncate flex-1">Soul Knight Prequel Server Banner Art Contest</span>
					<span className="w-[50px] text-right md:w-[60px] lg:w-[65px]">02-22</span>
				</li>
				<li className="flex items-center justify-between text-[#895b2f] px-2 border-b-[#855628] border-b border-opacity-30 border-dashed cursor-pointer leading-8 md:px-[11px] md:leading-[45px] md:text-[20px]">
					<span className="truncate flex-1">Soul Knight Prequel S1: Xandu Hotfix Update Notice</span>
					<span className="w-[50px] text-right md:w-[60px] lg:w-[65px]">02-07</span>
				</li>
				<li className="flex items-center justify-between text-[#895b2f] px-2 border-b-[#855628] border-b border-opacity-30 border-dashed cursor-pointer leading-8 md:px-[11px] md:leading-[45px] md:text-[20px]">
					<span className="truncate flex-1">
						Live Soul Knight Prequel on Twitch to Win Skins and Other Rewards!
					</span>
					<span className="w-[50px] text-right md:w-[60px] lg:w-[65px]">01-26</span>
				</li>
				<li className="flex items-center justify-between text-[#895b2f] px-2 border-b-[#855628] border-b border-opacity-30 border-dashed cursor-pointer leading-8 md:px-[11px] md:leading-[45px] md:text-[20px]">
					<span className="truncate flex-1">
						【Announcement】《Soul Knights Prequel》Fair Operation Announcement & Block List Announcement
					</span>
					<span className="w-[50px] text-right md:w-[60px] lg:w-[65px]">01-04</span>
				</li>
				<li className="flex items-center justify-between text-[#895b2f] px-2 border-b-[#855628] border-b border-opacity-30 border-dashed cursor-pointer leading-8 md:px-[11px] md:leading-[45px] md:text-[20px]">
					<span className="truncate flex-1">
						Helxar Gameplay Overview: Harness the Power of Helxar for Adventure Success
					</span>
					<span className="w-[50px] text-right md:w-[60px] lg:w-[65px]">01-24</span>
				</li>
				<li className="flex items-center justify-between text-[#895b2f] px-2 border-b-[#855628] border-b border-opacity-30 border-dashed cursor-pointer leading-8 md:px-[11px] md:leading-[45px] md:text-[20px]">
					<span className="truncate flex-1">
						Prestige Class: Druid Guide - Wild Spirits, Unstoppable Might
					</span>
					<span className="w-[50px] text-right md:w-[60px] lg:w-[65px]">01-20</span>
				</li>
				<li className="flex items-center justify-between text-[#895b2f] px-2 border-b-[#855628] border-b border-opacity-30 border-dashed cursor-pointer leading-8 md:px-[11px] md:leading-[45px] md:text-[20px]">
					<span className="truncate flex-1">
						Prestige Class: Druid Guide - Wild Spirits, Unstoppable Might
					</span>
					<span className="w-[50px] text-right md:w-[60px] lg:w-[65px]">01-20</span>
				</li>
				<li className="flex items-center justify-between text-[#895b2f] px-2 border-b-[#855628] border-b border-opacity-30 border-dashed cursor-pointer leading-8 md:px-[11px] md:leading-[45px] md:text-[20px]">
					<span className="truncate flex-1">
						Prestige Class: Druid Guide - Wild Spirits, Unstoppable Might
					</span>
					<span className="w-[50px] text-right md:w-[60px] lg:w-[65px]">01-20</span>
				</li>
				<li className="flex items-center justify-between text-[#895b2f] px-2 border-b-[#855628] border-b border-opacity-30 border-dashed cursor-pointer leading-8 md:px-[11px] md:leading-[45px] md:text-[20px]">
					<span className="truncate flex-1">
						Prestige Class: Druid Guide - Wild Spirits, Unstoppable Might
					</span>
					<span className="w-[50px] text-right md:w-[60px] lg:w-[65px]">01-20</span>
				</li>
			</ul>

			<a href="#">
				<p className="flex justify-center mt-2 md:mt-[11px] lg:hidden">
					<Image
						src={require("@/assets/images/more-btn.webp")}
						alt="more button"
						className="w-[48px] h-[14px] md:w-[66px] md:h-[20px]"
					/>
				</p>
				<p className="text-[#895b2f] text-right pt-2">MORE +</p>
			</a>
		</div>
	);
};

export default ArticleBoard;
