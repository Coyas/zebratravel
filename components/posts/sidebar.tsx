const Sidebar = () => {
	return (
		<div className="inner-column">
			{/* Widget de Busca */}
			<div className="sidebar-widget search-box">
				<div className="sidebar-title">
					<h5>Pesquisar</h5>
				</div>
				<form method="post" action="contact.html">
					<div className="form-group">
						<input
							type="search"
							name="search-field"
							placeholder="Search Here ..."
							required
						/>
						<button type="submit">
							<span className="icon fa fa-search"></span>
						</button>
					</div>
				</form>
			</div>

			{/* Widget de Seguidores */}
			<div className="sidebar-widget follow-widget">
				<div className="sidebar-title">
					<h5>Siga-nos</h5>
				</div>
				<ul className="social-list">
					<li className="facebook">
						<span className="icon fab fa-facebook-f fa-fw"></span>{" "}
						<strong>1250M +</strong> Followers
					</li>
					<li className="twitter">
						<span className="icon fab fa-twitter fa-fw"></span>{" "}
						<strong>1250M +</strong> Followers
					</li>
					<li className="youtube">
						<span className="icon fab fa-youtube fa-fw"></span>{" "}
						<strong>1250M +</strong> Followers
					</li>
					<li className="linkedin">
						<span className="icon fab fa-linkedin-in fa-fw"></span>{" "}
						<strong>1250M +</strong> Followers
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
