"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
	return (
		<footer className="footer-two">
			<div
				className="bg-layer"
				style={{ backgroundImage: "url(/images/background/footer-bg.png)" }}
			></div>
			<div className="upper-section">
				<div className="auto-container">
					<div className="row clearfix">
						<div className="footer-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
							{/* Logo */}
							<div className="footer-logo">
								<div className="logo">
									<Link href="index.html" title="ZebraTravel">
										<img
											src="/images/logo.svg"
											alt="ZebraTravel"
											title="ZebraTravel"
										/>
									</Link>
								</div>
							</div>
							<div className="footer-text">
								zebra foi fundada em ???? por um grupo de profissionais focados
								em ????? que criaram o ?? ?????? para rigorosamente avaliar
								operadores de charter aéreo.
							</div>
							<div className="social-links">
								<ul className="clearfix">
									<li>
										<Link href="#">
											<i className="fab fa-facebook-f"></i>
										</Link>
									</li>
									<li>
										<Link href="#">
											<i className="fab fa-twitter"></i>
										</Link>
									</li>
									<li>
										<Link href="#">
											<i className="fab fa-youtube"></i>
										</Link>
									</li>
									<li>
										<Link href="#">
											<i className="fab fa-instagram"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="big-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
							<div className="row clearfix">
								<div className="footer-column col-lg-3 col-md-4 col-sm-12">
									<h6>Úteis </h6>
									<div className="links">
										<ul>
											<li>
												<Link href="#">Account</Link>
											</li>
											<li>
												<Link href="#">Privacy Policy</Link>
											</li>
											<li>
												<Link href="#">Afiliados</Link>
											</li>
											<li>
												<Link href="#">Eventos</Link>
											</li>
											<li>
												<Link href="#">Nossos Parceiros</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className="footer-column col-lg-3 col-md-4 col-sm-12">
									<h6>Menu</h6>
									<div className="links">
										<ul>
											<li>
												<Link href="#">Spobre Nós</Link>
											</li>
											<li>
												<Link href="#">Novidades</Link>
											</li>
											<li>
												<Link href="#">Blog</Link>
											</li>
											<li>
												<Link href="#">FAQs</Link>
											</li>
											<li>
												<Link href="#">Trabalhe Conosco</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className="info-block col-lg-6 col-md-4 col-sm-12">
									<h6>Address</h6>
									<div className="info">
										<ul>
											<li>
												Avenida Amílcar Cabral, Plateau - Praia
												<Link href="tel:+2382625610">+238 262 56 10</Link>
											</li>
											<li>
												Alto São Pedro, São Filipe - Fogo
												<Link href="tel:+2382813373">+238 281 33 73</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="f-bottom">
				<div className="auto-container">
					<div className="inner clearfix">
						<div className="copyright">
							Copyright &copy; 2025 ZebraTravel. Todos os direitos reservados.
							Desenvolvido pela{" "}
							<a href="https://terrasystem.cv" target="_blank">
								TerraSystem
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
