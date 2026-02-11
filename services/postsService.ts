
import { posts } from "@/app/Dados/postsData";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const postsService = {
	getAll: async () => {
		await delay(500);
		return [...posts];
	},

    delete: async (id: number) => {
        await delay(500);
        console.log(`Deleted post with id ${id}`);
    }
};
