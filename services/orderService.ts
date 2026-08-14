import { authedFetch } from "@/lib/clientAuth";

export interface OrderItemInput {
	productId: number;
	name: string;
	price: number;
	quantity: number;
}

export interface Order {
	id: number;
	totalAmount: number;
	paymentMethod: "ONLINE" | "TRANSFER" | "CASH";
	status: string;
	createdAt: string;
	items: { name: string; price: number; quantity: number }[];
}

export interface Vinti4Fields {
	postUrl: string;
	fields: Record<string, string>;
}

export const orderService = {
	create: (
		items: OrderItemInput[],
		paymentMethod: "ONLINE" | "TRANSFER" | "CASH",
		voucherCode?: string,
		customerNif?: string
	): Promise<Order> =>
		authedFetch<Order>("/api/orders", {
			method: "POST",
			body: JSON.stringify({ items, paymentMethod, voucherCode: voucherCode || undefined, customerNif: customerNif || undefined }),
		}),

	getOne: (id: number): Promise<Order> => authedFetch<Order>(`/api/orders/${id}`),

	getMine: (): Promise<Order[]> => authedFetch<Order[]>("/api/orders/mine"),

	getVinti4Fields: (orderId: number): Promise<Vinti4Fields> =>
		authedFetch<Vinti4Fields>(`/api/payments/vinti4/fields/${orderId}`, { method: "POST" }),
};
