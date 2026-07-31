import { api } from "@/lib/api";

export interface GalleryItem {
	id: number;
	imgSrc: string;
	categories: string[];
}

export const galleryService = {
	getAll: async (): Promise<GalleryItem[]> => {
		try {
			return await api.get<GalleryItem[]>("/api/gallery");
		} catch (error) {
			console.error("Error fetching gallery:", error);
			return [];
		}
	},
};
