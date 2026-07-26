import { api } from "@/lib/api";
import { authedFetch } from "@/lib/clientAuth";

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

export interface ExcursaoReview {
	id: number;
	excursionSlug: string;
	userName: string;
	rating: number;
	comment: string | null;
	createdAt: string;
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

	getReviews: (slug: string): Promise<ExcursaoReview[]> => api.get<ExcursaoReview[]>(`/api/excursions/${slug}/reviews`),

	createReview: (slug: string, data: { rating: number; comment: string }): Promise<ExcursaoReview> =>
		authedFetch<ExcursaoReview>(`/api/excursions/${slug}/reviews`, { method: "POST", body: JSON.stringify(data) }),
};
