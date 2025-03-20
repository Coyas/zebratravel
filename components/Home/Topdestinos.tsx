// src/app/components/TopDestinos.tsx

"use client";

import React from "react";
import Image from "next/image";
import { destinos } from "@/app/Dados/destinosData"; // Importando os dados

const TopDestinos: React.FC = () => {
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
