"use client";

import bgImage from "@/public/images/background/banner-image-1.jpg";
import InerBanner from "@/components/InerBanner";
// import { useState } from "react";
import { tourData } from "@/app/Dados/tourData";
import DestinosCard from "@/components/destinos/destinosCard";
import Testimonials from "@/components/Home/Testimonials";

const Destinos = () => {
	// const [filteredPosts, setFilteredPosts] = useState(tourData);

	// const handleFilter = (filter: string) => {
	// 	if (filter === "all") {
	// 		setFilteredPosts(tourData);
	// 	} else {
	// 		setFilteredPosts(
	// 			tourData.filter((post) => post.category.includes(filter))
	// 		); //Usando includes para verificar se a categoria está presente
	// 	}
	// };

	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			{/* <!--Destination Tours Section--> */}
			<section className="dest-section">
				<div className="floated-icon left">
					<img src="/images/resource/stones-left.svg" alt="" title="" />
				</div>
				<div className="floated-icon right">
					<img src="/images/resource/stones-right.svg" alt="" title="" />
				</div>
				<div className="auto-container">
					<div className="title-box centered">
						<h2>
							<span>Destinos Populares</span>
						</h2>
						<div className="text">
							Explore uma seleção dos melhores destinos ao redor do mundo. De
							praias paradisíacas a montanhas deslumbrantes, temos opções para
							todos os estilos de viagem. Prepare-se para criar memórias
							inesquecíveis em sua próxima aventura!
						</div>
					</div>
					{/* <!--MixitUp Galery--> */}
					<div className="mixitup-gallery">
						{/* <!--Filter--> */}
						<div className="gallery-filters centered clearfix">
							<ul className="filter-tabs filter-btns clearfix">
								<li
									className="active filter"
									data-role="button"
									data-filter="all"
								>
									All
								</li>
								<li className="filter" data-role="button" data-filter=".europe">
									Europa
								</li>
								<li className="filter" data-role="button" data-filter=".asia">
									Asia
								</li>
								<li
									className="filter"
									data-role="button"
									data-filter=".s-america"
								>
									South America
								</li>
								<li
									className="filter"
									data-role="button"
									data-filter=".n-america"
								>
									North America
								</li>
								<li className="filter" data-role="button" data-filter=".africa">
									Africa
								</li>
								<li
									className="filter"
									data-role="button"
									data-filter=".australia"
								>
									Australia
								</li>
							</ul>
						</div>
						<div className="filter-list row clearfix">
							{/* <!--Block--> */}
							{tourData.map((post) => (
								<DestinosCard key={post.id} destino={post} />
							))}
						</div>

						<div className="load-more">
							<a href="#" className="theme-btn btn-style-one">
								<span>carregar mais......</span>
							</a>
						</div>
					</div>
				</div>
			</section>

			<Testimonials />
		</>
	);
};

export default Destinos;
