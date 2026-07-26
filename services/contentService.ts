import { api } from "@/lib/api";

// Site content is managed by admins in ZebraDash; this app only reads it.
export const contentService = {
    getAllContent: async (): Promise<any> => {
        try {
            return await api.get<any>("/api/content");
        } catch (error) {
            console.error("Error fetching site content:", error);
            return {};
        }
    },
};
