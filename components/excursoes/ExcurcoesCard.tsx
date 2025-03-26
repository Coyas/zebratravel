import React from "react";

interface ExcursoesCardProps {
	title: string;
	image: string;
	price: number;
	duration: string;
	location: string;
	rating: number;
	reviews: number;
	description: string;
	categories: string[];
}

const ExcursoesCard: React.FC<ExcursoesCardProps> = ({
	title,
	image,
	price,
	duration,
	location,
	rating,
	reviews,
	description,
	categories,
}) => {
	// Gera a string de classes CSS com base nas categorias
	const categoryClasses = categories.join(" ");

	return (
		<div
			className={`trek-block-one style-two mix all col-xl-4 col-lg-6 col-md-6 col-sm-12 ${categoryClasses}`}
		>
			<div className="inner-box">
				<div className="image-box">
					<div className="image">
						<a href="#">
							<img src={image} alt={title} title={title} />
						</a>
					</div>
					<div className="price">
						<span>${price}</span>
					</div>
					<div className="info">
						<span className="i-block">
							<i className="icon far fa-clock"></i> {duration}
						</span>{" "}
						&ensp; | &ensp; <span className="i-block">{location}</span>
					</div>
				</div>
				<div className="lower-content">
					<h4>
						<a href="#">{title}</a>
					</h4>
					<div className="ratings clearfix">
						<div className="stars">
							{[...Array(5)].map((_, i) => (
								<i
									key={i}
									className={`fa fa-star ${i < rating ? "" : "empty"}`}
								></i>
							))}
						</div>
						<div className="rev">
							<a href="#">
								{reviews} Review{reviews > 1 ? "s" : ""}
							</a>
						</div>
					</div>
					<div className="text">{description}</div>
				</div>
				<div className="bottom-box clearfix">
					<div className="more-link">
						<a href="#" className="theme-btn">
							<span>
								Ver Detalhes{" "}
								<i className="icon">
									<img src="/images/icons/logo-icon.svg" alt="logo" />
								</i>
							</span>
						</a>
					</div>
					<div className="video-link">
						<a href="#" className="theme-btn">
							<i className="icon far fa-video-camera"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExcursoesCard;
