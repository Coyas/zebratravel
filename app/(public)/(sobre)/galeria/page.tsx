import Galeria from "@/components/Galeria/Galeria";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import InerBanner from "@/components/InerBanner";
import { getAllContent } from "@/app/actions/content";
import { galleryService } from "@/services/galleryService";

const Gallery = async () => {
	const [content, items] = await Promise.all([getAllContent(), galleryService.getAll()]);
	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			{/* galeria */}
			<Galeria content={content?.galeria} items={items} />

			{/* END Galeria */}
		</>
	);
};

export default Gallery;
