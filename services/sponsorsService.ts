import { api } from "@/lib/api";

export interface Sponsor {
	id: number;
	image: string;
	link: string;
}

export const sponsorsService = {
	getAll: async (): Promise<Sponsor[]> => {
		try {
			return await api.get<Sponsor[]>("/api/sponsors");
		} catch (error) {
			console.error("Error fetching sponsors:", error);
			return [];
		}
	},
};
