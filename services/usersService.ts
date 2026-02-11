
// Mock data for users
export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
}

const mockUsers: User[] = [
    { id: 1, name: "Admin User", email: "admin@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "John Doe", email: "john@example.com", role: "User", status: "Active" },
    { id: 3, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const usersService = {
    getAll: async (): Promise<User[]> => {
        await delay(500);
        return [...mockUsers];
    },

    delete: async (id: number): Promise<void> => {
        await delay(500);
        console.log(`Deleted user with id ${id}`);
    }
};
