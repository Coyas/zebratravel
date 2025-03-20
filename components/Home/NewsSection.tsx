// src/app/components/NewsSection.tsx

"use client";

import React from "react";
import { newsItems } from "@/app/Dados/newsData"; // Importando os dados

const NewsSection: React.FC = () => {
	return (
		<section className="news-section">
			<div className="floated-icon left">
				<img src="/images/resource/stones-left.svg" alt="" title="" />
			</div>
			<div className="floated-icon right">
				<img src="/images/resource/stones-right.svg" alt="" title="" />
			</div>
			<div
				className="bg-layer"
				style={{ backgroundImage: "url(/images/background/image-1.jpg)" }}
			></div>
			<div className="auto-container">
				<div className="title-box centered">
					<div className="subtitle">ZebraTravel Top News</div>
					<h2>
						<i className="bg-vector"></i>
						<span>Ultimas Novidades</span>
					</h2>
				</div>
				<div className="content-box">
					<div className="row clearfix">
						{newsItems.map((item, index) => (
							<div
								key={index}
								className={`news-block-one col-xl-4 col-lg-6 col-md-6 col-sm-12 ${
									item.layout === "bottom" ? "alternate" : ""
								}`}
							>
								<div
									className={`inner-box wow fadeInLeft`}
									data-wow-delay="0ms"
									data-wow-duration="1500ms"
								>
									{item.layout === "top" ? (
										<>
											<div className="image-box">
												<div className="image">
													<a href={item.link}>
														<img
															src={item.image}
															alt={item.title}
															title={item.title}
														/>
													</a>
												</div>
												<div className="cat">
													<span>{item.category}</span>
												</div>
											</div>
											<div className="lower-content">
												<div className="info">
													<span className="i-block">By: {item.author}</span>{" "}
													&ensp; | &ensp;{" "}
													<span className="i-block">{item.date}</span>
												</div>
												<h4>
													<a href={item.link}>{item.title}</a>
												</h4>
												<div className="text">{item.description}</div>
											</div>
										</>
									) : (
										<>
											<div className="lower-content">
												<div className="info">
													<span className="i-block">By: {item.author}</span>{" "}
													&ensp; | &ensp;{" "}
													<span className="i-block">{item.date}</span>
												</div>
												<h4>
													<a href={item.link}>{item.title}</a>
												</h4>
												<div className="text">{item.description}</div>
											</div>
											<div className="image-box">
												<div className="image">
													<a href={item.link}>
														<img
															src={item.image}
															alt={item.title}
															title={item.title}
														/>
													</a>
												</div>
												<div className="cat">
													<span>{item.category}</span>
												</div>
											</div>
										</>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsSection;
