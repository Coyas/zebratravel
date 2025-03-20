"use client";

import React from "react";
import Link from "next/link";
import { footerData } from "@/app/Dados/footerData"; // Importando o arquivo de dados

const Footer: React.FC = () => {
	return (
		<footer className="footer-two">
			{/* Camada de fundo */}
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
									<Link href="/" title="ZebraTravel">
										<img
											src={footerData.companyInfo.logoSrc}
											alt={footerData.companyInfo.logoAlt}
											title="ZebraTravel"
										/>
									</Link>
								</div>
							</div>
							<div className="footer-text">{footerData.companyInfo.text}</div>
							{/* Links de redes sociais */}
							<div className="social-links">
								<ul className="clearfix">
									{footerData.socialLinks.map((social, index) => (
										<li key={index}>
											<Link href={social.url} target="_blank">
												<i className={social.icon}></i>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Links e informações */}
						<div className="big-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
							<div className="row clearfix">
								{/* Links Úteis */}
								<div className="footer-column col-lg-3 col-md-4 col-sm-12">
									<h6>Úteis</h6>
									<div className="links">
										<ul>
											{footerData.footerLinks.usefulLinks.map((link, index) => (
												<li key={index}>
													<Link href={link.url}>{link.name}</Link>
												</li>
											))}
										</ul>
									</div>
								</div>

								{/* Menu */}
								<div className="footer-column col-lg-3 col-md-4 col-sm-12">
									<h6>Menu</h6>
									<div className="links">
										<ul>
											{footerData.footerLinks.aboutUs.map((link, index) => (
												<li key={index}>
													<Link href={link.url}>{link.name}</Link>
												</li>
											))}
										</ul>
									</div>
								</div>

								{/* Endereço */}
								<div className="info-block col-lg-6 col-md-4 col-sm-12">
									<h6>Address</h6>
									<div className="info">
										<ul>
											{footerData.contacts.map((contact, index) => (
												<li key={index}>
													{contact.address}
													<Link href={`tel:${contact.phone}`}>
														{contact.phone}
													</Link>
												</li>
											))}
										</ul>
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
						<div className="copyright">
							{footerData.copyright.text}
							Desenvolvido por{" "}
							<a href={footerData.copyright.developedBy.url} target="_blank">
								{footerData.copyright.developedBy.name}
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
