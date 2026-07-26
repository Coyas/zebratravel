// src/app/components/Testimonials.tsx

"use client";

import React from "react";
import { testimonials } from "@/app/Dados/testimonialsData"; // Importando os dados
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

interface TestimonialItem {
	image?: string;
	backgroundImage?: string;
	link?: string;
	rating: number;
	name: Localized | string;
	designation: Localized | string;
	text: Localized | string;
}

interface TestimonialsProps {
	content?: { subtitle: Localized; title: Localized; items?: TestimonialItem[] };
}

const Testimonials: React.FC<TestimonialsProps> = ({ content }) => {
	const { locale } = useLanguage();
	const data = content
		? { subtitle: pickLocale(content.subtitle, locale), title: pickLocale(content.title, locale) }
		: { subtitle: "Revisão e Depoimento", title: "Principais avaliações sobre ZebraTravel" };
	const items = content?.items ?? testimonials;

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
						{items.map((testimonial, index) => (
							<div
								key={index}
								className={`testi-block ${
									testimonial.backgroundImage ? "alternate" : ""
								}`}
							>
								<div className="inner-box">
									{testimonial.image && (
										<div className="icon">
											<img src="images/icons/quotes-1.svg" alt="quote icon" />
										</div>
									)}
									{testimonial.image && (
										<div className="image">
											<img src={testimonial.image} alt="testimonial" />
										</div>
									)}
									{testimonial.text && (
										<div className="text">{pickLocale(testimonial.text, locale)}</div>
									)}
									{testimonial.name && (
										<div className="info">
											<div className="name">{pickLocale(testimonial.name, locale)}</div>
											<div className="clearfix">
												<div className="designation">
													{pickLocale(testimonial.designation, locale)}
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
									)}
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
