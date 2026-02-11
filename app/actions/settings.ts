
"use server";

import { settingsService } from "@/services/settingsService";
import { revalidatePath } from "next/cache";

export async function getMaintenanceMode() {
    return await settingsService.getMaintenanceMode();
}

export async function toggleMaintenanceMode(currentState: number) {
    const newState = currentState === 1 ? 0 : 1;
    await settingsService.setMaintenanceMode(newState);
    revalidatePath("/"); // Revalidate public layout
    return newState;
}
