import { api } from "@/lib/api";
import { authedFetch } from "@/lib/clientAuth";

export interface Hotel {
	id: number;
	name: string;
	address: string | null;
	city: string | null;
	description: string | null;
	image: string | null;
}

export interface RoomType {
	id: number;
	hotelId: number;
	name: string;
	description: string | null;
	basePrice: number;
	capacity: number;
	image: string | null;
}

export interface AvailableRoom {
	roomId: number;
	roomNumber: string;
	roomTypeId: number;
	roomTypeName: string;
	roomTypeImage: string | null;
	basePrice: number;
	capacity: number;
}

export interface HotelRoomPublic {
	id: number;
	roomNumber: string;
	floor: string | null;
	status: string;
	amenities: string[];
	images: string[];
	roomTypeId: number;
	roomTypeName: string;
	roomTypeDescription: string | null;
	roomTypeImage: string | null;
	basePrice: number;
	capacity: number;
	hotelId: number;
	hotelName: string;
	hotelImage: string | null;
}

export interface RoomReview {
	id: number;
	roomId: number;
	userName: string;
	rating: number;
	comment: string | null;
	createdAt: string;
}

export interface HotelReservation {
	id: number;
	hotelId: number;
	hotelName: string;
	roomId: number | null;
	roomNumber: string | null;
	roomTypeName: string | null;
	guestName: string;
	checkIn: string;
	checkOut: string;
	guests: number;
	totalAmount: number;
	paymentMethod: string;
	status: string;
}

export interface Vinti4Fields {
	postUrl: string;
	fields: Record<string, string>;
}

export const hotelService = {
	getHotels: async (): Promise<Hotel[]> => {
		try {
			return await api.get<Hotel[]>("/api/hotels");
		} catch (error) {
			console.error("Error fetching hotels:", error);
			return [];
		}
	},

	getHotel: (id: number): Promise<Hotel> => api.get<Hotel>(`/api/hotels/${id}`),

	getRoomTypes: async (hotelId: number): Promise<RoomType[]> => {
		try {
			return await api.get<RoomType[]>(`/api/hotels/${hotelId}/room-types`);
		} catch (error) {
			console.error("Error fetching room types:", error);
			return [];
		}
	},

	getRoomType: (id: number): Promise<RoomType> => api.get<RoomType>(`/api/room-types/${id}`),

	getHotelRooms: async (hotelId: number): Promise<HotelRoomPublic[]> => {
		try {
			return await api.get<HotelRoomPublic[]>(`/api/hotels/${hotelId}/rooms`);
		} catch (error) {
			console.error("Error fetching hotel rooms:", error);
			return [];
		}
	},

	getRoom: (id: number): Promise<HotelRoomPublic> => api.get<HotelRoomPublic>(`/api/rooms/${id}`),

	getAvailability: (hotelId: number, checkIn: string, checkOut: string): Promise<AvailableRoom[]> =>
		api.get<AvailableRoom[]>(`/api/hotels/${hotelId}/availability?checkIn=${checkIn}&checkOut=${checkOut}`),

	getReviews: (roomId: number): Promise<RoomReview[]> => api.get<RoomReview[]>(`/api/rooms/${roomId}/reviews`),

	createReview: (roomId: number, data: { rating: number; comment: string }): Promise<RoomReview> =>
		authedFetch<RoomReview>(`/api/rooms/${roomId}/reviews`, { method: "POST", body: JSON.stringify(data) }),

	createReservation: (data: {
		roomId: number;
		checkIn: string;
		checkOut: string;
		guests: number;
		paymentMethod: "ONLINE" | "TRANSFER" | "CASH";
	}): Promise<HotelReservation> =>
		authedFetch<HotelReservation>("/api/hotel/reservations", {
			method: "POST",
			body: JSON.stringify(data),
		}),

	getMyReservations: (): Promise<HotelReservation[]> => authedFetch<HotelReservation[]>("/api/hotel/reservations/mine"),

	getVinti4Fields: (reservationId: number): Promise<Vinti4Fields> =>
		authedFetch<Vinti4Fields>(`/api/payments/vinti4/hotel-fields/${reservationId}`, { method: "POST" }),
};
