"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { amenityIcon } from "@/lib/amenities";

export default function AmenityList({ amenities, compact, showTitle }: { amenities: string[]; compact?: boolean; showTitle?: boolean }) {
	const { t } = useLanguage();

	if (!amenities || amenities.length === 0) return null;

	return (
		<>
		{showTitle && <h4 style={{ marginBottom: 12 }}>{t("hotel.amenitiesTitle")}</h4>}
		<ul
			style={{
				listStyle: "none",
				padding: 0,
				margin: 0,
				display: "flex",
				flexWrap: "wrap",
				gap: compact ? 10 : 14,
			}}
		>
			{amenities.map((code) => (
				<li key={code} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: compact ? 12 : 14, color: "#555" }}>
					<i className={`far ${amenityIcon(code)}`}></i>
					<span>{t(`amenity.${code}`)}</span>
				</li>
			))}
		</ul>
		</>
	);
}
