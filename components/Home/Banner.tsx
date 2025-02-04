"use client";

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
	return (
		<section className="banner-section">
			<div className="banner-container">
				<div className="banner-slider-box">
					<div className="slide-item">
						<div className="auto-container">
							<div className="content-box">
								<div className="content">
									<div className="clearfix">
										<div className="inner">
											<div className="bg-image">
												<Image
													src="/images/main-slider/banner-bg-text.svg"
													alt="Banner Background"
													title="ZebraTravel"
													width={1200}
													height={800}
												/>
											</div>
											<h2>Nunca Para de</h2>
											<h1>
												<span>Explorar</span>
											</h1>
											<div className="text">
												A ZebraTravel oferece uma experiência única em turismo e
												viagens na Ilha do Fogo. Explore nossa agência de
												turismo, a pousada Colonial House, excurções e muito
												mais. Conecte-se com a beleza e a cultura local!
											</div>
											<div className="links-box clearfix">
												<div className="link">
													<Link
														href="/tours"
														className="theme-btn btn-style-one"
													>
														<span>
															Ver todos os passeios
															<i className="icon">
																<Image
																	src="/images/icons/logo-icon.svg"
																	alt="Logo Icon"
																	title="Logo"
																	width={20}
																	height={20}
																/>
															</i>
														</span>
													</Link>
												</div>
												<div className="link">
													<Link href="#" className="theme-btn lightbox-image">
														<i className="ripple"></i>
														<span className="icon">
															<Image
																src="/images/icons/video-icon-1.svg"
																alt="Video Icon"
																title="Video"
																width={20}
																height={20}
															/>
														</span>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="banner-image">
									<div className="image">
										<Image
											src="/images/main-slider/banner-image-1.svg"
											alt="Banner Image"
											title="Explore Fogo"
											width={1200}
											height={800}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
