// Catálogo fixo de comodidades — o mesmo código existe em zebradash/lib/amenities.ts
// (mantidos em sincronia manualmente). O texto de cada comodidade vive em
// lib/i18n/translations.ts sob a chave "amenity.<code>", para traduzir com o resto do site.
export interface AmenityDef {
	code: string;
	icon: string;
}

export const AMENITIES: AmenityDef[] = [
	{ code: "AC", icon: "fa-snowflake" },
	{ code: "WIFI", icon: "fa-wifi" },
	{ code: "TV", icon: "fa-tv" },
	{ code: "SAFE", icon: "fa-lock" },
	{ code: "KITCHEN", icon: "fa-utensils" },
	{ code: "FIREPLACE", icon: "fa-fire" },
	{ code: "BATHROOM_ESSENTIALS", icon: "fa-bath" },
	{ code: "BBQ", icon: "fa-fire-burner" },
	{ code: "PARKING", icon: "fa-parking" },
	{ code: "BREAKFAST", icon: "fa-mug-hot" },
	{ code: "PET_FRIENDLY", icon: "fa-paw" },
	{ code: "WORKSPACE", icon: "fa-briefcase" },
];

export function amenityIcon(code: string): string {
	return AMENITIES.find((a) => a.code === code)?.icon ?? "fa-check";
}
