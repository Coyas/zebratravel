import { api } from "@/lib/api";

export interface TeamMember {
	id: number;
	name: string;
	designation: string;
	image: string;
}

export const teamMembersService = {
	getAll: async (): Promise<TeamMember[]> => {
		try {
			return await api.get<TeamMember[]>("/api/team-members");
		} catch (error) {
			console.error("Error fetching team members:", error);
			return [];
		}
	},
};
