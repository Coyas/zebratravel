"use client";

// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="main-footer">
			{/* Camada de fundo */}
			<div
				className="bg-layer"
				style={{ backgroundImage: "url(/images/background/f-bottom-bg.svg)" }}
			></div>

			{/* Ícone flutuante */}
			<div className="floated-icon">
				<Image
					src="/images/resource/footer-stones.svg"
					alt="Footer Stones"
					width={100}
					height={100}
				/>
			</div>

			{/* Seção de informações */}
			<div className="info-section">
				<div className="auto-container">
					<div className="row clearfix">
						<div className="footer-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
							{/* Logo */}
							<div className="footer-logo">
								<Link href="/" title="Treker">
									<Image
										src="/images/logo.svg"
										alt="Treker Logo"
										width={150}
										height={40}
									/>
								</Link>
							</div>
							<div className="footer-text">
								zebra foi fundada em ???? por um grupo de profissionais focados
								em ????? que criaram o ?? ?????? para rigorosamente avaliar
								operadores de charter aéreo.
							</div>
						</div>

						{/* Contato */}
						<div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
							<div className="row clearfix">
								<div className="info-block col-lg-4 col-md-4 col-sm-12">
									<h6>Santiago</h6>
									<div className="info">
										<ul>
											<li>Avenida Amílcar Cabral Praia - Plateau, Praia</li>
											<li>
												<a href="tel:+2382625610">+238 262 56 10</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="info-block col-lg-4 col-md-4 col-sm-12">
									<h6>Fogo</h6>
									<div className="info">
										<ul>
											<li>Alto Sâo Pedro, São Filipe</li>
											<li>
												<a href="tel:+2382813373">+238 281 33 73</a>
											</li>
											<li>
												<hr />
											</li>
											<li>Mosteiros, fogo</li>
											<li>
												<a href="tel:+2382832190">+238 283 21 90</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="info-block col-lg-4 col-md-4 col-sm-12">
									<h6>Brava</h6>
									<div className="info">
										<ul>
											<li>Rua Padre Pio - Nova Sintra</li>
											<li>
												<a href="tel:+2385981981">+238 598 19 81</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Seção inferior */}
			<div className="lower-section">
				<div className="auto-container">
					<div className="content-box">
						<div className="row clearfix">
							<div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
								<div className="row clearfix">
									<div className="footer-column col-lg-4 col-md-4 col-sm-12">
										<h6>Sobre nós</h6>
										<div className="links">
											<ul>
												<li>
													<Link href="#">Sobre Nós</Link>
												</li>
												<li>
													<Link href="#">Blog da Comunidade</Link>
												</li>
												<li>
													<Link href="#">Recompensas</Link>
												</li>
												<li>
													<Link href="#">Trabalhe Conosco</Link>
												</li>
												<li>
													<Link href="#">Contato</Link>
												</li>
											</ul>
										</div>
									</div>

									<div className="footer-column col-lg-4 col-md-4 col-sm-12">
										<h6>Links Úteis</h6>
										<div className="links">
											<ul>
												<li>
													<Link href="#">Conta</Link>
												</li>
												<li>
													<Link href="#">Política de Privacidade</Link>
												</li>
												<li>
													<Link href="#">Programa de Afiliados</Link>
												</li>
												<li>
													<Link href="#">Nosso Parceiro</Link>
												</li>
											</ul>
										</div>
									</div>

									<div className="footer-column col-lg-4 col-md-4 col-sm-12">
										<h6>Acesso Rápidos</h6>
										<div className="links">
											<ul>
												<li>
													<Link href="#">Sobre nós</Link>
												</li>
												<li>
													<Link href="#">Notícias & Press</Link>
												</li>
												<li>
													<Link href="#">Blog</Link>
												</li>
												<li>
													<Link href="#">FAQs</Link>
												</li>
												<li>
													<Link href="#">Carreiras</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							{/* Galeria de imagens */}
							<div className="footer-column col-xl-4 col-lg-6 col-md-8 col-sm-12">
								<h6>Galeria</h6>
								<div className="footer-gallery">
									<div className="inner clearfix">
										<div className="image-block">
											<div className="image">
												<a
													href="/images/resource/footer-thumb-1.jpg"
													className="lightbox-image"
												>
													<Image
														src="/images/resource/footer-thumb-1.jpg"
														alt="Imagem do Rodapé 1"
														width={80}
														height={80}
													/>
												</a>
											</div>
										</div>
										{/* Adicione as outras imagens aqui */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Rodapé Inferior */}
			<div className="f-bottom">
				<div className="auto-container">
					<div className="inner clearfix">
						<div className="social-links">
							<ul className="clearfix">
								<li>
									<a href="#">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-youtube"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
						<div className="copyright">
							Copyright &copy; 2025 ZebraTravel. Todos os direitos reservados.
							Desenvolvido por{" "}
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
