
import { Excursao, excursoesData } from "@/app/Dados/excurcoesData";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const excursoesService = {
	getAll: async (): Promise<Excursao[]> => {
		await delay(500);
		return [...excursoesData];
	},

	getBySlug: async (slug: string): Promise<Excursao | undefined> => {
		await delay(500);
		return excursoesData.find((e) => e.slug === slug);
	},

    // Mock create, update, delete as needed
    delete: async (slug: string): Promise<void> => {
        await delay(500);
        console.log(`Deleted excursion with slug ${slug}`);
    }
};
