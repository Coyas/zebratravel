
import { Produto, productsData } from "@/app/Dados/productsData";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const productsService = {
	getAll: async (): Promise<Produto[]> => {
		await delay(500);
		return [...productsData];
	},

    // Using title as simulate ID since interface doesn't have one
    delete: async (titulo: string) => {
        await delay(500);
        console.log(`Deleted product with title ${titulo}`);
    }
};
