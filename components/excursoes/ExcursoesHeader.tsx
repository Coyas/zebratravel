"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

interface ExcursoesHeaderProps {
	content?: { title: Localized; text: Localized };
}

const ExcursoesHeader = ({ content }: ExcursoesHeaderProps) => {
	const { locale } = useLanguage();
	const data = content
		? { title: pickLocale(content.title, locale), text: pickLocale(content.text, locale) }
		: {
				title: "Melhores trilhas para você com a ZebraTravel",
				text: "Descubra as trilhas mais incríveis com a ZebraTravel! Conecte-se com a natureza, explore paisagens deslumbrantes e viva aventuras inesquecíveis, seja em uma caminhada de um dia ou em uma expedição prolongada.",
			};

	return (
		<div className="title-box centered">
			<h2>
				<span>{data.title}</span>
			</h2>
			<div className="text">{data.text}</div>
		</div>
	);
};

export default ExcursoesHeader;
