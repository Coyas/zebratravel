"use client";

import { useState } from "react";

interface LocationPoint {
	id: number;
	address: string;
	link: string;
}

const locations: LocationPoint[] = [
	{ id: 1, address: "Avenida Amilcar Cabral, Plateau - Praia", link: "#" },
	{
		id: 2,
		address: "Alto São Pedro, São Filipe - Fogo",
		link: "https://maps.app.goo.gl/EhmhbDyUW7TGAg759",
	},
	{ id: 3, address: "Mosteiros - Fogo", link: "#" },
	{ id: 4, address: "Rua Padre Pio, Nova Sintra - Brava", link: "#" },
];

const accordionItems = [
	{
		title: "Como localizar a zebra?",
		content: "",
	},
	{
		title: "Tem restaurante na zebratravel?",
		content: "",
	},
	{
		title: "Devo-me preocupar com a altitude do vulcão?",
		content: "",
	},
];

const FindUs = () => {
	const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setActiveAccordion(activeAccordion === index ? null : index);
	};

	return (
		<section className="find-us">
			<div className="floated-icon left">
				<img src="images/resource/stones-left.svg" alt="" title="" />
			</div>
			<div className="floated-icon right">
				<img src="images/resource/floated-icon-right-2.svg" alt="" title="" />
			</div>
			<div className="auto-container">
				<div className="title-box centered">
					<h2>
						<span>Encontre o nosso escritório no mapa</span>
					</h2>
					<div className="text">
						Contacte-nos e prepare-se para uma melhor experiência de aventura em
						toda a sua vida. Basta procurar uma oportunidade de estar com a
						natureza.
					</div>
				</div>
				<div className="row clearfix">
					{/* Map Column */}
					<div className="map-col col-lg-6 col-md-12 col-sm-12">
						<div
							className="inner wow fadeInLeft "
							data-wow-duration="1500ms"
							data-wow-delay="0ms"
						>
							<div className="map">
								<div className="map-image">
									<img src="images/resource/world-map.svg" alt="" title="" />
								</div>
								{locations.map((loc) => (
									<div key={loc.id} className={`loc-point loc-${loc.id}`}>
										<div className="loc-icon">
											<img src="images/icons/loc-hover.svg" alt="" title="" />
										</div>
										<div className="loc-popup">
											<div className="text">{loc.address}</div>
											<div className="link">
												<a href={loc.link}>Ver no mapa</a>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					{/* Accordion Column */}
					<div className="text-col col-lg-6 col-md-12 col-sm-12">
						<div
							className="inner wow fadeInRight"
							data-wow-duration="1500ms"
							data-wow-delay="0ms"
						>
							<div className="accordion-box clearfix">
								{accordionItems.map((item, index) => (
									<div
										key={index}
										className={`accordion block ${
											activeAccordion === index ? "active-block" : ""
										}`}
									>
										<div
											className="acc-btn"
											onClick={() => toggleAccordion(index)}
										>
											{item.title}{" "}
											<i
												className={`fa-regular fa-angle-${
													activeAccordion === index ? "up" : "down"
												}`}
											></i>
										</div>
										{activeAccordion === index && (
											<div className="acc-content">
												<div className="content">
													<div className="text">{item.content}</div>
												</div>
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FindUs;
