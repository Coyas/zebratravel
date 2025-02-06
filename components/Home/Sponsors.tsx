"use client";

import React, { useState } from "react";

interface Sponsor {
	image: string;
	link: string;
}

const Sponsors: React.FC = () => {
	// Definindo os dados diretamente
	const sponsors: Sponsor[] = [
		{ image: "/images/resource/sponsor-1.png", link: "#" },
		{ image: "/images/resource/sponsor-2.png", link: "#" },
		{ image: "/images/resource/sponsor-3.png", link: "#" },
		{ image: "/images/resource/sponsor-4.png", link: "#" },
		{ image: "/images/resource/sponsor-1.png", link: "#" },
		{ image: "/images/resuorce/sponsor-2.png", link: "#" },
		{ image: "/images/resource/sponsor-3.png", link: "#" },
		{ image: "/images/resource/sponsor-4.png", link: "#" },
	];

	return (
		<section className="sponsors-one">
			<div className="auto-container">
				<div className="carousel-box">
					<div className="sponsors-carousel owl-theme owl-carousel">
						{sponsors.map((sponsor, index) => (
							<div key={index} className="sponsor-block">
								<div className="inner-box">
									<div className="image">
										<a href={sponsor.link}>
											<img src={sponsor.image} alt={`Sponsor ${index + 1}`} />
										</a>
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

export default Sponsors;
