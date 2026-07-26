import bgImage from "@/public/images/background/banner-image-1.jpg";
import InerBanner from "@/components/InerBanner";

import ExcursoesGrid from "@/components/excursoes/ExcursoesGrid";
import ExcursoesHeader from "@/components/excursoes/ExcursoesHeader";
import { excursoesService } from "@/services/excursoesService";
import { getAllContent } from "@/app/actions/content";

const Excurcoes = async () => {
	const excursoes = await excursoesService.getAll();
	const content = await getAllContent();
	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />

			{/* <!--Trekking Section--> */}
			<section className="trekking-section">
				<div className="floated-icon left">
					<img src="/images/resource/hills-image-2.svg" alt="" title="" />
				</div>
				<div className="floated-icon right">
					<img src="/images/resource/stones-right.svg" alt="" title="" />
				</div>
				<div className="floated-icon right-2">
					<img
						src="/images/resource/floated-icon-right-2.svg"
						alt=""
						title=""
					/>
				</div>
				<div className="auto-container">
					<ExcursoesHeader content={content?.excursoes} />
					{/* <!--MixitUp Galery--> */}
					<div className="mixitup-gallery">
						<ExcursoesGrid excursoes={excursoes} />
					</div>
				</div>
			</section>
		</>
	);
};

export default Excurcoes;
