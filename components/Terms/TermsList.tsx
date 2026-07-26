"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

interface Term {
	title: Localized;
	text: Localized;
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

export default function TermsList({ terms }: { terms: Term[] }) {
	const { locale } = useLanguage();
	const resolved = terms.map((term) => ({ title: pickLocale(term.title, locale), text: pickLocale(term.text, locale) }));

	return (
		<div className="row clearfix">
			<div className="text-col col-lg-6 col-md-12 col-sm-12">
				{resolved.slice(0, 4).map((term, index) => (
					<TermBlock key={index} title={term.title} text={term.text} />
				))}
			</div>

			<div className="text-col col-lg-6 col-md-12 col-sm-12">
				{resolved.slice(4).map((term, index) => (
					<TermBlock key={index} title={term.title} text={term.text} />
				))}
			</div>
		</div>
	);
}
