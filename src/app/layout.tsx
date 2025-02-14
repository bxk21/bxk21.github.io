import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Body from "@/components/layout/Body";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Bo Kang's Portfolio",
	description: "Bo Kang's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen size-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
					<Header/>
					<Body>
						{children}
					</Body>
					<Footer/>
				</div>
			</body>
		</html>
	);
}
