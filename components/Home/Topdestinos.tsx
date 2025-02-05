import React from "react";
import Image from "next/image";

const TopDestinos: React.FC = () => {
	const destinos = [
		{
			nome: "Praia",
			imagem: "/images/resource/gallery-1.jpg",
			tours: 15,
			colSize: "col-lg-8 col-md-12 col-sm-12",
		},
		{
			nome: "Fogo",
			imagem: "/images/resource/gallery-2.jpg",
			tours: 15,
			colSize: "column-width col-lg-4 col-md-6 col-sm-12",
		},
		{
			nome: "Sal",
			imagem: "/images/resource/gallery-3.jpg",
			tours: 15,
			colSize: "col-lg-6 col-md-6 col-sm-12",
		},
		{
			nome: "São Vicente",
			imagem: "/images/resource/gallery-4.jpg",
			tours: 15,
			colSize: "col-lg-6 col-md-6 col-sm-12",
		},
		{
			nome: "Boa Vista",
			imagem: "/images/resource/gallery-5.jpg",
			tours: 15,
			colSize: "column-width col-lg-4 col-md-6 col-sm-12",
		},
		{
			nome: "Maio",
			imagem: "/images/resource/gallery-6.jpg",
			tours: 15,
			colSize: "col-lg-8 col-md-12 col-sm-12",
		},
	];

	return (
		<section className="trending-destinations">
			<div className="auto-container">
				<div className="title-box centered">
					<div className="subtitle">Destinos em Alta</div>
					<h2>
						<i className="bg-vector"></i>
						<span>Destinos em Tendência</span>
					</h2>
				</div>

				<div className="gallery-box">
					<div className="masonry-container row clearfix">
						{destinos.map((destino, index) => (
							<div
								key={index}
								className={`dest-block-one masonry-item ${destino.colSize}`}
							>
								<div className="inner-box">
									<div className="image-box">
										<a href="#">
											<Image
												src={destino.imagem}
												alt={destino.nome}
												width={500}
												height={400}
											/>
										</a>
									</div>
									<div className="hvr-box">
										<div className="cap-box">
											<div className="cap-inner clearfix">
												<h4>
													<a href="tours.html">{destino.nome}</a>
												</h4>
												<div className="tour-count">
													<span>{destino.tours} Tours</span>
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
