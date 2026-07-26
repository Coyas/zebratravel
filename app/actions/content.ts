"use server";

import { contentService } from "@/services/contentService";

export async function getAllContent() {
    return await contentService.getAllContent();
}
