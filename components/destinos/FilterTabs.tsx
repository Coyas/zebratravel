// src/components/destinos/FilterTabs.tsx

import React from "react";

interface FilterTabsProps {
	categories: string[];
	active: string;
	onFilter: (filter: string) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ categories, active, onFilter }) => {
	return (
		<div className="gallery-filters centered clearfix">
			<ul className="filter-tabs filter-btns clearfix">
				<li
					className={active === "all" ? "active filter" : "filter"}
					data-role="button"
					data-filter="all"
					onClick={() => onFilter("all")}
				>
					All
				</li>
				{categories.map((category) => (
					<li
						key={category}
						className={active === category ? "active filter" : "filter"}
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
