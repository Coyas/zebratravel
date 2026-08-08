// src/app/components/Testimonials.tsx

"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";
import { Testimonial } from "@/services/testimonialsService";

interface TestimonialsProps {
	content?: { subtitle: Localized; title: Localized };
	items: Testimonial[];
}

const SOURCE_LABEL: Record<string, string> = {
	EXCURSION: "Excursão",
	HOTEL_ROOM: "Estadia",
};

function initials(name: string): string {
	return name
		.trim()
		.split(/\s+/)
		.slice(0, 2)
		.map((part) => part[0]?.toUpperCase())
		.join("");
}

const Testimonials: React.FC<TestimonialsProps> = ({ content, items }) => {
	const { locale } = useLanguage();
	const data = content
		? { subtitle: pickLocale(content.subtitle, locale), title: pickLocale(content.title, locale) }
		: { subtitle: "Revisão e Depoimento", title: "Principais avaliações sobre ZebraTravel" };

	if (items.length === 0) return null;

	return (
		<section className="testimonials-one">
			<div
				className="bg-layer"
				style={{
					backgroundImage:
						"url(https://res.cloudinary.com/zebratravel-net/image/upload/c_crop,w_5760,h_2500,x_0,y_0/v1742301221/zebratravelImages/fogo_k9mlaf_1_wy0yhe.jpg)",
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
					<div className="testi-carousel owl-theme owl-carousel">
						{items.map((testimonial) => (
							<div
								key={testimonial.id}
								className={`testi-block ${
									testimonial.backgroundImage ? "alternate" : ""
								}`}
							>
								<div className="inner-box">
									<div className="icon">
										<img src="images/icons/quotes-1.svg" alt="quote icon" />
									</div>
									<div className="image">
										{testimonial.image ? (
											<img src={testimonial.image} alt="testimonial" />
										) : (
											<div
												style={{
													width: 60,
													height: 60,
													borderRadius: "50%",
													background: "#ffc933",
													color: "#fff",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													fontWeight: 700,
													fontSize: 18,
												}}
											>
												{initials(testimonial.name)}
											</div>
										)}
									</div>
									<div className="text">{testimonial.text}</div>
									<div className="info">
										<div className="name">{testimonial.name}</div>
										<div className="clearfix">
											<div className="designation">
												{testimonial.designation}
												{testimonial.sourceReviewType && (
													<span
														style={{
															marginLeft: 8,
															display: "inline-block",
															background: "rgba(255,201,51,0.15)",
															color: "#b8860b",
															fontSize: 11,
															fontWeight: 700,
															padding: "2px 8px",
															borderRadius: 999,
														}}
													>
														{SOURCE_LABEL[testimonial.sourceReviewType] ?? ""}
													</span>
												)}
											</div>
											<div className="rating">
												<div className="stars">
													{Array.from({ length: testimonial.rating }).map(
														(_, i) => (
															<i key={i} className="fa fa-star"></i>
														)
													)}
												</div>
											</div>
										</div>
									</div>
									{testimonial.backgroundImage && (
										<div
											className="image-layer"
											style={{
												backgroundImage: `url(${testimonial.backgroundImage})`,
											}}
										></div>
									)}
									{testimonial.link && (
										<div className="over-box">
											<div className="over-title">
												<a href={testimonial.link}>MASTER TREKER TRAVEL</a>
											</div>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
