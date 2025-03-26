// src/components/destinos/FilterTabs.tsx

import React from "react";
import { tourData } from "@/app/Dados/tourData";

interface FilterTabsProps {
	onFilter: (filter: string) => void; // Função para lidar com a filtragem
}

const FilterTabs: React.FC<FilterTabsProps> = ({ onFilter }) => {
	// Extrai as categorias únicas dos dados de tours
	const categories = Array.from(
		new Set(tourData.flatMap((tour) => tour.category))
	);

	return (
		<div className="gallery-filters centered clearfix">
			<ul className="filter-tabs filter-btns clearfix">
				<li
					className="active filter"
					data-role="button"
					data-filter="all"
					onClick={() => onFilter("all")}
				>
					All
				</li>
				{categories.map((category) => (
					<li
						key={category}
						className="filter"
						data-role="button"
						data-filter={`.${category}`}
						onClick={() => onFilter(category)}
					>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default FilterTabs;
