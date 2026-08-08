"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";
import { subscribersService } from "@/services/subscribersService";

interface SubscribeSectionProps {
	content?: {
		subtitle: Localized;
		title: Localized;
		text: Localized;
		placeholder: Localized;
		button: Localized;
		successMessage: Localized;
		errorMessage: Localized;
	};
}

const defaultContent = {
	subtitle: "Newsletter",
	title: "SUBSCREVA AGORA",
	text: "Fique por dentro das novidades! Inscreva-se na nossa newsletter e receba as últimas atualizações sobre nossas promoções, eventos e muito mais diretamente no seu e-mail!",
	placeholder: "Endereço de E-mail",
	button: "inscrever",
	successMessage: "Obrigado Por Subscrever!",
	errorMessage: "Por Favor, entre com um email valido.",
};

const SubscribeSection = ({ content }: SubscribeSectionProps) => {
	const { locale } = useLanguage();
	const data = content
		? {
				subtitle: pickLocale(content.subtitle, locale),
				title: pickLocale(content.title, locale),
				text: pickLocale(content.text, locale),
				placeholder: pickLocale(content.placeholder, locale),
				button: pickLocale(content.button, locale),
				successMessage: pickLocale(content.successMessage, locale),
				errorMessage: pickLocale(content.errorMessage, locale),
			}
		: defaultContent;
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (submitting) return;

		const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
		if (!email || !emailPattern.test(email)) {
			setMessage(data.errorMessage);
			return;
		}

		setSubmitting(true);
		try {
			await subscribersService.subscribe(email);
			setMessage(data.successMessage);
			setEmail("");
		} catch (error) {
			console.error("Error subscribing:", error);
			setMessage(data.errorMessage);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<section className="subscribe-section">
			<div className="auto-container">
				<div className="content-box">
					<div
						className="bg-layer " //filter grayscale
						style={{
							backgroundImage:
								"url(https://res.cloudinary.com/zebratravel-net/image/upload/v1742301223/zebratravelImages/BoaVistac_cjrtv8_j5ebad.jpg)",
						}}
					></div>
					<div className="row clearfix">
						{/* Coluna de imagem */}
						<div className="image-col col-xl-5 col-lg-6 col-md-12 col-sm-12">
							<div className="inner">
								<div className="image">
									<img
										src="/images/resource/newsletter-image.svg"
										alt="Newsletter"
									/>
								</div>
							</div>
						</div>

						{/* Coluna de texto */}
						<div className="text-col col-xl-7 col-lg-6 col-md-12 col-sm-12">
							<div className="inner">
								<div className="title">
									<div className="subtitle">{data.subtitle}</div>
									<h2>{data.title}</h2>
									<div className="text ">{data.text}</div>
								</div>

								{/* Formulário de inscrição */}
								<div className="form-box subscribe-form">
									<form onSubmit={handleSubmit}>
										<div className="form-group">
											<div className="field-inner">
												<span className="icon alt-icon far fa-envelope"></span>
												<input
													type="email"
													name="email"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													placeholder={data.placeholder}
												/>
											</div>
											<button type="submit" className="theme-btn btn-style-one">
												<span>
													{data.button} <i className="icon fa fa-paper-plane"></i>
												</span>
											</button>
										</div>
									</form>
									{message && <div className="message">{message}</div>}{" "}
									{/* Exibe a mensagem de sucesso ou erro */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SubscribeSection;
