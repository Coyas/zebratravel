"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
};

const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data);
		// Handle form submission logic here (e.g., send to an API)
	};

	return (
		<section className="contact-section">
			<div className="floated-icon right">
				<img src="/images/resource/stones-right-3.svg" alt="stones-right-3" />
			</div>
			<div className="floated-icon right-2">
				<img src="/images/resource/stones-right-2.svg" alt="stones-right-2" />
			</div>
			<div className="auto-container">
				<div className="info-section">
					<div className="row clearfix">
						<div className="info-block col-lg-4 col-md-6 col-sm-12">
							<div className="inner-box">
								<div className="map-icon">
									<img src="/images/resource/europe-map.svg" alt="Europe Map" />
								</div>
								<h5>Santiago</h5>
								<div className="address text">
									Avenida Amílcar Cabral
									<br />
									Plateau - Praia
								</div>
								<div className="phone">
									<a href="tel:+2382625610">+238 262 56 10</a>
								</div>
							</div>
						</div>

						<div className="info-block col-lg-4 col-md-6 col-sm-12">
							<div className="inner-box">
								<div className="map-icon">
									<img src="/images/resource/asia-map.svg" alt="Asia Map" />
								</div>
								<h5>Fogo</h5>
								<div className="address text">
									Alto São Pedro
									<br />
									São Filipe
								</div>
								<div className="phone">
									<a href="tel:+2382813373">+238 281 33 73</a>
								</div>
							</div>
						</div>

						<div className="info-block col-lg-4 col-md-12 col-sm-12">
							<div className="inner-box">
								<div className="map-icon">
									<img
										src="/images/resource/north-america-map.svg"
										alt="North America Map"
									/>
								</div>
								<h5>Brava</h5>
								<div className="address text">
									Rua Padre Pio
									<br />
									Nova Sintra
								</div>
								<div className="phone">
									<a href="tel:+2385981981">+238 598 19 81</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="title-box centered">
					<h2>
						<span>Como posso ajudar?</span>
					</h2>
					<div className="text">
						Entre em contato conosco e prepare-se para uma melhor experiência de
						aventura em sua vida. Basta procurar oportunidades de estar com a
						natureza.
					</div>
				</div>

				<div className="form-box site-form">
					<div className="contact-form">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="row clearfix">
								<div className="form-group col-lg-6 col-md-6 col-sm-12">
									<div className="f-label">
										Seu Nome <i>*</i>
									</div>
									<div className="field-inner">
										<input
											type="text"
											placeholder="Seu Nome"
											{...register("name", { required: "Nome é obrigatorio" })}
										/>
										{errors.name && <span>{errors.name.message}</span>}
									</div>
								</div>

								<div className="form-group col-lg-6 col-md-6 col-sm-12">
									<div className="f-label">
										Seu Email <i>*</i>
									</div>
									<div className="field-inner">
										<input
											type="email"
											placeholder="Seu Email"
											{...register("email", {
												required: "Email é obrigatorio",
											})}
										/>
										{errors.email && <span>{errors.email.message}</span>}
									</div>
								</div>

								<div className="form-group col-lg-6 col-md-6 col-sm-12">
									<div className="f-label">
										Seu Contato <i>*</i>
									</div>
									<div className="field-inner">
										<input
											type="text"
											placeholder="Seu telefone"
											{...register("phone", {
												required: "numero de contato é obrigatorio",
											})}
										/>
										{errors.phone && <span>{errors.phone.message}</span>}
									</div>
								</div>

								<div className="form-group col-lg-6 col-md-6 col-sm-12">
									<div className="f-label">
										Assunto <i>*</i>
									</div>
									<div className="field-inner">
										<input
											type="text"
											placeholder="Seu Assunto"
											{...register("subject", {
												required: "Assunto é obrigatorio",
											})}
										/>
										{errors.subject && <span>{errors.subject.message}</span>}
									</div>
								</div>

								<div className="form-group col-lg-12 col-md-12 col-sm-12">
									<div className="f-label">Escreva a Mensagem</div>
									<div className="field-inner">
										<textarea
											placeholder="Sua Mensagem"
											{...register("message", {
												required: "Mensagem é Obrigatorio",
											})}
										></textarea>
										{errors.message && <span>{errors.message.message}</span>}
									</div>
								</div>

								<div className="form-group col-lg-12 col-md-12 col-sm-12">
									<button type="submit" className="theme-btn btn-style-two">
										<span>
											Enviar <i className="icon far fa-angle-right"></i>
										</span>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
