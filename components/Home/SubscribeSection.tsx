"use client";

import React, { useState } from "react";

const SubscribeSection = () => {
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Simulando a ação de enviar o formulário
		if (email) {
			setMessage("Obrigado Por Subscrever!");
		} else {
			setMessage("Por Favor, entre com um email valido.");
		}

		// Aqui você pode fazer a chamada para sua API ou lógica para enviar o email
	};

	return (
		<section className="subscribe-section">
			<div className="auto-container">
				<div className="content-box">
					<div
						className="bg-layer"
						style={{
							backgroundImage: "url(images/background/newsletter-bg.png)",
						}}
					></div>
					<div className="row clearfix">
						{/* Coluna de imagem */}
						<div className="image-col col-xl-5 col-lg-6 col-md-12 col-sm-12">
							<div className="inner">
								<div className="image">
									<img
										src="images/resource/newsletter-image.svg"
										alt="Newsletter"
									/>
								</div>
							</div>
						</div>

						{/* Coluna de texto */}
						<div className="text-col col-xl-7 col-lg-6 col-md-12 col-sm-12">
							<div className="inner">
								<div className="title">
									<div className="subtitle">Newsletter</div>
									<h2>SUBSCREVA AGORA</h2>
									<div className="text">
										Fique por dentro das novidades! Inscreva-se na nossa
										newsletter e receba as últimas atualizações sobre nossas
										promoções, eventos e muito mais diretamente no seu e-mail!
									</div>
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
													placeholder="Endereço de E-mail"
												/>
											</div>
											<button type="submit" className="theme-btn btn-style-one">
												<span>
													inscrever <i className="icon fa fa-paper-plane"></i>
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
