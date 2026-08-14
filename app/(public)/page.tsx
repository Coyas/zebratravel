// import Image from "next/image";

import Banner from "@/components/Home/Banner";
import CampaignBanner from "@/components/CampaignBanner";
import AboutSection from "@/components/Home/About";
import PopularTrekking from "@/components/Home/Tourspop";
import WhyChoose from "@/components/Home/Wwedo";
import Topdestinos from "@/components/Home/Topdestinos";
import ProductSection from "@/components/Home/Products";
import GroupTravel from "@/components/Home/GroupTravel";
import Testimonials from "@/components/Home/Testimonials";
import Sponsors from "@/components/Home/Sponsors";
import NewsSection from "@/components/Home/NewsSection";
import SubscribeSection from "@/components/Home/SubscribeSection";
import { getAllContent } from "../actions/content";
import { productsService } from "@/services/productsService";
import { destinosService } from "@/services/destinosService";
import { excursoesService } from "@/services/excursoesService";
import { postsService } from "@/services/postsService";
import { sponsorsService } from "@/services/sponsorsService";
import { testimonialsService } from "@/services/testimonialsService";
import { campaignService } from "@/services/campaignService";

export default async function Home() {
	const content = await getAllContent();
	const homeContent = content?.home || {};
	const produtos = await productsService.getAll();
	const tours = await destinosService.getAll();
	const excursoes = await excursoesService.getAll();
	const groupTravelExcursoes = await excursoesService.getGroupTravel();
	const sponsors = await sponsorsService.getAll();
	const testimonials = await testimonialsService.getAll();
	const heroCampaigns = await campaignService.getActive("HOME_HERO");
	const stripCampaigns = await campaignService.getActive("HOME_STRIP");
	const popularExcursoes = [...excursoes]
		.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
		.slice(0, 6);
	const posts = await postsService.getAll();
	const latestPosts = [...posts]
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 3);

	return (
		<>
			{/* <!-- Banner Section --> */}
			<Banner content={homeContent.banner} />
			{/* <!-- End Banner Section --> */}

			<CampaignBanner campaigns={heroCampaigns} />

			{/* <!-- About Us Section--> */}
			<AboutSection content={homeContent.about} />
			{/* <!--End About Us Section--> */}

			{/* <!-- Popular Section--> */}
			<PopularTrekking content={homeContent.tourspop} excursoes={popularExcursoes} />
			{/* <!-- End Popular Section--> */}

			{/* <!-- Why Section--> */}
			<WhyChoose content={homeContent.wwedo} />
			{/* <!-- End Why Section--> */}

			{/* <!-- Trending Destinations Section--> */}
			<Topdestinos content={homeContent.topdestinos} tours={tours} />
			{/* <!-- End Trending Destinations Section--> */}

			{/*<!-- Products Section--> */}
			<ProductSection produtos={produtos} content={homeContent.products} />
			{/*<!-- End Products Section--> */}

			<CampaignBanner campaigns={stripCampaigns} />

			{/* <!--Group Travel Section--> */}
			<GroupTravel content={homeContent.groupTravel} excursoes={groupTravelExcursoes} />
			{/* <!--Group Travel Section--> */}

			{/* <!-- Testimonials Section--> */}
			<Testimonials content={homeContent.testimonials} items={testimonials} />
			{/* <!-- End Testimonials Section--> */}

			{/* <!--Sponsors Section--> */}
			<Sponsors sponsors={sponsors} />
			{/* <!-- End Sponsors Section--> */}

			{/* <!--News Section--> */}
			<NewsSection content={homeContent.newsSection} posts={latestPosts} />
			{/* <!-- End News Section--> */}

			{/* <!--Subscribe Section--> */}
			<SubscribeSection content={homeContent.subscribe} />
			{/* <!-- End Subscribe Section--> */}
		</>
	);
}
