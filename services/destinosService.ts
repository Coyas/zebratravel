import { api } from "@/lib/api";

export interface Tour {
	id: number;
	title: string;
	image: string;
	images: string[];
	price: number;
	category: string[];
	tours: number;
	description: string;
}

export const destinosService = {
	getAll: async (): Promise<Tour[]> => {
		try {
			return await api.get<Tour[]>("/api/tours");
		} catch (error) {
			console.error("Error fetching tours:", error);
			return [];
		}
	},

	getById: async (id: number): Promise<Tour | undefined> => {
		try {
			return await api.get<Tour>(`/api/tours/${id}`);
		} catch (error) {
			console.error("Error fetching tour:", error);
			return undefined;
		}
	},
};
