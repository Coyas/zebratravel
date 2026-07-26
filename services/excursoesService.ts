import { api } from "@/lib/api";

export interface Excursao {
	slug: string;
	title: string;
	image: string;
	price: number;
	duration: string;
	location: string;
	rating: number;
	reviews: number;
	description: string;
	categories: string[];
}

export const excursoesService = {
	getAll: async (): Promise<Excursao[]> => {
		try {
			return await api.get<Excursao[]>("/api/excursions");
		} catch (error) {
			console.error("Error fetching excursions:", error);
			return [];
		}
	},

	getBySlug: async (slug: string): Promise<Excursao | undefined> => {
		try {
			return await api.get<Excursao>(`/api/excursions/${slug}`);
		} catch (error) {
			console.error("Error fetching excursion:", error);
			return undefined;
		}
	},
};
