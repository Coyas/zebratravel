import { api } from "@/lib/api";

// Maintenance mode is managed by admins in ZebraDash; this app only reads it.
export const settingsService = {
    getMaintenanceMode: async (): Promise<number> => {
        try {
            const data = await api.get<{ mode: number }>("/api/settings/maintenance");
            return data.mode;
        } catch (error) {
            console.error("Error fetching maintenance mode:", error);
            return 0;
        }
    },
};
