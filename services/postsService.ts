import { api } from "@/lib/api";

export interface Post {
	id: number;
	title: string;
	author: string;
	date: string;
	image: string;
	content: string;
	category: string;
	description: string;
	slug: string;
}

export const postsService = {
	getAll: async (): Promise<Post[]> => {
		try {
			return await api.get<Post[]>("/api/posts");
		} catch (error) {
			console.error("Error fetching posts:", error);
			return [];
		}
	},

	getBySlug: async (slug: string): Promise<Post | undefined> => {
		try {
			return await api.get<Post>(`/api/posts/${slug}`);
		} catch (error) {
			console.error("Error fetching post:", error);
			return undefined;
		}
	},
};
