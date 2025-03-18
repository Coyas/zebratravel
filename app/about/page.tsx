"use client";

import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import AboutSection from "@/components/Home/About";
import WhyChoose from "@/components/Home/Wwedo";
import Galeria from "@/components/Galeria/Galeria";

const About = () => {
	return (
		<>
			{/* <Header {...HeaderProps}/> */}
			{/* <CartSidebar {...cartSidebarProps} /> */}
			{/* Passando a URL da imagem diretamente */}
			<InerBanner backgroundImage={bgImage.src} />

			{/* <!-- About Us Section--> */}
			<AboutSection />
			{/* <!--End About Us Section--> */}

			{/* <!-- Why Section--> */}
			<WhyChoose />
			{/* <!-- End Why Section--> */}

			{/* galeria */}
			{/* <Galeria /> */}
			{/* END Galeria */}
		</>
	);
};

export default About;
