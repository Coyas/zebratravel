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
	groupTravelStatus?: "NONE" | "OPEN" | "CONFIRMED";
	groupTravelConfirmedDate?: string | null;
}

export interface ExcursaoReview {
	id: number;
	excursionSlug: string;
	userId: number;
	userName: string;
	rating: number;
	comment: string | null;
	createdAt: string;
	isTestimonial: boolean;
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

	getGroupTravel: async (): Promise<Excursao[]> => {
		try {
			return await api.get<Excursao[]>("/api/excursions/group-travel");
		} catch (error) {
			console.error("Error fetching group travel excursions:", error);
			return [];
		}
	},

	getReviews: (slug: string): Promise<ExcursaoReview[]> => api.get<ExcursaoReview[]>(`/api/excursions/${slug}/reviews`),

	createReview: (slug: string, data: { rating: number; comment: string }): Promise<ExcursaoReview> =>
		authedFetch<ExcursaoReview>(`/api/excursions/${slug}/reviews`, { method: "POST", body: JSON.stringify(data) }),
};
