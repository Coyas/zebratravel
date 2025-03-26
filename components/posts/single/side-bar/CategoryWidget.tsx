const CategoryWidget = () => {
	return (
		<>
			<div className="sidebar-widget category-widget">
				<div className="sidebar-title">
					<h5>Category</h5>
				</div>
				<ul className="sidebar-category-list">
					<li
						style={{
							backgroundImage: "url('/images/background/category-1.jpg')",
						}}
					>
						<span className="txt">Promoções</span>{" "}
						<span className="number">05</span>
					</li>
					<li
						style={{
							backgroundImage: "url('/images/background/category-2.jpg')",
						}}
					>
						<span className="txt">Itens de Viajens</span>{" "}
						<span className="number">09</span>
					</li>
					<li
						style={{
							backgroundImage: "url('/images/background/category-3.jpg')",
						}}
					>
						<span className="txt">Vulcao do Fogo</span>{" "}
						<span className="number">07</span>
					</li>
					<li
						style={{
							backgroundImage: "url('/images/background/category-4.jpg')",
						}}
					>
						<span className="txt">Brava</span>{" "}
						<span className="number">10</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default CategoryWidget;
