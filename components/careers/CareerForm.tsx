"use client";

import React, { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import { jobApplicationsService, JOB_AREAS } from "@/services/jobApplicationsService";
import Turnstile, { TurnstileHandle } from "@/components/Turnstile";

const MAX_CV_SIZE_BYTES = 2 * 1024 * 1024;

type FormValues = {
	name: string;
	phone: string;
	email: string;
	area: string;
	description: string;
};

const CareerForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>();
	const [cvFile, setCvFile] = useState<File | null>(null);
	const [cvError, setCvError] = useState<string>("");
	const [submitting, setSubmitting] = useState(false);
	const [turnstileToken, setTurnstileToken] = useState("");
	const turnstileRef = useRef<TurnstileHandle>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] ?? null;
		if (!file) {
			setCvFile(null);
			return;
		}
		if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
			setCvError("O ficheiro tem de ser um PDF.");
			setCvFile(null);
			return;
		}
		if (file.size > MAX_CV_SIZE_BYTES) {
			setCvError("O ficheiro não pode ter mais de 2MB.");
			setCvFile(null);
			return;
		}
		setCvError("");
		setCvFile(file);
	};

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		if (!cvFile) {
			setCvError("Anexa o teu CV em PDF (máx. 2MB).");
			return;
		}
		setSubmitting(true);
		try {
			await jobApplicationsService.apply({ ...data, cv: cvFile, turnstileToken });
			Swal.fire("Candidatura enviada!", "Entraremos em contacto em breve.", "success");
			reset();
			setCvFile(null);
		} catch (error) {
			Swal.fire("Erro", error instanceof Error ? error.message : "Não foi possível enviar a candidatura", "error");
		} finally {
			setSubmitting(false);
			setTurnstileToken("");
			turnstileRef.current?.reset();
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="row clearfix">
			<div className="form-group col-lg-6 col-md-6 col-sm-12">
				<input
					type="text"
					placeholder="Nome Completo"
					{...register("name", { required: "O nome é obrigatório" })}
				/>
				{errors.name && <span className="text-danger">{errors.name.message}</span>}
			</div>
			<div className="form-group col-lg-6 col-md-6 col-sm-12">
				<input
					type="text"
					placeholder="Telefone"
					{...register("phone", { required: "O telefone é obrigatório" })}
				/>
				{errors.phone && <span className="text-danger">{errors.phone.message}</span>}
			</div>
			<div className="form-group col-lg-6 col-md-6 col-sm-12">
				<input
					type="email"
					placeholder="Email"
					{...register("email", { required: "O email é obrigatório" })}
				/>
				{errors.email && <span className="text-danger">{errors.email.message}</span>}
			</div>
			<div className="form-group col-lg-6 col-md-6 col-sm-12">
				<select {...register("area", { required: "Escolhe uma área" })}>
					<option value="">Área de Trabalho</option>
					{JOB_AREAS.map((area) => (
						<option key={area} value={area}>
							{area}
						</option>
					))}
				</select>
				{errors.area && <span className="text-danger">{errors.area.message}</span>}
			</div>
			<div className="form-group col-lg-12 col-md-12 col-sm-12">
				<textarea
					placeholder="Fala-nos um pouco sobre ti (carta de apresentação)"
					rows={5}
					{...register("description", { required: "A descrição é obrigatória" })}
				></textarea>
				{errors.description && <span className="text-danger">{errors.description.message}</span>}
			</div>
			<div className="form-group col-lg-12 col-md-12 col-sm-12">
				<label className="mb-1 block">Currículo (PDF, máx. 2MB)</label>
				<input type="file" accept="application/pdf" onChange={handleFileChange} />
				{cvError && <span className="text-danger">{cvError}</span>}
			</div>
			<div className="form-group col-lg-12 col-md-12 col-sm-12">
				<Turnstile ref={turnstileRef} onVerify={setTurnstileToken} />
			</div>
			<div className="form-group col-lg-12 col-md-12 col-sm-12">
				<button type="submit" className="theme-btn btn-style-one" disabled={submitting || !turnstileToken}>
					<span>{submitting ? "A enviar..." : "Enviar Candidatura"}</span>
				</button>
			</div>
		</form>
	);
};

export default CareerForm;
