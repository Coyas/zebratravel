
// This is a singleton service to hold the state in memory.
// In a real app, this would query a database.

let maintenanceMode = 0; // 0 = online, 1 = maintenance

export const settingsService = {
    getMaintenanceMode: async (): Promise<number> => {
        return maintenanceMode;
    },

    setMaintenanceMode: async (mode: number): Promise<void> => {
        maintenanceMode = mode;
    }
};
