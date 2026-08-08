import { api } from "@/lib/api";
import { authedFetch } from "@/lib/clientAuth";

export interface Testimonial {
	id: number;
	image: string | null;
	text: string;
	name: string;
	designation: string | null;
	rating: number;
	backgroundImage: string | null;
	link: string | null;
	sourceReviewType: "EXCURSION" | "HOTEL_ROOM" | null;
	sourceReviewId: number | null;
}

export const testimonialsService = {
	getAll: async (): Promise<Testimonial[]> => {
		try {
			return await api.get<Testimonial[]>("/api/testimonials");
		} catch (error) {
			console.error("Error fetching testimonials:", error);
			return [];
		}
	},

	createFromReview: (
		sourceType: "EXCURSION" | "HOTEL_ROOM",
		sourceReviewId: number,
		designation?: string
	): Promise<Testimonial> =>
		authedFetch<Testimonial>("/api/testimonials/from-review", {
			method: "POST",
			body: JSON.stringify({ sourceType, sourceReviewId, designation }),
		}),
};
