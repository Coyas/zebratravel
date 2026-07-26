import { authedFetch } from "@/lib/clientAuth";

export interface Booking {
	id: number;
	user: string;
	item: string;
	date: string;
	status: string;
	amount: number;
}

export interface Favorite {
	id: number;
	title: string;
	price: number;
	imageUrl: string;
	link: string;
	category: string | null;
}

export const profileService = {
	getMyBookings: (): Promise<Booking[]> => authedFetch<Booking[]>("/api/bookings"),

	createBooking: (params: { excursionSlug?: string; tourId?: number; date: string; guests: number }): Promise<Booking> =>
		authedFetch<Booking>("/api/bookings", {
			method: "POST",
			body: JSON.stringify(params),
		}),

	getMyFavorites: (): Promise<Favorite[]> => authedFetch<Favorite[]>("/api/favorites"),

	removeFavorite: (productId: number): Promise<void> => authedFetch<void>(`/api/favorites/${productId}`, { method: "DELETE" }),
};
