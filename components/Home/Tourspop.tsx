// src/app/components/PopularExcursions.tsx

"use client";

import React from "react";
import { Excursao } from "@/services/excursoesService";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

interface TourspopProps {
	content?: {
		subtitle: Localized;
		title: Localized;
		reviewsLabel: Localized;
		seeDetails: Localized;
	};
	excursoes: Excursao[];
}

const PopularExcursions: React.FC<TourspopProps> = ({ content, excursoes }) => {
	const { locale } = useLanguage();
	const data = content
		? {
				subtitle: pickLocale(content.subtitle, locale),
				title: pickLocale(content.title, locale),
				reviewsLabel: pickLocale(content.reviewsLabel, locale),
				seeDetails: pickLocale(content.seeDetails, locale),
			}
		: {
				subtitle: "Explore as belezas da Ilha do Fogo",
				title: "Excursões Mais Populares",
				reviewsLabel: "Avaliações",
				seeDetails: "Ver Detalhes",
			};

	if (excursoes.length === 0) {
		return null;
	}

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
						{excursoes.map((excursao) => (
							<div className="trek-block-one" key={excursao.slug}>
								<div className="inner-box">
									<div className="image-box">
										<div className="image">
											<a href={`/excurcoes/${excursao.slug}`}>
												<img
													src={excursao.image}
													alt={excursao.title}
													title={excursao.title}
												/>
											</a>
										</div>
										<div className="price">
											<span>${excursao.price}</span>
										</div>
										<div className="info">
											<span className="i-block">
												<i className="icon far fa-clock"></i> {excursao.duration}
											</span>{" "}
											&ensp; | &ensp;{" "}
											<span className="i-block">{excursao.location}</span>
										</div>
									</div>
									<div className="lower-content">
										<h4>
											<a href={`/excurcoes/${excursao.slug}`}>{excursao.title}</a>
										</h4>
										<div className="ratings clearfix">
											<div className="stars">
												{[...Array(5)].map((_, i) => (
													<i
														key={i}
														className={`fa fa-star ${i < excursao.rating ? "" : "empty"}`}
													></i>
												))}
											</div>
											<div className="rev">
												<a href={`/excurcoes/${excursao.slug}`}>
													{excursao.reviews} {data.reviewsLabel}
												</a>
											</div>
										</div>
										<div className="text">{excursao.description}</div>
									</div>
									<div className="bottom-box clearfix">
										<div className="more-link">
											<a
												href={`/excurcoes/${excursao.slug}`}
												className="theme-btn"
											>
												<span>
													{data.seeDetails}{" "}
													<i className="icon">
														<img src="/images/icons/logo-icon.svg" alt="" />
													</i>
												</span>
											</a>
										</div>
										<div className="video-link">
											<a
												href={`/excurcoes/${excursao.slug}`}
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
