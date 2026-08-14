import { api } from "@/lib/api";
import { authedFetch } from "@/lib/clientAuth";

export interface Excursao {
	id?: number;
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
	groupTravelConfirmedDate?: string | null;
}

// Uma excursão pode ter vários grupos de viagem ao longo do tempo — isto é o
// que GET /api/excursions/group-travel devolve (só os grupos CONFIRMED),
// nunca a própria Excursion (ver ExcursionGroupController no backend).
interface GroupTravelDto {
	id: number;
	excursionSlug: string;
	excursionTitle: string;
	image: string;
	price: number;
	duration: string;
	location: string;
	description: string;
	confirmedDate: string | null;
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
			const groups = await api.get<GroupTravelDto[]>("/api/excursions/group-travel");
			return groups.map((g) => ({
				slug: g.excursionSlug,
				title: g.excursionTitle,
				image: g.image,
				price: g.price,
				duration: g.duration,
				location: g.location,
				rating: 0,
				reviews: 0,
				description: g.description,
				categories: [],
				groupTravelConfirmedDate: g.confirmedDate,
			}));
		} catch (error) {
			console.error("Error fetching group travel excursions:", error);
			return [];
		}
	},

	getReviews: (slug: string): Promise<ExcursaoReview[]> => api.get<ExcursaoReview[]>(`/api/excursions/${slug}/reviews`),

	createReview: (slug: string, data: { rating: number; comment: string }): Promise<ExcursaoReview> =>
		authedFetch<ExcursaoReview>(`/api/excursions/${slug}/reviews`, { method: "POST", body: JSON.stringify(data) }),
};
