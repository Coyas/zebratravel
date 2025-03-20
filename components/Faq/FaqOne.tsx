import React, { useState } from "react";
import { faqs } from "@/app/Dados/faqDataMost"; // Importando os dados de FAQ

const FAQOne: React.FC = () => {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const handleFaqToggle = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<section className="faq-one alternate">
			<div className="auto-container">
				<div className="title-box centered">
					<h2>
						<span>Perguntas Mais Frequentes</span>
					</h2>
				</div>
				<div className="row clearfix">
					<div className="text-col col-lg-6 col-md-12 col-sm-12">
						<div className="accordion-box clearfix">
							{faqs.map((faq, index) => (
								<div
									className={`accordion block ${
										activeFaq === index ? "active-block" : ""
									}`}
									key={index}
								>
									<div
										className="acc-btn"
										onClick={() => handleFaqToggle(index)}
									>
										{faq.question}{" "}
										<i
											className={`fa-regular fa-angle-${
												activeFaq === index ? "up" : "down"
											}`}
										></i>
									</div>
									<div
										className={`acc-content ${
											activeFaq === index ? "active" : ""
										}`}
									>
										<div className="content">
											<div className="text">{faq.answer}</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="text-col col-lg-6 col-md-12 col-sm-12">
						<div className="accordion-box clearfix">
							{faqs.map((faq, index) => (
								<div
									className={`accordion block ${
										activeFaq === index ? "active-block" : ""
									}`}
									key={index}
								>
									<div
										className="acc-btn"
										onClick={() => handleFaqToggle(index)}
									>
										{faq.question}{" "}
										<i
											className={`fa-regular fa-angle-${
												activeFaq === index ? "up" : "down"
											}`}
										></i>
									</div>
									<div
										className={`acc-content ${
											activeFaq === index ? "active" : ""
										}`}
									>
										<div className="content">
											<div className="text">{faq.answer}</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQOne;
