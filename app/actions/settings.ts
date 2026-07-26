
"use server";

import { settingsService } from "@/services/settingsService";

export async function getMaintenanceMode() {
    return await settingsService.getMaintenanceMode();
}
