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

export default function Home() {
	return (
		<>
			{/* <!-- Banner Section --> */}
			<Banner />
			{/* <!-- End Banner Section --> */}

			{/* <!-- About Us Section--> */}
			<AboutSection />
			{/* <!--End About Us Section--> */}

			{/* <!-- Popular Section--> */}
			<PopularTrekking />
			{/* <!-- End Popular Section--> */}

			{/* <!-- Why Section--> */}
			<WhyChoose />
			{/* <!-- End Why Section--> */}

			{/* <!-- Trending Destinations Section--> */}
			<Topdestinos />
			{/* <!-- End Trending Destinations Section--> */}

			{/*<!-- Products Section--> */}
			<ProductSection />
			{/*<!-- End Products Section--> */}

			{/* <!--Group Travel Section--> */}
			<GroupTravel />
			{/* <!--Group Travel Section--> */}

			{/* <!-- Testimonials Section--> */}
			<Testimonials />
			{/* <!-- End Testimonials Section--> */}

			{/* <!--Sponsors Section--> */}
			<Sponsors />
			{/* <!-- End Sponsors Section--> */}

			{/* <!--News Section--> */}
			<NewsSection />
			{/* <!-- End News Section--> */}

			{/* <!--Subscribe Section--> */}
			<SubscribeSection />
			{/* <!-- End Subscribe Section--> */}
		</>
	);
}
