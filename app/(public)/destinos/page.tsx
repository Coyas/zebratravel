import bgImage from "@/public/images/background/banner-image-1.jpg";
import InerBanner from "@/components/InerBanner";
import { destinosService } from "@/services/destinosService";
import DestinosGrid from "@/components/destinos/DestinosGrid";
import DestinosHeader from "@/components/destinos/DestinosHeader";
import Testimonials from "@/components/Home/Testimonials";
import { getAllContent } from "@/app/actions/content";

const Destinos = async () => {
	const tours = await destinosService.getAll();
	const content = await getAllContent();

	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			{/* <!--Destination Tours Section--> */}
			<section className="dest-section">
				<div className="floated-icon left">
					<img src="/images/resource/stones-left.svg" alt="" title="" />
				</div>
				<div className="floated-icon right">
					<img src="/images/resource/stones-right.svg" alt="" title="" />
				</div>
				<div className="auto-container">
					<DestinosHeader content={content?.destinosPage} />
					{/* <!--MixitUp Galery--> */}
					<div className="mixitup-gallery">
						<DestinosGrid tours={tours} />
					</div>
				</div>
			</section>

			<Testimonials />
		</>
	);
};

export default Destinos;
