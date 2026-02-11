
// This is a singleton service to hold the state in memory.
// In a real app, this would query a database.

let maintenanceMode = 1; // 1 = maintenance

export const settingsService = {
    getMaintenanceMode: async (): Promise<number> => {
        return 1; // Always active
    },

    setMaintenanceMode: async (mode: number): Promise<void> => {
        maintenanceMode = mode;
    }
};
