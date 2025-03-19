import Galeria from "@/components/Galeria/Galeria";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import InerBanner from "@/components/InerBanner";

const Gallery = () => {
	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			{/* galeria */}
			<Galeria />

			{/* END Galeria */}
		</>
	);
};

export default Gallery;
