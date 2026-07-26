import { termsData } from "@/app/Dados/termos";
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import { getAllContent } from "@/app/actions/content";
import TermsList from "@/components/Terms/TermsList";

const fallbackTerms = termsData.map((term) => ({
	title: { pt: term.title, en: term.title, fr: term.title },
	text: { pt: term.text, en: term.text, fr: term.text },
}));

const TermsSection = async () => {
	const content = await getAllContent();
	const terms = content?.terms || fallbackTerms;

	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<section className="terms-section">
				<div className="auto-container">
					<div className="content-box">
						<TermsList terms={terms} />
					</div>
				</div>
			</section>
		</>
	);
};

export default TermsSection;
