// src/app/components/NewsSection.tsx

"use client";

import React from "react";
import { Post } from "@/services/postsService";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

interface NewsSectionProps {
	content?: { subtitle: Localized; title: Localized };
	posts: Post[];
}

const DATE_LOCALE: Record<string, string> = { pt: "pt-PT", en: "en-GB", fr: "fr-FR" };

const NewsSection: React.FC<NewsSectionProps> = ({ content, posts }) => {
	const { locale } = useLanguage();
	const data = content
		? { subtitle: pickLocale(content.subtitle, locale), title: pickLocale(content.title, locale) }
		: { subtitle: "ZebraTravel Top News", title: "Ultimas Novidades" };

	if (posts.length === 0) {
		return null;
	}

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
						{posts.map((post, index) => {
							const layout = index % 2 === 0 ? "top" : "bottom";
							const link = `/posts/${post.slug}`;
							const date = new Date(post.date).toLocaleDateString(DATE_LOCALE[locale] ?? "pt-PT", {
								day: "2-digit",
								month: "long",
								year: "numeric",
							});
							return (
								<div
									key={post.id}
									className={`news-block-one col-xl-4 col-lg-6 col-md-6 col-sm-12 ${
										layout === "bottom" ? "alternate" : ""
									}`}
								>
									<div
										className={`inner-box wow fadeInLeft`}
										data-wow-delay="0ms"
										data-wow-duration="1500ms"
									>
										{layout === "top" ? (
											<>
												<div className="image-box">
													<div className="image">
														<a href={link}>
															<img
																src={post.image}
																alt={post.title}
																title={post.title}
															/>
														</a>
													</div>
													<div className="cat">
														<span>{post.category}</span>
													</div>
												</div>
												<div className="lower-content">
													<div className="info">
														<span className="i-block">By: {post.author}</span>{" "}
														&ensp; | &ensp;{" "}
														<span className="i-block">{date}</span>
													</div>
													<h4>
														<a href={link}>{post.title}</a>
													</h4>
													<div className="text">{post.description}</div>
												</div>
											</>
										) : (
											<>
												<div className="lower-content">
													<div className="info">
														<span className="i-block">By: {post.author}</span>{" "}
														&ensp; | &ensp;{" "}
														<span className="i-block">{date}</span>
													</div>
													<h4>
														<a href={link}>{post.title}</a>
													</h4>
													<div className="text">{post.description}</div>
												</div>
												<div className="image-box">
													<div className="image">
														<a href={link}>
															<img
																src={post.image}
																alt={post.title}
																title={post.title}
															/>
														</a>
													</div>
													<div className="cat">
														<span>{post.category}</span>
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
