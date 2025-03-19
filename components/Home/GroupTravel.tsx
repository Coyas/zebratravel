"use client";

import React from "react";

interface TravelPackage {
	title: string;
	duration: string;
	location: string;
	price: string;
	description: string;
	link: string;
	imageUrl: string;
}

const travelPackages: TravelPackage[] = [
	{
		title: "Grupo para Vulcao",
		duration: "5 days",
		location: "259P, Himalaya Ag",
		price: "$235.00",
		description:
			"Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you.",
		link: "#",
		imageUrl: "/images/background/image-2.jpg",
	},
	{
		title: "Grupo para Salinas",
		duration: "5 days",
		location: "259P, Himalaya Ag",
		price: "$235.00",
		description:
			"Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you.",
		link: "#",
		imageUrl: "/images/background/image-2.jpg",
	},
];

const GroupTravel: React.FC = () => {
	return (
		<section className="group-travel">
			<div
				className="bg-layer"
				style={{
					backgroundImage: `url(https://res.cloudinary.com/zebratravel-net/image/upload/v1742405461/zebratravelImages/pexels-pixabay-531756_edncyp.webp)`,
				}}
			></div>
			<div className="auto-container">
				<div className="content-box">
					<div className="row clearfix">
						{travelPackages.map((pkg, index) => (
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
													Ver Detalhes{" "}
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
