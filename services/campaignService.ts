import { api } from "@/lib/api";

export interface PublicCampaign {
	id: number;
	imageUrl: string;
	altText: string | null;
	title: string;
	subtitle: string | null;
	linkUrl: string;
	ribbon: string | null;
}

export const campaignService = {
	getActive: async (placement: string): Promise<PublicCampaign[]> => {
		try {
			return await api.get<PublicCampaign[]>(`/api/campaigns/active?placement=${placement}`);
		} catch (error) {
			console.error("Error fetching campaigns:", error);
			return [];
		}
	},

	registerClick: (id: number): Promise<void> => api.post<void>(`/api/campaigns/${id}/click`, {}),
};
