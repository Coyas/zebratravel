"use client";

import { useMemo, useState } from "react";
import { Excursao } from "@/services/excursoesService";
import ExcursoesCard from "@/components/excursoes/ExcurcoesCard";

const PAGE_SIZE = 6;

export default function ExcursoesGrid({ excursoes }: { excursoes: Excursao[] }) {
	const [filter, setFilter] = useState("all");
	const [visible, setVisible] = useState(PAGE_SIZE);

	const categories = useMemo(
		() => Array.from(new Set(excursoes.flatMap((e) => e.categories))),
		[excursoes]
	);

	const filtered = useMemo(
		() => (filter === "all" ? excursoes : excursoes.filter((e) => e.categories.includes(filter))),
		[excursoes, filter]
	);

	const visibleItems = filtered.slice(0, visible);
	const hasMore = visible < filtered.length;

	const handleFilter = (value: string) => {
		setFilter(value);
		setVisible(PAGE_SIZE);
	};

	if (excursoes.length === 0) {
		return <p className="text-center">Ainda não há excursões disponíveis.</p>;
	}

	return (
		<>
			<div className="gallery-filters centered clearfix">
				<ul className="filter-tabs filter-btns clearfix">
					<li
						className={filter === "all" ? "active filter" : "filter"}
						data-role="button"
						data-filter="all"
						onClick={() => handleFilter("all")}
					>
						Todos
					</li>
					{categories.map((category) => (
						<li
							key={category}
							className={filter === category ? "active filter" : "filter"}
							data-role="button"
							data-filter={`.${category}`}
							onClick={() => handleFilter(category)}
						>
							{category}
						</li>
					))}
				</ul>
			</div>
			<div className="filter-list row clearfix">
				{visibleItems.map((excursao) => (
					<ExcursoesCard key={excursao.slug} {...excursao} />
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
						<span>Carregar mais......</span>
					</a>
				</div>
			)}
		</>
	);
}
