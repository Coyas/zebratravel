import Galeria from "@/components/Galeria/Galeria";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import InerBanner from "@/components/InerBanner";
import { getAllContent } from "@/app/actions/content";

const Gallery = async () => {
	const content = await getAllContent();
	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			{/* galeria */}
			<Galeria content={content?.galeria} />

			{/* END Galeria */}
		</>
	);
};

export default Gallery;
