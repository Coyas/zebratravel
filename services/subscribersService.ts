import { api } from "@/lib/api";

export const subscribersService = {
	subscribe: (email: string): Promise<void> => api.post<void>("/api/subscribers", { email }),
};
