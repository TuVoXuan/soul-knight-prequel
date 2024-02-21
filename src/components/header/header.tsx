"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavItemHeader from "../navItemHeader/navItemHeader";
import clsx from "clsx";

type Props = {};

const Header = (props: Props) => {
	const [activeMenu, setActiveMenu] = useState<string>("Overview");
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const handleClickMenu = (value: string) => {
		setActiveMenu(value);
	};

	const handleClickShowMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<header
			className="fixed w-full z-40 top-0 left-0 opacity-0 lg:absolute"
			style={{
				translate: "none",
				rotate: "none",
				scale: "none",
				transform: "translate(0px,0px)",
				opacity: 1,
			}}
		>
			<div className="absolute top-0 w-full md:px-20 lg:px-32 bg-black bg-opacity-50 justify-between items-center h-[82.5px] hidden lg:flex">
				<div className="flex flex-shrink-0 items-center">
					<a href="/">
						<Image
							src={require("@/assets/images/soul-knight-prequel-sword.webp")}
							alt="soul-knight-prequel-sword-logo"
							className="w-[166px] h-auto"
							width={219}
							height={61}
						/>
					</a>
				</div>

				<div className="flex items-center">
					<div className="mx-8 cursor-pointer">
						<NavItemHeader
							className="text-white"
							active={activeMenu === "Overview"}
							title="Overview"
							onClick={handleClickMenu}
						/>
					</div>

					<div className="mx-8 cursor-pointer">
						<NavItemHeader
							className="text-white"
							active={activeMenu === "Game Features"}
							title="Game Features"
							onClick={handleClickMenu}
						/>
					</div>
					<div className="mx-8 cursor-pointer">
						<NavItemHeader
							className="text-white"
							active={activeMenu === "News"}
							title="News"
							onClick={handleClickMenu}
						/>
					</div>
				</div>
			</div>

			<div className="relative bg-black bg-opacity-[0.38] h-[55px] md:h-[75px] lg:hidden">
				<div className="relative bg-black bg-opacity-[0.5] h-[55px] z-10 md:h-[75px]">
					<a href="/">
						<Image
							src={require("@/assets/images/soul-knight-prequel-logo-game.webp")}
							alt="soul-knight-prequel-logo-game"
							className="absolute top-[5px] left-[10px] h-[60px] w-[60px] md:h-[81px] md:w-[81px] z-10"
							height={118}
							width={118}
						/>
					</a>

					<div className="pl-[76px] pr-[10px] md:pl-[102px] flex justify-between items-center h-full">
						<div className="flex flex-col text-white">
							<h5 className="font-bold md:text-[22px]">Soul Knight Prequel</h5>
							<h6 className="text-[10px] text-opacity-60 md:text-sm">Diablo-like ARPG</h6>
						</div>

						<span>
							<Image
								src={require("@/assets/images/download-header-btn.webp")}
								alt="download game"
								className="w-[100px] h-[28px] md:w-[137.5px] md:h-[38.5px]"
								width={200}
								height={56}
							/>
						</span>

						<ul className="hover:cursor-pointer" onClick={handleClickShowMenu}>
							<li className="w-[22px] h-[3px] md:w-[30px] md:h-1 bg-[#c2ffe0] rounded-[2px] my-[5px] md:my-[6px]"></li>
							<li className="w-[22px] h-[3px] md:w-[30px] md:h-1 bg-[#c2ffe0] rounded-[2px] my-[5px] md:my-[6px]"></li>
							<li className="w-[22px] h-[3px] md:w-[30px] md:h-1 bg-[#c2ffe0] rounded-[2px] my-[5px] md:my-[6px]"></li>
						</ul>
					</div>
				</div>

				<div
					className={clsx(
						"bg-black/85 pt-[10px] pb-5 px-[90px] z-0 md:pt-[14px] md:pb-7 md:px-32",
						"absolute top-0 left-0 -translate-y-full w-full transition-all duration-1000",
						showMenu && "translate-y-0 top-full"
					)}
				>
					<div className="py-[10px] md:py-[13.75px] border-b-[1px] border-b-[#949494] border-opacity-60 flex justify-center w-full">
						<NavItemHeader onClick={handleClickMenu} active={activeMenu === "Overview"} title="Overview" />
					</div>
					<div className="py-[10px] md:py-[13.75px] border-b-[1px] border-b-[#949494] border-opacity-60 flex justify-center w-full">
						<NavItemHeader
							onClick={handleClickMenu}
							active={activeMenu === "Game Features"}
							title="Game Features"
						/>
					</div>
					<div className="py-[10px] md:py-[13.75px] border-b-[1px] border-b-[#949494] border-opacity-60 flex justify-center w-full">
						<NavItemHeader onClick={handleClickMenu} active={activeMenu === "News"} title="News" />
					</div>

					<div className="py-[10px] md:py-[13.75px] border-b-[1px] border-b-[#949494] border-opacity-60 flex flex-wrap w-full">
						<span className="px-[10px]">
							<Image
								src={require("@/assets/images/facebook-icon.webp")}
								alt="facebook"
								width={80}
								height={80}
								className="w-10 h-[30px] md:w-[55px] md:h-10 flex-shrink-0 basis-auto my-[5px] mx-[2px]"
							/>
						</span>
						<span className="px-[10px]">
							<Image
								src={require("@/assets/images/tiktok-icon.webp")}
								alt="tiktok"
								width={80}
								height={80}
								className="w-10 h-[30px] md:w-[55px] md:h-10 flex-shrink-0 basis-auto my-[5px] mx-[2px]"
							/>
						</span>
						<span className="px-[10px]">
							<Image
								src={require("@/assets/images/Twitter-icon.webp")}
								alt="twitter"
								width={80}
								height={80}
								className="w-10 h-[30px] md:w-[55px] md:h-10 flex-shrink-0 basis-auto my-[5px] mx-[2px]"
							/>
						</span>
						<span className="px-[10px]">
							<Image
								src={require("@/assets/images/discord-icon.webp")}
								alt="discord"
								width={80}
								height={80}
								className="w-10 h-[30px] md:w-[55px] md:h-10 flex-shrink-0 basis-auto my-[5px] mx-[2px]"
							/>
						</span>
						<span className="px-[10px]">
							<Image
								src={require("@/assets/images/youtube-icon.webp")}
								alt="youtube"
								width={80}
								height={80}
								className="w-10 h-[30px] md:w-[55px] md:h-10 flex-shrink-0 basis-auto my-[5px] mx-[2px]"
							/>
						</span>
					</div>

					<div className="flex justify-center w-full">
						<span className="pt-[15px] md:pt-5" onClick={handleClickShowMenu}>
							<Image
								src={require("@/assets/images/close-icon.webp")}
								alt="close"
								className="h-5 w-5"
								height={80}
								width={80}
							/>
						</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
