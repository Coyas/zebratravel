"use client";

import React from "react";
import Image from "next/image";

const WhyChoose: React.FC = () => {
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
					<div className="subtitle">Somos incríveis</div>
					<h2>
						<i className="bg-vector"></i>
						<span>Porque escolher a ZebraTravel</span>
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
									<h4>Destinos Diversificados</h4>
									<div className="text">
										Oferecemos uma variedade de destinos, desde paisagens
										deslumbrantes a alojamento de luxo.
									</div>
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
									<h4>Excelente Custo-Benefício</h4>
									<div className="text">
										Oferecemos serviços de viagem, hotéis e restaurantes com
										qualidade a preços acessíveis.
									</div>
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
									<h4>Lugares Maravilhosos</h4>
									<div className="text">
										Explore locais incríveis e experiências inesquecíveis com a
										nossa agência de viagens.
									</div>
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
									<h4>Reserva Rápida</h4>
									<div className="text">
										Facilitamos a sua experiência de reserva com um sistema
										simples e rápido.
									</div>
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
									<h4>Equipa de Suporte</h4>
									<div className="text">
										Temos uma equipa dedicada para apoiar os nossos clientes em
										todas as etapas da viagem.
									</div>
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
									<h4>Viagens com Paixão</h4>
									<div className="text">
										Com a ZebraTravel, as viagens são feitas com paixão e
										dedicação para garantir a sua satisfação.
									</div>
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
