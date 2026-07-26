"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Locale, dictionaries, locales } from "./translations";

interface LanguageContextValue {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "zebratravel_locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>("pt");

	useEffect(() => {
		const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
		if (stored && locales.includes(stored)) {
			setLocaleState(stored);
		}
	}, []);

	const setLocale = (next: Locale) => {
		setLocaleState(next);
		localStorage.setItem(STORAGE_KEY, next);
	};

	const t = (key: string): string => {
		return dictionaries[locale][key] ?? dictionaries.pt[key] ?? key;
	};

	return (
		<LanguageContext.Provider value={{ locale, setLocale, t }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage(): LanguageContextValue {
	const ctx = useContext(LanguageContext);
	if (!ctx) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return ctx;
}
