"use client";
import React from "react";

const PopularExcursions = () => {
	// Dados estáticos dentro do componente, adaptados para a Ilha do Fogo
	const excursionData = [
		{
			id: 1,
			title: "Pico do Fogo",
			slug: "pico-do-fogo-vulcao",
			image: {
				url: "/images/resource/f-image-1.jpg", // Coloque o link da imagem do Pico do Fogo
			},
			price: 150,
			days: 3,
			location: "Pico do Fogo, Ilha do Fogo",
			rating: 5,
			reviews: 12,
			description:
				"Suba até o cume do vulcão ativo para uma vista incrível da ilha e das crateras ao redor.",
		},
		{
			id: 2,
			title: "Chã das Caldeiras",
			slug: "cha-das-caldeiras",
			image: {
				url: "/images/resource/f-image-2.jpg", // Coloque o link da imagem de Chã das Caldeiras
			},
			price: 120,
			days: 2,
			location: "Chã das Caldeiras, Ilha do Fogo",
			rating: 4,
			reviews: 8,
			description:
				"Explore a vila dentro da cratera do vulcão, com paisagens únicas e vinhedos locais.",
		},
		{
			id: 3,
			title: "São Filipe",
			slug: "sao-filipe-ilha-do-fogo",
			image: {
				url: "/images/resource/f-image-3.jpg", // Coloque o link da imagem de São Filipe
			},
			price: 100,
			days: 1,
			location: "São Filipe, Ilha do Fogo",
			rating: 4,
			reviews: 9,
			description:
				"Passeie pela charmosa cidade de São Filipe, com suas ruas históricas e vistas para o oceano.",
		},
		{
			id: 4,
			title: "Mosteiros",
			slug: "mosteiros-ilha-do-fogo",
			image: {
				url: "/images/resource/f-image-4.jpg", // Coloque o link da imagem de Mosteiros
			},
			price: 130,
			days: 2,
			location: "Mosteiros, Ilha do Fogo",
			rating: 4,
			reviews: 7,
			description:
				"Visite os Mosteiros, com suas paisagens dramáticas e áreas perfeitas para caminhadas.",
		},
		{
			id: 5,
			title: "Praia de São Jorge",
			slug: "praia-sao-jorge",
			image: {
				url: "/images/resource/f-image-5.jpg", // Coloque o link da imagem de Praia de São Jorge
			},
			price: 110,
			days: 1,
			location: "Praia de São Jorge, Ilha do Fogo",
			rating: 5,
			reviews: 15,
			description:
				"Relaxe na Praia de São Jorge, uma das praias mais bonitas da ilha, com águas cristalinas.",
		},
		{
			id: 6,
			title: "Vila de Patim",
			slug: "vila-de-patim",
			image: {
				url: "/images/resource/f-image-5.jpg", // Coloque o link da imagem de Vila de Patim
			},
			price: 90,
			days: 1,
			location: "Vila de Patim, Ilha do Fogo",
			rating: 4,
			reviews: 6,
			description:
				"Descubra a tranquilidade da Vila de Patim, com suas belas paisagens rurais e cultura local.",
		},
	];

	return (
		<section className="popular-section">
			<div
				className="bg-layer"
				style={{ backgroundImage: "url(images/background/image-1.jpg)" }}
			></div>
			<div className="auto-container">
				<div className="title-box centered">
					<div className="subtitle">Explore as belezas da Ilha do Fogo</div>
					<h2>
						<i className="bg-vector"></i>
						<span>Excursões Mais Populares</span>
					</h2>
				</div>
				<div className="carousel-box">
					<div className="popular-carousel owl-theme owl-carousel">
						{/* Bloco Dinâmico */}
						{excursionData.map((excursion) => (
							<div className="trek-block-one" key={excursion.id}>
								<div className="inner-box">
									<div className="image-box">
										<div className="image">
											<a href={`packages/${excursion.slug}`}>
												<img
													src={excursion.image.url}
													alt={excursion.title}
													title={excursion.title}
												/>
											</a>
										</div>
										<div className="price">
											<span>${excursion.price}</span>
										</div>
										<div className="info">
											<span className="i-block">
												<i className="icon far fa-clock"></i> {excursion.days}{" "}
												dias
											</span>{" "}
											&ensp; | &ensp;{" "}
											<span className="i-block">{excursion.location}</span>
										</div>
									</div>
									<div className="lower-content">
										<h4>
											<a href={`packages/${excursion.slug}`}>
												{excursion.title}
											</a>
										</h4>
										<div className="ratings clearfix">
											<div className="stars">
												{Array.from({ length: excursion.rating }).map(
													(_, i) => (
														<i key={i} className="fa fa-star"></i>
													)
												)}
												{Array.from({ length: 5 - excursion.rating }).map(
													(_, i) => (
														<i key={i} className="fa fa-star empty"></i>
													)
												)}
											</div>
											<div className="rev">
												<a href={`packages/${excursion.slug}`}>
													{excursion.reviews} Avaliações
												</a>
											</div>
										</div>
										<div className="text">{excursion.description}</div>
									</div>
									<div className="bottom-box clearfix">
										<div className="more-link">
											<a
												href={`packages/${excursion.slug}`}
												className="theme-btn"
											>
												<span>
													Ver Detalhes{" "}
													<i className="icon">
														<img src="images/icons/logo-icon.svg" alt="" />
													</i>
												</span>
											</a>
										</div>
										<div className="video-link">
											<a
												href={`packages/${excursion.slug}`}
												className="theme-btn"
											>
												<i className="icon far fa-video-camera"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PopularExcursions;
