// src/app/components/PopularExcursions.tsx

"use client";

import React from "react";
import { excursionData } from "@/app/Dados/excursionsData"; // Importando os dados

const PopularExcursions: React.FC = () => {
	return (
		<section className="popular-section">
			<div
				className="bg-layer"
				style={{
					backgroundImage:
						"url(https://res.cloudinary.com/zebratravel-net/image/upload/v1742301228/zebratravelImages/BoaVista_f7rvab_f987iv.jpg)",
				}}
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
