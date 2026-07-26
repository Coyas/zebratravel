import { api } from "@/lib/api";

export interface Tour {
	id: number;
	title: string;
	image: string;
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
};
