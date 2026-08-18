"use client";

import React, { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";
import { api } from "@/lib/api";
import Turnstile, { TurnstileHandle } from "@/components/Turnstile";

type FormValues = {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
};

interface ContactFormProps {
	content?: { formTitle: Localized; formText: Localized };
}

const ContactForm: React.FC<ContactFormProps> = ({ content }) => {
	const { locale, t } = useLanguage();
	const data = content
		? { formTitle: pickLocale(content.formTitle, locale), formText: pickLocale(content.formText, locale) }
		: {
				formTitle: "Como posso ajudar?",
				formText: "Entre em contato conosco e prepare-se para uma melhor experiência de aventura em sua vida. Basta procurar oportunidades de estar com a natureza.",
			};
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>();
	const [turnstileToken, setTurnstileToken] = useState("");
	const turnstileRef = useRef<TurnstileHandle>(null);

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		try {
			await api.post("/api/contact-messages", { ...data, turnstileToken });
			Swal.fire({
				position: "center",
				icon: "success",
				title: t("contact.successTitle"),
				showConfirmButton: false,
				timer: 1500,
			});
			reset();
		} catch {
			Swal.fire({
				position: "center",
				icon: "error",
				title: t("contact.errorTitle"),
				showConfirmButton: false,
				timer: 1500,
			});
		} finally {
			setTurnstileToken("");
			turnstileRef.current?.reset();
		}
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
						<span>{data.formTitle}</span>
					</h2>
					<div className="text">{data.formText}</div>
				</div>

				<div className="form-box site-form">
					<div className="contact-form">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="row clearfix">
								<div className="form-group col-lg-6 col-md-6 col-sm-12">
									<div className="f-label">
										{t("contact.yourName")} <i>*</i>
									</div>
									<div className="field-inner">
										<input
											type="text"
											placeholder={t("contact.yourName")}
											{...register("name", { required: t("contact.nameRequired") })}
										/>
										{errors.name && <span>{errors.name.message}</span>}
									</div>
								</div>

								<div className="form-group col-lg-6 col-md-6 col-sm-12">
									<div className="f-label">
										{t("contact.yourEmail")} <i>*</i>
									</div>
									<div className="field-inner">
										<input
											type="email"
											placeholder={t("contact.yourEmail")}
											{...register("email", {
												required: t("contact.emailRequired"),
											})}
										/>
										{errors.email && <span>{errors.email.message}</span>}
									</div>
								</div>

								<div className="form-group col-lg-6 col-md-6 col-sm-12">
									<div className="f-label">
										{t("contact.yourPhone")} <i>*</i>
									</div>
									<div className="field-inner">
										<input
											type="text"
											placeholder={t("contact.yourPhone")}
											{...register("phone", {
												required: t("contact.phoneRequired"),
											})}
										/>
										{errors.phone && <span>{errors.phone.message}</span>}
									</div>
								</div>

								<div className="form-group col-lg-6 col-md-6 col-sm-12">
									<div className="f-label">
										{t("contact.subject")} <i>*</i>
									</div>
									<div className="field-inner">
										<input
											type="text"
											placeholder={t("contact.subject")}
											{...register("subject", {
												required: t("contact.subjectRequired"),
											})}
										/>
										{errors.subject && <span>{errors.subject.message}</span>}
									</div>
								</div>

								<div className="form-group col-lg-12 col-md-12 col-sm-12">
									<div className="f-label">{t("contact.writeMessage")}</div>
									<div className="field-inner">
										<textarea
											placeholder={t("contact.writeMessage")}
											{...register("message", {
												required: t("contact.messageRequired"),
											})}
										></textarea>
										{errors.message && <span>{errors.message.message}</span>}
									</div>
								</div>

								<div className="form-group col-lg-12 col-md-12 col-sm-12">
									<Turnstile ref={turnstileRef} onVerify={setTurnstileToken} />
								</div>

								<div className="form-group col-lg-12 col-md-12 col-sm-12">
									<button type="submit" className="theme-btn btn-style-two" disabled={isSubmitting || !turnstileToken}>
										<span>
											{t("contact.send")} <i className="icon far fa-angle-right"></i>
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
