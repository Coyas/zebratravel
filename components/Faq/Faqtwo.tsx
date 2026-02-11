import React, { useState } from "react";
import { faqTabs } from "@/app/Dados/faqDataAll"; // Importando os dados de FAQ

interface FAQTwoProps {
	content?: any[];
}

const FAQTwo: React.FC<FAQTwoProps> = ({ content }) => {
	const [activeTab, setActiveTab] = useState<number>(0);
	const data = content || faqTabs;

	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};

	return (
		<section className="faq-two">
			<div className="auto-container">
				<div className="title-box centered">
					<h2>
						<span>Perguntas Frequentes</span>
					</h2>
					<div className="text">
						Desde 2014, ajudámos mais de 500.000 pessoas de todas as idades a
						desfrutar da melhor experiência ao ar livre das suas vidas. Seja
						para um dia ou para umas férias de duas semanas, perto de casa ou
						num país estrangeiro.
					</div>
				</div>
				<div className="tabs-box">
					<ul className="tab-buttons clearfix">
						{data.map((tab, index) => (
							<li
								key={index}
								className={`tab-btn ${activeTab === index ? "active-btn" : ""}`}
								onClick={() => handleTabClick(index)}
							>
								<span>{tab.label}</span>
							</li>
						))}
					</ul>
					<div className="tabs-content">
						{data[activeTab]?.faqs.map((faq, index) => (
							<div className="faq-block" key={index}>
								<div className="inner">
									<div className="title">
										<h5>{faq.question}</h5>
									</div>
									<div className="text">{faq.answer}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQTwo;
