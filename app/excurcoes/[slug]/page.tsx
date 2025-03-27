import bgImage from "@/public/images/background/banner-image-1.jpg";
import InerBanner from "@/components/InerBanner";
import excursoesData from "@/app/Dados/excurcoesData";
import ExcurcoesDetails from "@/components/excursoes/ExcurcoesDatails";

const ExcurcoesID = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;
	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />

			{/* <!-- News Section Two --> */}
			<ExcurcoesDetails slug={slug} />
			{/* <!-- End News Section Two --> */}
		</>
	);
};
export default ExcurcoesID;
