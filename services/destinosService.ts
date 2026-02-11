
import { Tour, tourData } from "@/app/Dados/tourData";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const destinosService = {
    getAll: async (): Promise<Tour[]> => {
        await delay(500); // Mock network latency
        // In a real app, this would be: return axios.get('/api/destinos').then(res => res.data);
        return [...tourData];
    },

    getById: async (id: number): Promise<Tour | undefined> => {
        await delay(500);
        return tourData.find((t) => t.id === id);
    },

    create: async (data: Omit<Tour, "id">): Promise<Tour> => {
        await delay(500);
        const newId = Math.max(...tourData.map((t) => t.id)) + 1;
        const newTour = { ...data, id: newId };
        // tourData.push(newTour); // In a real app, we wouldn't mutate the mock data directly like this but for now it's fine for demo in memory
        return newTour;
    },

    update: async (id: number, data: Partial<Tour>): Promise<Tour> => {
        await delay(500);
        const index = tourData.findIndex((t) => t.id === id);
        if (index === -1) throw new Error("Tour not found");
        // tourData[index] = { ...tourData[index], ...data };
        return { ...tourData[index], ...data };
    },

    delete: async (id: number): Promise<void> => {
        await delay(500);
        // const index = tourData.findIndex((t) => t.id === id);
        // if (index !== -1) tourData.splice(index, 1);
        console.log(`Deleted tour with id ${id}`);
    },
};
