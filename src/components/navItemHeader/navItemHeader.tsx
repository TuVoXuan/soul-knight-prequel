import React from "react";
import Image from "next/image";
import clsx from "clsx";

type Props = {
	title: string;
	active?: boolean;
	onClick: (value: string) => void;
	className?: string;
};

const NavItemHeader = ({ title, onClick, active = false, className }: Props) => {
	return (
		<div className="flex items-center gap-x-3" onClick={() => onClick(title)}>
			{active && (
				<span>
					<Image
						src={require("@/assets/images/menu-active.png")}
						alt="menu active"
						className="w-5 h-5 md:w-7 md:h-7 lg:w-5 lg:h-5"
					/>
				</span>
			)}

			<h5
				className={clsx(
					"text-[#757575] font-medium text-[18px] md:text-[26px] lg:text-[16px]",
					active && "font-semibold text-white",
					className
				)}
			>
				{title}
			</h5>
		</div>
	);
};

export default NavItemHeader;
