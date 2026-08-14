import { authedFetch } from "@/lib/clientAuth";

export interface Booking {
	id: number;
	user: string;
	item: string;
	date: string;
	status: string;
	amount: number;
}

export type FavoriteItemType = "ROOM" | "PRODUCT" | "EXCURSION" | "TOUR";

export interface Favorite {
	itemType: FavoriteItemType;
	itemId: number;
	title: string;
	subtitle: string | null;
	image: string;
	price: number;
	link: string;
}

export interface Vinti4Fields {
	postUrl: string;
	fields: Record<string, string>;
}

export const profileService = {
	getMyBookings: (): Promise<Booking[]> => authedFetch<Booking[]>("/api/bookings"),

	createBooking: (params: { excursionSlug?: string; tourId?: number; date: string; guests: number; paymentMethod?: string; voucherCode?: string; customerNif?: string }): Promise<Booking> =>
		authedFetch<Booking>("/api/bookings", {
			method: "POST",
			body: JSON.stringify(params),
		}),

	getVinti4Fields: (bookingId: number): Promise<Vinti4Fields> =>
		authedFetch<Vinti4Fields>(`/api/payments/vinti4/booking-fields/${bookingId}`, { method: "POST" }),

	getMyFavorites: (): Promise<Favorite[]> => authedFetch<Favorite[]>("/api/favorites"),

	addFavorite: (itemType: FavoriteItemType, itemId: number): Promise<void> =>
		authedFetch<void>("/api/favorites", { method: "POST", body: JSON.stringify({ itemType, itemId }) }),

	removeFavorite: (itemType: FavoriteItemType, itemId: number): Promise<void> =>
		authedFetch<void>(`/api/favorites/${itemType}/${itemId}`, { method: "DELETE" }),
};
