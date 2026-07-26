// src/app/components/TopDestinos.tsx

"use client";

import React from "react";
import Link from "next/link";
import { Tour } from "@/services/destinosService";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

interface TopDestinosProps {
	content?: { subtitle: Localized; title: Localized };
	tours: Tour[];
}

// Cycling masonry widths so the gallery keeps its varied layout regardless of how many tours exist.
const COL_SIZES = [
	"col-lg-8 col-md-12 col-sm-12",
	"column-width col-lg-4 col-md-6 col-sm-12",
	"col-lg-6 col-md-6 col-sm-12",
	"col-lg-6 col-md-6 col-sm-12",
	"column-width col-lg-4 col-md-6 col-sm-12",
	"col-lg-8 col-md-12 col-sm-12",
];

const TopDestinos: React.FC<TopDestinosProps> = ({ content, tours }) => {
	const { locale } = useLanguage();
	const data = content
		? { subtitle: pickLocale(content.subtitle, locale), title: pickLocale(content.title, locale) }
		: { subtitle: "Destinos em Alta", title: "Destinos em Tendência" };

	if (tours.length === 0) {
		return null;
	}

	return (
		<section className="trending-destinations">
			<div className="auto-container">
				<div className="title-box centered">
					<div className="subtitle">{data.subtitle}</div>
					<h2>
						<i className="bg-vector"></i>
						<span>{data.title}</span>
					</h2>
				</div>

				<div className="gallery-box">
					<div className="masonry-container row clearfix">
						{tours.map((tour, index) => (
							<div
								key={tour.id}
								className={`dest-block-one masonry-item ${COL_SIZES[index % COL_SIZES.length]}`}
							>
								<div className="inner-box">
									<div className="image-box">
										<Link href="/destinos">
											<img src={tour.image} alt={tour.title} title={tour.title} />
										</Link>
									</div>
									<div className="hvr-box">
										<div className="cap-box">
											<div className="cap-inner clearfix">
												<h4>
													<Link href="/destinos">{tour.title}</Link>
												</h4>
												<div className="tour-count">
													<span>{tour.tours} Tours</span>
												</div>
											</div>
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

export default TopDestinos;
