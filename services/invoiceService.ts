import { authedFetch, getToken } from "@/lib/clientAuth";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export interface Invoice {
	id: number;
	documentNumber: string;
	sourceType: "ORDER" | "EXCURSION_BOOKING" | "HOTEL_RESERVATION";
	sourceId: number;
	totalAmount: number;
	currency: string;
	createdAt: string;
}

export const invoiceService = {
	getMine: (): Promise<Invoice[]> => authedFetch<Invoice[]>("/api/invoices/mine"),

	openPdf: async (id: number) => {
		const token = getToken();
		const res = await fetch(`${API_URL}/api/invoices/${id}/pdf`, {
			headers: token ? { Authorization: `Bearer ${token}` } : undefined,
		});
		if (!res.ok) throw new Error("Não foi possível abrir a fatura");
		const blob = await res.blob();
		const url = URL.createObjectURL(blob);
		window.open(url, "_blank");
	},
};
