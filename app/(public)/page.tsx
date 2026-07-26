// import Image from "next/image";

import Banner from "@/components/Home/Banner";
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

export default async function Home() {
	const content = await getAllContent();
	const homeContent = content?.home || {};
	const produtos = await productsService.getAll();
	const tours = await destinosService.getAll();

	return (
		<>
			{/* <!-- Banner Section --> */}
			<Banner content={homeContent.banner} />
			{/* <!-- End Banner Section --> */}

			{/* <!-- About Us Section--> */}
			<AboutSection content={homeContent.about} />
			{/* <!--End About Us Section--> */}

			{/* <!-- Popular Section--> */}
			<PopularTrekking content={homeContent.tourspop} />
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

			{/* <!--Group Travel Section--> */}
			<GroupTravel content={homeContent.groupTravel} />
			{/* <!--Group Travel Section--> */}

			{/* <!-- Testimonials Section--> */}
			<Testimonials content={homeContent.testimonials} />
			{/* <!-- End Testimonials Section--> */}

			{/* <!--Sponsors Section--> */}
			<Sponsors />
			{/* <!-- End Sponsors Section--> */}

			{/* <!--News Section--> */}
			<NewsSection content={homeContent.newsSection} />
			{/* <!-- End News Section--> */}

			{/* <!--Subscribe Section--> */}
			<SubscribeSection content={homeContent.subscribe} />
			{/* <!-- End Subscribe Section--> */}
		</>
	);
}
