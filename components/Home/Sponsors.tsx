// src/app/components/Sponsors.tsx

"use client";

import React from "react";
import { sponsors as staticSponsors } from "@/app/Dados/sponsorsData"; // fallback
import { Sponsor } from "@/services/sponsorsService";

interface SponsorsProps {
	sponsors?: Sponsor[];
}

const Sponsors: React.FC<SponsorsProps> = ({ sponsors: sponsorsProp }) => {
	const sponsors = sponsorsProp && sponsorsProp.length > 0 ? sponsorsProp : staticSponsors;
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
