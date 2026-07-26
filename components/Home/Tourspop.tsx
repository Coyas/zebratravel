// src/app/components/PopularExcursions.tsx

"use client";

import React from "react";
import { excursionData } from "@/app/Dados/excursionsData"; // Importando os dados
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

interface TourspopProps {
	content?: {
		subtitle: Localized;
		title: Localized;
		daysLabel: Localized;
		reviewsLabel: Localized;
		seeDetails: Localized;
	};
}

const PopularExcursions: React.FC<TourspopProps> = ({ content }) => {
	const { locale } = useLanguage();
	const data = content
		? {
				subtitle: pickLocale(content.subtitle, locale),
				title: pickLocale(content.title, locale),
				daysLabel: pickLocale(content.daysLabel, locale),
				reviewsLabel: pickLocale(content.reviewsLabel, locale),
				seeDetails: pickLocale(content.seeDetails, locale),
			}
		: {
				subtitle: "Explore as belezas da Ilha do Fogo",
				title: "Excursões Mais Populares",
				daysLabel: "dias",
				reviewsLabel: "Avaliações",
				seeDetails: "Ver Detalhes",
			};

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
					<div className="subtitle">{data.subtitle}</div>
					<h2>
						<i className="bg-vector"></i>
						<span>{data.title}</span>
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
												{data.daysLabel}
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
													{excursion.reviews} {data.reviewsLabel}
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
													{data.seeDetails}{" "}
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
