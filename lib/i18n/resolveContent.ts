import { Locale } from "./translations";

export type Localized = { pt: string; en: string; fr: string };

export function pickLocale(value: Localized | string | undefined | null, locale: Locale): string {
	if (!value) return "";
	if (typeof value === "string") return value;
	return value[locale] || value.pt || "";
}
