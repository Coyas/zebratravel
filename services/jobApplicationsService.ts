const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const JOB_AREAS = [
	"Contabilidade",
	"Agente de Viagem",
	"Restaurante",
	"Bar",
	"Atendente de Mesas",
	"Limpeza",
	"Condutor",
	"Informático",
	"Marketing Digital",
	"Guia Turístico",
];

export interface JobApplicationInput {
	name: string;
	phone: string;
	email: string;
	area: string;
	description: string;
	cv: File;
}

export const jobApplicationsService = {
	apply: async (input: JobApplicationInput): Promise<void> => {
		const form = new FormData();
		form.append("name", input.name);
		form.append("phone", input.phone);
		form.append("email", input.email);
		form.append("area", input.area);
		form.append("description", input.description);
		form.append("cv", input.cv);

		const res = await fetch(`${API_URL}/api/job-applications`, {
			method: "POST",
			body: form,
		});
		if (!res.ok) {
			let message = "Não foi possível submeter a candidatura";
			try {
				const body = await res.json();
				message = body.message || message;
			} catch {
				// ignore body parse errors
			}
			throw new Error(message);
		}
	},
};
