
// Mock data for bookings
export interface Booking {
    id: number;
    user: string;
    tour: string;
    date: string;
    status: "Pending" | "Confirmed" | "Cancelled";
    amount: number;
}

const mockBookings: Booking[] = [
    { id: 101, user: "John Doe", tour: "Rajasthan", date: "2023-11-15", status: "Confirmed", amount: 1200 },
    { id: 102, user: "Jane Smith", tour: "Bali Trip", date: "2023-12-01", status: "Pending", amount: 850 },
    { id: 103, user: "Alice Brown", tour: "Paris City", date: "2024-01-10", status: "Cancelled", amount: 450 },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const bookingsService = {
    getAll: async (): Promise<Booking[]> => {
        await delay(500);
        return [...mockBookings];
    },

    updateStatus: async (id: number, status: string): Promise<void> => {
        await delay(500);
        console.log(`Updated booking ${id} to ${status}`);
    }
};
