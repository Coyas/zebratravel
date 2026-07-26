// src/app/components/NewsSection.tsx

"use client";

import React from "react";
import { newsItems } from "@/app/Dados/newsData"; // Importando os dados
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

interface NewsItemContent {
	category: Localized | string;
	date: string;
	author: string;
	image: string;
	layout: "top" | "bottom";
	title: Localized | string;
	description: Localized | string;
	link?: string;
}

interface NewsSectionProps {
	content?: { subtitle: Localized; title: Localized; items?: NewsItemContent[] };
}

const NewsSection: React.FC<NewsSectionProps> = ({ content }) => {
	const { locale } = useLanguage();
	const data = content
		? { subtitle: pickLocale(content.subtitle, locale), title: pickLocale(content.title, locale) }
		: { subtitle: "ZebraTravel Top News", title: "Ultimas Novidades" };
	const items = content?.items ?? newsItems;

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
					<div className="subtitle">{data.subtitle}</div>
					<h2>
						<i className="bg-vector"></i>
						<span>{data.title}</span>
					</h2>
				</div>
				<div className="content-box">
					<div className="row clearfix">
						{items.map((item, index) => {
							const title = pickLocale(item.title, locale);
							const category = pickLocale(item.category, locale);
							const description = pickLocale(item.description, locale);
							const link = item.link ?? "#";
							return (
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
													<a href={link}>
														<img
															src={item.image}
															alt={title}
															title={title}
														/>
													</a>
												</div>
												<div className="cat">
													<span>{category}</span>
												</div>
											</div>
											<div className="lower-content">
												<div className="info">
													<span className="i-block">By: {item.author}</span>{" "}
													&ensp; | &ensp;{" "}
													<span className="i-block">{item.date}</span>
												</div>
												<h4>
													<a href={link}>{title}</a>
												</h4>
												<div className="text">{description}</div>
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
													<a href={link}>{title}</a>
												</h4>
												<div className="text">{description}</div>
											</div>
											<div className="image-box">
												<div className="image">
													<a href={link}>
														<img
															src={item.image}
															alt={title}
															title={title}
														/>
													</a>
												</div>
												<div className="cat">
													<span>{category}</span>
												</div>
											</div>
										</>
									)}
								</div>
							</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsSection;
