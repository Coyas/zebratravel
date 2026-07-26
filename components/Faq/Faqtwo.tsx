"use client";

import React, { useState } from "react";
import { faqTabs } from "@/app/Dados/faqDataAll"; // Importando os dados de FAQ
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

interface FAQTwoProps {
	content?: { label: Localized; faqs: { question: Localized; answer: Localized }[] }[];
	header?: { title: Localized; text: Localized };
}

const defaultHeader = {
	title: "Perguntas Frequentes",
	text: "Desde 2014, ajudámos mais de 500.000 pessoas de todas as idades a desfrutar da melhor experiência ao ar livre das suas vidas. Seja para um dia ou para umas férias de duas semanas, perto de casa ou num país estrangeiro.",
};

const FAQTwo: React.FC<FAQTwoProps> = ({ content, header }) => {
	const { locale } = useLanguage();
	const [activeTab, setActiveTab] = useState<number>(0);
	const data = content
		? content.map((tab) => ({
				label: pickLocale(tab.label, locale),
				faqs: tab.faqs.map((f) => ({ question: pickLocale(f.question, locale), answer: pickLocale(f.answer, locale) })),
			}))
		: faqTabs;
	const headerData = header
		? { title: pickLocale(header.title, locale), text: pickLocale(header.text, locale) }
		: defaultHeader;

	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};

	return (
		<section className="faq-two">
			<div className="auto-container">
				<div className="title-box centered">
					<h2>
						<span>{headerData.title}</span>
					</h2>
					<div className="text">{headerData.text}</div>
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
						{data[activeTab]?.faqs.map((faq: { question: string; answer: string }, index: number) => (
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
