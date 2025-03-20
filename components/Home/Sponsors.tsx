// src/app/components/Sponsors.tsx

"use client";

import React from "react";
import { sponsors } from "@/app/Dados/sponsorsData"; // Importando os dados

const Sponsors: React.FC = () => {
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
