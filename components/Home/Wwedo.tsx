"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

interface WhyChooseProps {
	content?: {
		subtitle: Localized;
		title: Localized;
		items: { title: Localized; text: Localized }[];
	};
}

const defaultItems = [
	{ title: "Destinos Diversificados", text: "Oferecemos uma variedade de destinos, desde paisagens deslumbrantes a alojamento de luxo." },
	{ title: "Excelente Custo-Benefício", text: "Oferecemos serviços de viagem, hotéis e restaurantes com qualidade a preços acessíveis." },
	{ title: "Lugares Maravilhosos", text: "Explore locais incríveis e experiências inesquecíveis com a nossa agência de viagens." },
	{ title: "Reserva Rápida", text: "Facilitamos a sua experiência de reserva com um sistema simples e rápido." },
	{ title: "Equipa de Suporte", text: "Temos uma equipa dedicada para apoiar os nossos clientes em todas as etapas da viagem." },
	{ title: "Viagens com Paixão", text: "Com a ZebraTravel, as viagens são feitas com paixão e dedicação para garantir a sua satisfação." },
];

const WhyChoose: React.FC<WhyChooseProps> = ({ content }) => {
	const { locale } = useLanguage();
	const data = content
		? {
				subtitle: pickLocale(content.subtitle, locale),
				title: pickLocale(content.title, locale),
				items: content.items.map((item) => ({ title: pickLocale(item.title, locale), text: pickLocale(item.text, locale) })),
			}
		: { subtitle: "Somos incríveis", title: "Porque escolher a ZebraTravel", items: defaultItems };
	const [item1, item2, item3, item4, item5, item6] = data.items;

	return (
		<section className="why-section">
			<div className="floated-icon left">
				<Image
					src="/images/resource/stones-left.svg"
					alt=""
					title=""
					width={100}
					height={100}
				/>
			</div>
			<div className="floated-icon right">
				<Image
					src="/images/resource/stones-right.svg"
					alt=""
					title=""
					width={100}
					height={100}
				/>
			</div>
			<div className="auto-container">
				<div className="title-box centered">
					<div className="subtitle">{data.subtitle}</div>
					<h2>
						<i className="bg-vector"></i>
						<span>{data.title}</span>
					</h2>
				</div>

				<div className="row clearfix">
					<div className="left-col col-xl-3 col-lg-4 col-md-6 col-sm-12">
						<div className="inner">
							<div className="why-block">
								<div className="inner-box">
									<div className="icon-box">
										<Image
											src="/images/resource/icon-1.svg"
											alt=""
											width={50}
											height={50}
										/>
									</div>
									<h4>{item1.title}</h4>
									<div className="text">{item1.text}</div>
								</div>
							</div>
							<div className="why-block">
								<div className="inner-box">
									<div className="icon-box">
										<Image
											src="/images/resource/icon-2.svg"
											alt=""
											width={50}
											height={50}
										/>
									</div>
									<h4>{item2.title}</h4>
									<div className="text">{item2.text}</div>
								</div>
							</div>
							<div className="why-block">
								<div className="inner-box">
									<div className="icon-box">
										<Image
											src="/images/resource/icon-3.svg"
											alt=""
											width={50}
											height={50}
										/>
									</div>
									<h4>{item3.title}</h4>
									<div className="text">{item3.text}</div>
								</div>
							</div>
						</div>
					</div>

					<div className="right-col col-xl-3 col-lg-4 col-md-6 col-sm-12">
						<div className="inner">
							<div className="why-block">
								<div className="inner-box">
									<div className="icon-box">
										<Image
											src="/images/resource/icon-4.svg"
											alt=""
											width={50}
											height={50}
										/>
									</div>
									<h4>{item4.title}</h4>
									<div className="text">{item4.text}</div>
								</div>
							</div>
							<div className="why-block">
								<div className="inner-box">
									<div className="icon-box">
										<Image
											src="/images/resource/icon-5.svg"
											alt=""
											width={50}
											height={50}
										/>
									</div>
									<h4>{item5.title}</h4>
									<div className="text">{item5.text}</div>
								</div>
							</div>
							<div className="why-block">
								<div className="inner-box">
									<div className="icon-box">
										<Image
											src="/images/resource/icon-6.svg"
											alt=""
											width={50}
											height={50}
										/>
									</div>
									<h4>{item6.title}</h4>
									<div className="text">{item6.text}</div>
								</div>
							</div>
						</div>
					</div>

					<div className="image-col col-xl-6 col-lg-4 col-md-12 col-sm-12">
						<div className="inner">
							<div className="image-box">
								<Image
									src="/images/resource/why-image-1.svg"
									alt=""
									width={500}
									height={400}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChoose;
