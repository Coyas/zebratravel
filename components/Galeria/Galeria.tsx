import React from "react";

const galleryItems = [
	{ imgSrc: "/images/resource/gallery-10.jpg", filter: "tours" },
	{ imgSrc: "/images/resource/gallery-11.jpg", filter: "destination" },
	{ imgSrc: "/images/resource/gallery-12.jpg", filter: "activity" },
	{ imgSrc: "/images/resource/gallery-13.jpg", filter: "activity tours" },
	{ imgSrc: "/images/resource/gallery-14.jpg", filter: "activity destination" },
	{ imgSrc: "/images/resource/gallery-15.jpg", filter: "destination tours" },
	{ imgSrc: "/images/resource/gallery-16.jpg", filter: "activity destination" },
	{ imgSrc: "/images/resource/gallery-17.jpg", filter: "activity tours" },
	{ imgSrc: "/images/resource/gallery-18.jpg", filter: "destination tours" },
	{ imgSrc: "/images/resource/gallery-19.jpg", filter: "activity destination" },
	{ imgSrc: "/images/resource/gallery-20.jpg", filter: "activity tours" },
	{ imgSrc: "/images/resource/gallery-21.jpg", filter: "destination tours" },
];

const Galeria = () => {
	return (
		<section className="gallery-section">
			<div className="floated-icon">
				<img src="/images/resource/floated-icon-right-2.svg" alt="" />
			</div>
			<div className="auto-container">
				<div className="title-box centered">
					<h2>
						<span>Veja Nossa Galeria Mais Recente</span>
					</h2>
					<div className="text">Explorando o mundo com conforto</div>
				</div>
			</div>

			{/* MixitUp Gallery */}
			<div className="mixitup-gallery">
				<div className="auto-container">
					{/* Filter */}
					<div className="gallery-filters centered clearfix">
						<ul className="filter-tabs filter-btns clearfix">
							<li
								className="active filter"
								data-role="button"
								data-filter="all"
							>
								Todas
							</li>
							<li className="filter" data-role="button" data-filter=".activity">
								Atividades
							</li>
							<li
								className="filter"
								data-role="button"
								data-filter=".destination"
							>
								Destinos
							</li>
							<li className="filter" data-role="button" data-filter=".tours">
								Excurções
							</li>
						</ul>
					</div>
				</div>

				<div className="outer-container">
					<div className="filter-list row clearfix">
						{galleryItems.map((item, index) => (
							<div
								key={index}
								className={`gallery-block mix ${item.filter} col-xl-4 col-lg-4 col-md-6 col-sm-12`}
							>
								<div className="inner-box">
									<div className="image-box">
										<div className="image">
											<img src={item.imgSrc} alt="" />
										</div>
									</div>
									<a
										href={item.imgSrc}
										className="lightbox-image zoom-btn"
										data-fancybox="gallery"
									>
										<span className="icon">
											<img src="/images/icons/zoom-icon.svg" alt="" />
										</span>
									</a>
								</div>
							</div>
						))}
					</div>

					<div className="load-more">
						<a href="#" className="theme-btn btn-style-one">
							<span>Carregar mais......</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Galeria;
