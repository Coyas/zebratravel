const FollowWidget = () => {
	return (
		<>
			<div className="sidebar-widget follow-widget">
				<div className="sidebar-title">
					<h5>Siga-nos</h5>
				</div>
				<ul className="social-list">
					<li className="facebook">
						<span className="icon fab fa-facebook-f fa-fw"></span>{" "}
						<strong>1250M +</strong> Seguidores
					</li>
					<li className="twitter">
						<span className="icon fab fa-twitter fa-fw"></span>{" "}
						<strong>1250M +</strong> Seguidores
					</li>
					<li className="youtube">
						<span className="icon fab fa-youtube fa-fw"></span>{" "}
						<strong>1250M +</strong> Seguidores
					</li>
					<li className="linkedin">
						<span className="icon fab fa-linkedin-in fa-fw"></span>{" "}
						<strong>1250M +</strong> Seguidores
					</li>
				</ul>
			</div>
		</>
	);
};

export default FollowWidget;
