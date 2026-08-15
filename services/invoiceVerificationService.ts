import { api } from "@/lib/api";

export interface InvoiceVerification {
	valid: boolean;
	documentNumber: string | null;
	sourceType: string | null;
	customerName: string | null;
	customerNif: string | null;
	totalAmount: string | null;
	currency: string | null;
	issuedAt: string | null;
}

export const invoiceVerificationService = {
	verify: (documentNumber: string, signature: string): Promise<InvoiceVerification> =>
		api.get<InvoiceVerification>(
			`/api/invoices/verify?doc=${encodeURIComponent(documentNumber)}&sig=${encodeURIComponent(signature)}`
		),
};
