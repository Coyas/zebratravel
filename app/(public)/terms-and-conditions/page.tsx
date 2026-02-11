import { termsData } from "@/app/Dados/termos";
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import { getAllContent } from "@/app/actions/content";

interface Term {
	title: string;
	text: string;
}

interface TermBlockProps {
	title: string;
	text: string;
}

const TermBlock: React.FC<TermBlockProps> = ({ title, text }) => {
	return (
		<div className="term-block">
			<div className="inner">
				<div className="title">
					<h5>{title}</h5>
				</div>
				<div className="text">{text}</div>
			</div>
		</div>
	);
};

const TermsSection = async () => {
	const content = await getAllContent();
	const terms = content?.terms || termsData;

	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<section className="terms-section">
				<div className="auto-container">
					<div className="content-box">
						<div className="row clearfix">
							<div className="text-col col-lg-6 col-md-12 col-sm-12">
								{terms.slice(0, 4).map((term: Term, index: number) => (
									<TermBlock key={index} title={term.title} text={term.text} />
								))}
							</div>

							<div className="text-col col-lg-6 col-md-12 col-sm-12">
								{terms.slice(4).map((term: Term, index: number) => (
									<TermBlock key={index} title={term.title} text={term.text} />
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default TermsSection;
