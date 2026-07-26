"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

interface DestinosHeaderProps {
	content?: { title: Localized; text: Localized };
}

const DestinosHeader = ({ content }: DestinosHeaderProps) => {
	const { locale } = useLanguage();
	const data = content
		? { title: pickLocale(content.title, locale), text: pickLocale(content.text, locale) }
		: {
				title: "Destinos Populares",
				text: "Explore uma seleção dos melhores destinos ao redor do mundo. De praias paradisíacas a montanhas deslumbrantes, temos opções para todos os estilos de viagem. Prepare-se para criar memórias inesquecíveis em sua próxima aventura!",
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

export default DestinosHeader;
