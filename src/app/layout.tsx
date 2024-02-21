import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
	title: "Soul Knight Prequel",
	description: "Soul Knight Prequel",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<div className="relative">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
