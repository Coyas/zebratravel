"use client";

import { useMemo, useState } from "react";
import { Tour } from "@/services/destinosService";
import DestinosCard from "@/components/destinos/destinosCard";
import FilterTabs from "@/components/destinos/FilterTabs";

const PAGE_SIZE = 6;

export default function DestinosGrid({ tours }: { tours: Tour[] }) {
	const [filter, setFilter] = useState("all");
	const [visible, setVisible] = useState(PAGE_SIZE);

	const categories = useMemo(
		() => Array.from(new Set(tours.flatMap((tour) => tour.category))),
		[tours]
	);

	const filtered = useMemo(
		() => (filter === "all" ? tours : tours.filter((tour) => tour.category.includes(filter))),
		[tours, filter]
	);

	const visibleTours = filtered.slice(0, visible);
	const hasMore = visible < filtered.length;

	const handleFilter = (value: string) => {
		setFilter(value);
		setVisible(PAGE_SIZE);
	};

	if (tours.length === 0) {
		return <p className="text-center">Ainda não há destinos disponíveis.</p>;
	}

	return (
		<>
			<FilterTabs categories={categories} active={filter} onFilter={handleFilter} />

			<div className="filter-list row clearfix">
				{visibleTours.map((tour) => (
					<DestinosCard key={tour.id} destino={tour} />
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
						<span>carregar mais......</span>
					</a>
				</div>
			)}
		</>
	);
}
