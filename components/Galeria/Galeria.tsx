"use client";

import React, { useMemo, useState } from "react";
import { galleryItems } from "@/app/Dados/gallery";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

const PAGE_SIZE = 9;

interface GaleriaProps {
	content?: { title: Localized; text: Localized };
}

const Galeria = ({ content }: GaleriaProps) => {
	const { locale, t } = useLanguage();
	const data = content
		? { title: pickLocale(content.title, locale), text: pickLocale(content.text, locale) }
		: { title: "Veja Nossa Galeria Mais Recente", text: "Explorando o mundo com conforto" };
	const [filter, setFilter] = useState("all");
	const [visible, setVisible] = useState(PAGE_SIZE);

	const filtered = useMemo(
		() => (filter === "all" ? galleryItems : galleryItems.filter((item) => item.filter === filter)),
		[filter]
	);
	const visibleItems = filtered.slice(0, visible);
	const hasMore = visible < filtered.length;

	const handleFilter = (value: string) => {
		setFilter(value);
		setVisible(PAGE_SIZE);
	};

	return (
		<section className="gallery-section">
			<div className="floated-icon">
				<img src="/images/resource/floated-icon-right-2.svg" alt="" />
			</div>
			<div className="auto-container">
				<div className="title-box centered">
					<h2>
						<span>{data.title}</span>
					</h2>
					<div className="text">{data.text}</div>
				</div>
			</div>

			{/* MixitUp Gallery */}
			<div className="mixitup-gallery">
				<div className="auto-container">
					{/* Filter */}
					<div className="gallery-filters centered clearfix">
						<ul className="filter-tabs filter-btns clearfix">
							<li
								className={filter === "all" ? "active filter" : "filter"}
								data-role="button"
								data-filter="all"
								onClick={() => handleFilter("all")}
							>
								{t("gallery.all")}
							</li>
							<li
								className={filter === "activity" ? "active filter" : "filter"}
								data-role="button"
								data-filter=".activity"
								onClick={() => handleFilter("activity")}
							>
								{t("gallery.activities")}
							</li>
							<li
								className={filter === "destination" ? "active filter" : "filter"}
								data-role="button"
								data-filter=".destination"
								onClick={() => handleFilter("destination")}
							>
								{t("gallery.destinations")}
							</li>
							<li
								className={filter === "tours" ? "active filter" : "filter"}
								data-role="button"
								data-filter=".tours"
								onClick={() => handleFilter("tours")}
							>
								{t("gallery.tours")}
							</li>
						</ul>
					</div>
				</div>

				<div className="outer-container">
					<div className="filter-list row clearfix">
						{visibleItems.map((item, index) => (
							<div
								key={index}
								className={`gallery-block mix ${item.filter} col-xl-4 col-lg-4 col-md-6 col-sm-12`}
							>
								<div className="inner-box">
									<div className="image-box">
										<div className="image">
											<img src={item.imgSrc} alt="" />
										</div>
									</div>
									<a
										href={item.imgSrc}
										className="lightbox-image zoom-btn"
										data-fancybox="gallery"
									>
										<span className="icon">
											<img src="/images/icons/zoom-icon.svg" alt="" />
										</span>
									</a>
								</div>
							</div>
						))}
					</div>

					{hasMore && (
						<div className="load-more">
							<a
								href="#"
								className="theme-btn btn-style-one"
								onClick={(e) => {
									e.preventDefault();
									setVisible((v) => v + PAGE_SIZE);
								}}
							>
								<span>{t("common.carregarMais")}</span>
							</a>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Galeria;
