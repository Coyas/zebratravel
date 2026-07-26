import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import AboutSection from "@/components/Home/About";
import WhyChoose from "@/components/Home/Wwedo";
import TeamSection from "@/components/Team/TeamSection";
import { getAllContent } from "@/app/actions/content";

const About = async () => {
	const content = await getAllContent();
	const homeContent = content?.home || {};

	return (
		<>
			{/* <Header {...HeaderProps}/> */}
			{/* <CartSidebar {...cartSidebarProps} /> */}
			{/* Passando a URL da imagem diretamente */}
			<InerBanner backgroundImage={bgImage.src} />

			{/* <!-- About Us Section--> */}
			<AboutSection content={homeContent.about} />
			{/* <!--End About Us Section--> */}

			{/* <!-- Why Section--> */}
			<WhyChoose content={homeContent.wwedo} />
			{/* <!-- End Why Section--> */}

			{/* TeamSection */}
			<TeamSection content={content?.team} />
			{/* END TeamSection */}
		</>
	);
};

export default About;
