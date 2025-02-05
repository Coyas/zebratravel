// import Image from "next/image";
import Banner from "@/components/Home/Banner";
import AboutSection from "@/components/Home/About";
import PopularTrekking from "@/components/Home/Tourspop";
import WhyChoose from "@/components/Home/Wwedo";
import Topdestinos from "@/components/Home/Topdestinos";
import ProductSection from "@/components/Home/Products";

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
		</>
	);
}
