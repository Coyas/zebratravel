"use client";

import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
	return (
		<section className="about-us">
			<div className="floated-icon right">
				<Image
					src="/images/resource/about-stone-right.svg"
					alt="Icon"
					title="Icon"
					width={1200}
					height={800}
				/>
			</div>
			<div className="auto-container">
				<div className="row clearfix">
					{/* Text Column */}
					<div className="text-col col-lg-6 col-md-12 col-sm-12">
						<div
							className="inner wow fadeInRight"
							data-wow-duration="1500ms"
							data-wow-delay="0ms"
						>
							<div className="title-box">
								<div className="subtitle">Sobre a ZebraTravel</div>
								<h2>
									<i className="bg-vector"></i>
									<span>Agência de Turismo e Viagens</span>
								</h2>
								<div className="text">
									A ZebraTravel - Turismo e Viagens, localizada na Ilha do Fogo,
									oferece experiências únicas para quem deseja explorar as
									belezas naturais e culturais da região. Desde 2014, nossa
									missão é proporcionar aos nossos clientes momentos
									inesquecíveis através de passeios, excursões e atividades como
									pesca desportiva e mergulho.
								</div>
							</div>
							<div className="lower-box">
								<div className="lower-inner clearfix">
									<div className="text-content">
										<ul>
											<li>
												Acomodações na charmosa Colonial House e Casa Konig.
											</li>
											<li>Atividades de Excurções a volta da Ilha.</li>
											<li>Transferes e excursões personalizadas.</li>
										</ul>
									</div>
									<div className="image-box">
										<Image
											src="/images/resource/about-image-2.jpg"
											alt="Pousada Colonial House"
											title="Colonial House"
											width={800}
											height={600}
										/>
										<Link
											href="#"
											className="theme-btn lightbox-image overlink"
										>
											<span className="icon fa fa-play"></span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Image Column */}
					<div className="image-col col-lg-6 col-md-12 col-sm-12">
						<div
							className="inner wow fadeInLeft"
							data-wow-duration="1500ms"
							data-wow-delay="0ms"
						>
							<div className="bg-image">
								<Image
									src="/images/resource/about-vector-1.png"
									alt="Ilha do Fogo"
									title="Ilha do Fogo"
									width={800}
									height={600}
								/>
							</div>
							<div className="image-box">
								<Image
									src="/images/resource/about-image-1.svg"
									alt="ZebraTravel"
									title="ZebraTravel"
									width={800}
									height={600}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
