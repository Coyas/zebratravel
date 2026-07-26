import FAQTwo from "@/components/Faq/Faqtwo";
import FAQOne from "@/components/Faq/FaqOne";
import { getAllContent } from "@/app/actions/content";

const FAQ = async () => {
	const content = await getAllContent();
	const faqData = content?.faq;
	const faqHeader = content?.faqHeader;

	return (
		<>
			<FAQTwo content={faqData} header={faqHeader} />
			<FAQOne />
		</>
	);
};

export default FAQ;
