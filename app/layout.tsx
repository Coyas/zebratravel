import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import QualSection from "@/components/Footer/qualSection";
import HiddenNav from "@/components/Navbar/HiddenNav";

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
					href="/images/favicon.png"
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
					defer
				/>
				{/* <![endif]-->  */}
			</head>

			<body>
				<div className="page-wrapper">
					{/* <!-- Preloader --> */}
					{/* <div className="preloader"></div> */}

					<div className="search-backdrop"></div>

					{/* <!-- Main Header--> */}
					<QualSection sectionType={1} />
					{/* <!--End Main Header --> */}

					{/* <!--Search Backdrop--> */}
					<div className="search-backdrop"></div>

					{/* <!-- Menu Backdrop --> */}
					<div className="menu-backdrop"></div>
					{/* menu mobile */}
					<HiddenNav />
					{/* end menu mobile */}
					<div className="cart-backdrop"></div>

					{children}

					{/* footer */}
					<QualSection sectionType={0} />
					{/* end footer */}
				</div>
				{/* <!--End pagewrapper-->  */}

				{/* <!--Scroll to top--> */}
				<div className="scroll-to-top scroll-to-target" data-target="html">
					<span className="icon">
						<img src="/images/icons/arrow-up.svg" alt="" title="Go To Top" />
					</span>
				</div>

				<Script src="/js/jquery.js" defer />
				<Script src="/js/popper.min.js" defer />
				<Script src="/js/bootstrap.min.js" defer />
				<Script src="/js/jquery-ui.js" defer />
				<Script src="/js/jquery.fancybox.js" defer />
				<Script src="/js/mixitup.js" defer />
				<Script src="/js/isotope.js" defer />
				<Script src="/js/touchspin.js" defer />
				<Script src="/js/owl.js" defer />
				<Script src="/js/wow.js" defer />
				<Script src="/js/custom-script.js" defer />
				{/* async defer strategy="afterInteractive" */}
			</body>
		</html>
	);
}

{
	/* <script src="js/jquery.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/jquery.fancybox.js"></script>
<script src="js/mixitup.js"></script>
<script src="js/touchspin.js"></script>
<script src="js/owl.js"></script>
<script src="js/wow.js"></script>
<script src="js/custom-script.js"></script> */
}
