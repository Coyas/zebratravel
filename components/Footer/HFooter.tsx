import { footerData } from "@/app/Dados/footerData"; // Ajuste o caminho conforme necessário
import Image from "next/image";
import Link from "next/link";

const HFooter = () => {
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
										src={footerData.companyInfo.logoSrc}
										alt={footerData.companyInfo.logoAlt}
										width={150}
										height={40}
									/>
								</Link>
							</div>
							<div className="footer-text">{footerData.companyInfo.text}</div>
						</div>

						{/* Contato */}
						<div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
							<div className="row clearfix">
								{footerData.contacts.map((contact, index) => (
									<div
										key={index}
										className="info-block col-lg-4 col-md-4 col-sm-12"
									>
										<h6>{contact.location}</h6>
										<div className="info">
											<ul>
												<li>{contact.address}</li>
												<li>
													<a href={`tel:${contact.phone}`}>{contact.phone}</a>
												</li>
												{contact.additionalContacts &&
													contact.additionalContacts.map(
														(subContact, subIndex) => (
															<div key={subIndex}>
																<li>{subContact.address}</li>
																<li>
																	<a href={`tel:${subContact.phone}`}>
																		{subContact.phone}
																	</a>
																</li>
															</div>
														)
													)}
											</ul>
										</div>
									</div>
								))}
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
							{Object.keys(footerData.footerLinks).map((section, index) => (
								<div
									key={index}
									className="footer-column col-lg-4 col-md-4 col-sm-12"
								>
									<h6>
										{section === "aboutUs"
											? "Sobre nós"
											: section === "usefulLinks"
											? "Links Úteis"
											: "Acesso Rápidos"}
									</h6>
									<div className="links">
										<ul>
											{
												// @ts-expect-error
												footerData.footerLinks[section].map(
													(link: any, linkIndex: any) => (
														<li key={linkIndex}>
															<Link href={link.url}>{link.name}</Link>
														</li>
													)
												)
											}
										</ul>
									</div>
								</div>
							))}
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
								{footerData.socialLinks.map((social, index) => (
									<li key={index}>
										<a href={social.url} target="_blank">
											<i className={social.icon}></i>
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className="copyright">
							{footerData.copyright.text}{" "}
							<span>
								{footerData.copyright.developedBy.text}{" "}
								<a
									href={footerData.copyright.developedBy.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{footerData.copyright.developedBy.name}
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default HFooter;
