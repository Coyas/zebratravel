// import Image from "next/image";
import Banner from "@/components/Home/Banner";
import AboutSection from "@/components/Home/About";

export default function Home() {
	return (
		<>
			{/* <!-- Banner Section --> */}
			<Banner />
			{/* <!--End Banner Section --> */}

			{/* <!--About Us Section--> */}
			<AboutSection />
			{/* <!--End About Us Section--> */}
		</>
	);
}
