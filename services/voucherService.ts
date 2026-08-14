import { authedFetch } from "@/lib/clientAuth";

export type VoucherScope = "ALL" | "EXCURSION" | "ROOM" | "PRODUCT";

export interface VoucherValidation {
	valid: boolean;
	discountPercent: number;
}

export const voucherService = {
	validate: (code: string, scope: VoucherScope, itemId?: number | null): Promise<VoucherValidation> =>
		authedFetch<VoucherValidation>("/api/vouchers/validate", {
			method: "POST",
			body: JSON.stringify({ code, scope, itemId: itemId ?? null }),
		}),
};
