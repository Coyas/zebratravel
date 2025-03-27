import React from "react";

type ExcursoesCardProps = {
	image: string;
	price: string;
	duration: string;
	location: string;
	title: string;
	rating: number;
	reviews: number;
	description: string;
};

const ExcursoesCard: React.FC<ExcursoesCardProps> = () =>
	// 	{
	// 	image,
	// 	price,
	// 	duration,
	// 	location,
	// 	title,
	// 	rating,
	// 	reviews,
	// 	description,
	// }
	{
		return (
			<>
				<div className="trek-block-one">
					<div className="inner-box">
						<div className="image-box">
							<div className="image">
								<a href="#">
									<img src="/images/resource/f-image-2.jpg" alt="" title="" />
								</a>
							</div>
							<div className="price">
								<span>$120</span>
							</div>
							<div className="info">
								<span className="i-block">
									<i className="icon far fa-clock"></i> 5 days
								</span>{" "}
								&ensp; | &ensp;{" "}
								<span className="i-block">259P, Himalaya Ag</span>
							</div>
						</div>
						<div className="lower-content">
							<h4>
								<a href="#">Yellowstone & Mt Rushm</a>
							</h4>
							<div className="ratings clearfix">
								<div className="stars">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star empty"></i>
								</div>
								<div className="rev">
									<a href="#">05 Review</a>
								</div>
							</div>
							<div className="text">
								Richly varied landscapes, luxurious accommodation and a wide
								range of wild experiences await you.{" "}
							</div>
						</div>
						<div className="bottom-box clearfix">
							<div className="more-link">
								<a href="#" className="theme-btn">
									<span>
										View Details{" "}
										<i className="icon">
											<img src="images/icons/logo-icon.svg" alt="" />
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
			</>
		);
	};

export default ExcursoesCard;

// <div className="trek-block-one">
// 	{" "}
// 	{/* Classe original que você forneceu */}
// 	<div className="inner-box">
// 		<div className="image-box">
// 			<div className="image">
// 				<a href="#">
// 					<img src={image} alt={title} />
// 				</a>
// 			</div>
// 			<div className="price">
// 				<span>{price}</span>
// 			</div>
// 			<div className="info">
// 				<span className="i-block">
// 					<i className="icon far fa-clock"></i> {duration}
// 				</span>{" "}
// 				&ensp; | &ensp;
// 				<span className="i-block">{location}</span>
// 			</div>
// 		</div>
// 		<div className="lower-content">
// 			<h4>
// 				<a href="#">{title}</a>
// 			</h4>
// 			<div className="ratings clearfix">
// 				<div className="stars">
// 					{Array.from({ length: 5 }).map((_, i) => (
// 						<i
// 							key={i}
// 							className={`fa fa-star ${i < rating ? "" : "empty"}`}
// 						></i>
// 					))}
// 				</div>
// 				<div className="rev">
// 					<a href="#">{reviews} Review</a>
// 				</div>
// 			</div>
// 			<div className="text">{description}</div>
// 		</div>
// 		<div className="bottom-box clearfix">
// 			<div className="more-link">
// 				<a href="#" className="theme-btn">
// 					<span>
// 						View Details{" "}
// 						<i className="icon">
// 							<img src="images/icons/logo-icon.svg" alt="" />
// 						</i>
// 					</span>
// 				</a>
// 			</div>
// 			<div className="video-link">
// 				<a href="#" className="theme-btn">
// 					<i className="icon far fa-video-camera"></i>
// 				</a>
// 			</div>
// 		</div>
// 	</div>
// </div>
{
	/* <!--Block--> */
}
