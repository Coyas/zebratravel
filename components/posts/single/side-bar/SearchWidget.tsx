"use client";

import { useState } from "react";

const SearchWidget = () => {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div className="sidebar-widget search-box">
			<div className="sidebar-title">
				<h5>Pesquisar</h5>
			</div>

			<form method="post" action="contact.html">
				<div className="form-group">
					<input
						type="search"
						name="search-field"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder="Search Here ..."
						required
					/>
					<button type="submit">
						<span className="icon fa fa-search"></span>
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchWidget;
