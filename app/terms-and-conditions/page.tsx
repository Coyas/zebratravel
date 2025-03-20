"use client";

import React, { useEffect, useState } from "react";
import { termsData, Term } from "@/app/Dados/termos"; // Importa os dados simulados
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";

// Definindo a interface para o componente TermBlock
interface TermBlockProps {
	title: string;
	text: string;
}

// Componente TermBlock
const TermBlock: React.FC<TermBlockProps> = ({ title, text }) => {
	return (
		<div className="term-block">
			<div className="inner">
				<div className="title">
					<h5>{title}</h5>
				</div>
				<div className="text">{text}</div>
			</div>
		</div>
	);
};

// Componente principal de termos e condições
const TermsSection: React.FC = () => {
	// Usando o tipo correto para o estado
	const [terms, setTerms] = useState<Term[]>([]);

	// Simula a chamada da API
	useEffect(() => {
		// Aqui você pode substituir pela sua chamada de API
		// Exemplo: fetch('sua-api-endpoint').then(response => response.json()).then(data => setTerms(data));

		// Para este exemplo, vamos apenas usar os dados simulados
		setTerms(termsData);
	}, []); // O array vazio garante que isso aconteça apenas uma vez quando o componente for montado

	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<section className="terms-section">
				<div className="auto-container">
					<div className="content-box">
						<div className="row clearfix">
							<div className="text-col col-lg-6 col-md-12 col-sm-12">
								{terms.slice(0, 4).map((term, index) => (
									<TermBlock key={index} title={term.title} text={term.text} />
								))}
							</div>

							<div className="text-col col-lg-6 col-md-12 col-sm-12">
								{terms.slice(4).map((term, index) => (
									<TermBlock key={index} title={term.title} text={term.text} />
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default TermsSection;
