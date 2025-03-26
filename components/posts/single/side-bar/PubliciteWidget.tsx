const PubliciteWidget = () => {
	return (
		<>
			<div className="sidebar-widget buy-treker-widget">
				<div
					className="widget-content"
					style={{
						backgroundImage: "url('/images/background/buy.jpg')",
					}}
				>
					<div className="logo">
						<a href="index.html">
							<img src="/images/icons/buy-treker.svg" alt="" />
						</a>
					</div>
					<div className="text">
						Bilhetes a Preço Justo <br /> Zebratravel !
					</div>
					<a href="#" className="theme-btn buy-now">
						Compre Agora
					</a>
				</div>
			</div>
		</>
	);
};

export default PubliciteWidget;
