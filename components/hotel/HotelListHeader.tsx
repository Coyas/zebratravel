"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

interface HotelListHeaderProps {
	content?: { title: Localized; text: Localized; empty: Localized };
	hasHotels: boolean;
}

const HotelListHeader = ({ content, hasHotels }: HotelListHeaderProps) => {
	const { locale } = useLanguage();
	const data = content
		? { title: pickLocale(content.title, locale), text: pickLocale(content.text, locale), empty: pickLocale(content.empty, locale) }
		: {
				title: "Os Nossos Hotéis",
				text: "Escolha o hotel ideal para a sua estadia em Cabo Verde e reserve o seu quarto online.",
				empty: "Ainda não há hotéis disponíveis.",
			};

	return (
		<>
			<div className="title-box centered">
				<h2>
					<span>{data.title}</span>
				</h2>
				<div className="text">{data.text}</div>
			</div>
			{!hasHotels && <p style={{ textAlign: "center" }}>{data.empty}</p>}
		</>
	);
};

export default HotelListHeader;
