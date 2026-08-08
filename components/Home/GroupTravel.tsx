// src/app/components/GroupTravel.tsx

"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";
import { Excursao } from "@/services/excursoesService";

interface TravelPackageContent {
	duration: string;
	location: string;
	price: string;
	link: string;
	title: string;
	description: string;
}

interface GroupTravelProps {
	content?: { seeDetails: Localized };
	excursoes: Excursao[];
}

const GroupTravel: React.FC<GroupTravelProps> = ({ content, excursoes }) => {
	const { locale } = useLanguage();
	const seeDetails = content ? pickLocale(content.seeDetails, locale) : "Ver Detalhes";
	const items: TravelPackageContent[] = excursoes.map((excursao) => ({
		duration: excursao.duration,
		location: excursao.location,
		price: `$${excursao.price}`,
		link: `/excurcoes/${excursao.slug}`,
		title: excursao.title,
		description: excursao.description,
	}));

	if (items.length === 0) return null;

	return (
		<section className="group-travel">
			<div
				className="bg-layer"
				style={{
					backgroundImage: `url(https://res.cloudinary.com/zebratravel-net/image/upload/c_crop,w_5760,h_1430,x_0,y_0/v1742301220/zebratravelImages/BoaVistab_epxham_1_zjuivt.webp)`,
				}}
			></div>
			<div className="auto-container">
				<div className="content-box">
					<div className="row clearfix">
						{items.map((pkg, index) => (
							<div
								key={index}
								className={`travel-block-one col-lg-6 col-md-12 col-sm-12 ${
									index % 2 === 1 ? "alternate" : ""
								}`}
							>
								<div className="inner-box">
									<div className="title">
										<h4>{pkg.title}</h4>
									</div>
									<div className="content">
										<div className="info">
											<span className="i-block">
												<i className="icon far fa-clock"></i> {pkg.duration}
											</span>
											&ensp; | &ensp;{" "}
											<span className="i-block">{pkg.location}</span>
										</div>
										<div className="price">
											<span>{pkg.price}</span>
										</div>
										<div className="text">{pkg.description}</div>
										<div className="link-box">
											<a href={pkg.link} className="theme-btn btn-style-one">
												<span>
													{seeDetails}{" "}
													<i className="icon">
														<img
															src="/images/icons/logo-icon.svg"
															alt="Logo Icon"
														/>
													</i>
												</span>
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

export default GroupTravel;
