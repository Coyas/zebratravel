"use client";

import React from "react";

interface Testimonial {
	image: string;
	text: string;
	name: string;
	designation: string;
	rating: number;
	backgroundImage?: string;
	link?: string;
}

const testimonials: Testimonial[] = [
	{
		image: "/images/resource/testi-thumb-1.jpg",
		text: "Fight School has specialized in martial arts since 1986 and has one of the most Fight School has specialized.",
		name: "Randall Schwartz",
		designation: "Women's Trainer",
		rating: 5,
	},
	{
		image: "/images/resource/testi-thumb-2.jpg",
		text: "We teach martial arts because we love it — not because we want to make money on you. Unlike other martial.",
		name: "Andru Smith",
		designation: "Boxing Trainer",
		rating: 5,
	},
	{
		image: "/images/resource/testi-thumb-2.jpg",
		text: "We teach martial arts because we love it — not because we want to make money on you. Unlike other martial.",
		name: "Andru Smith",
		designation: "Boxing Trainer",
		rating: 5,
	},
	// Mais testemunhos podem ser adicionados aqui.
];

const Testimonials: React.FC = () => {
	return (
		<section className="testimonials-one">
			<div
				className="bg-layer"
				style={{ backgroundImage: "url(images/background/image-3.jpg)" }}
			></div>
			<div className="auto-container">
				<div className="title-box centered">
					<div className="subtitle">Revisão e Depoimento</div>
					<h2>
						<i className="bg-vector"></i>
						<span>Principais avaliações sobre ZebraTravel</span>
					</h2>
				</div>
				<div className="carousel-box">
					<div className="testi-carousel owl-theme owl-carousel">
						{testimonials.map((testimonial, index) => (
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
										<div className="text">{testimonial.text}</div>
									)}
									{testimonial.name && (
										<div className="info">
											<div className="name">{testimonial.name}</div>
											<div className="clearfix">
												<div className="designation">
													{testimonial.designation}
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
