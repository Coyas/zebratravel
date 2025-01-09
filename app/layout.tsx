import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Zebra Travel Viagens & Turismo",
	description:
		"Descubra o mundo com a nossa agência de viagens e crie memórias inesquecíveis",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<head>
				<meta charSet="utf-8" />
				<title>ZebraTravel</title>
				{/* <!-- Stylesheets --> */}
				<link href="/css/bootstrap.css" rel="stylesheet" />
				<link href="/css/style.css" rel="stylesheet" />
				<link
					rel="shortcut icon"
					href="images/favicon.png"
					type="image/x-icon"
				/>
				<link rel="icon" href="images/favicon.png" type="image/x-icon" />
				{/* <!-- Responsive --> */}
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
				<link href="/css/responsive.css" rel="stylesheet" />
				{/* <!--[if lt IE 9]> */}
				<Script
					src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"
					strategy="lazyOnload"
				/>
				{/* <![endif]-->  */}
			</head>

			<body>
				<div className="page-wrapper">
					{/* <!-- Preloader --> */}
					<div className="preloader"></div>

					<div className="search-backdrop"></div>
					<Navbar />
					{children}
					<Footer />
				</div>
				{/* <!--End pagewrapper-->  */}

				{/* <!--Scroll to top--> */}
				<div className="scroll-to-top scroll-to-target" data-target="html">
					<span className="icon">
						<img src="/images/icons/arrow-up.svg" alt="" title="Go To Top" />
					</span>
				</div>

				<Script src="/js/jquery.js" strategy="lazyOnload" />
				<Script src="/js/popper.min.js" strategy="lazyOnload" />
				<Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
				<Script src="/js/jquery-ui.js" strategy="lazyOnload" />
				<Script src="/js/jquery.fancybox.js" strategy="lazyOnload" />
				<Script src="/js/isotope.js" strategy="lazyOnload" />
				<Script src="/js/touchspin.js" strategy="lazyOnload" />
				<Script src="/js/owl.js" strategy="lazyOnload" />
				<Script src="/js/wow.js" strategy="lazyOnload" />
				<Script src="/js/custom-script.js" strategy="lazyOnload" />
			</body>
		</html>
	);
}
