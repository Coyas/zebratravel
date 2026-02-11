"use server";

import { contentService } from "@/services/contentService";
import { revalidatePath } from "next/cache";

export async function getAllContent() {
    return await contentService.getAllContent();
}

export async function updateAllContent(content: any) {
    const result = await contentService.updateContent(content);
    if (result.success) {
        revalidatePath("/");
        revalidatePath("/about");
        // Revalidate other paths as needed
    }
    return result;
}
