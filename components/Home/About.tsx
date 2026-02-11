"use client";

import Image from "next/image";
import Link from "next/link";

interface AboutProps {
	content?: {
		subtitle: string;
		title: string;
		text: string;
		items: string[];
	};
}

const AboutSection = ({ content }: AboutProps) => {
	const defaultContent = {
		subtitle: "Sobre a ZebraTravel",
		title: "Agência de Turismo e Viagens",
		text: "A ZebraTravel - Turismo e Viagens, localizada na Ilha do Fogo, oferece experiências únicas para quem deseja explorar as belezas naturais e culturais da região. Desde 2014, nossa missão é proporcionar aos nossos clientes momentos inesquecíveis através de passeios, excursões e atividades como pesca desportiva e mergulho.",
		items: [
			"Acomodações na charmosa Colonial House e Casa Konig.",
			"Atividades de Excurções a volta da Ilha.",
			"Transferes e excursões personalizadas."
		]
	};

	const data = content || defaultContent;

	return (
		<section className="about-us">
			<div className="floated-icon right">
				<Image
					src="/images/resource/about-stone-right.svg"
					alt="Icon"
					title="Icon"
					width={1200}
					height={800}
				/>
			</div>
			<div className="auto-container">
				<div className="row clearfix">
					{/* Text Column */}
					<div className="text-col col-lg-6 col-md-12 col-sm-12">
						<div
							className="inner wow fadeInRight"
							data-wow-duration="1500ms"
							data-wow-delay="0ms"
						>
							<div className="title-box">
								<div className="subtitle">{data.subtitle}</div>
								<h2>
									<i className="bg-vector"></i>
									<span>{data.title}</span>
								</h2>
								<div className="text">
									{data.text}
								</div>
							</div>
							<div className="lower-box">
								<div className="lower-inner clearfix">
									<div className="text-content">
										<ul>
											{data.items.map((item, index) => (
												<li key={index}>{item}</li>
											))}
										</ul>
									</div>
									<div className="image-box">
										<Image
											src="/images/resource/about-image-2.jpg"
											alt="Pousada Colonial House"
											title="Colonial House"
											width={800}
											height={600}
										/>
										<Link
											href="#"
											className="theme-btn lightbox-image overlink"
										>
											<span className="icon fa fa-play"></span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Image Column */}
					<div className="image-col col-lg-6 col-md-12 col-sm-12">
						<div
							className="inner wow fadeInLeft"
							data-wow-duration="1500ms"
							data-wow-delay="0ms"
						>
							<div className="bg-image">
								<Image
									//src="/images/resource/about-vector-1.png"
									src="https://res.cloudinary.com/zebratravel-net/image/upload/c_crop,w_874,h_619,x_0,y_0/v1742317334/Banner_ag%C3%AAncia_de_viagens_rio_de_janeiro_simples_formas_azul_e_nude_r8lbz0.png"
									alt="Ilha do Fogo"
									title="Ilha do Fogo"
									width={800}
									height={600}
								/>
							</div>
							<div className="image-box">
								<Image
									src="/images/resource/about-image-1.svg"
									alt="ZebraTravel"
									title="ZebraTravel"
									width={800}
									height={600}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
