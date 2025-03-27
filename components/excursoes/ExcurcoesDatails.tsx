// PackageDetail.tsx
import React from "react";
import { excursoesData } from "@/app/Dados/excurcoesData"; // Adjust the path as necessary
type ExcurcoesDetailsProps = {
	slug: string;
};

const ExcurcoesDetails = async ({ slug }: ExcurcoesDetailsProps) => {
	const excursion = excursoesData.find((item) => item.slug === slug);

	if (!excursion) {
		return <div>Excursion not found!</div>; // Handle case when excursion is not found
	}

	return (
		<section className="package-detail-section">
			<div className="auto-container">
				{/* Upper Box */}
				<div className="upper-box">
					<div className="clearfix">
						<div className="pull-left">
							<h4>{excursion.title}</h4>
						</div>
						<div className="pull-right">
							<div className="price">
								${excursion.price}
								<span>/Person</span>
							</div>
						</div>
					</div>
				</div>

				{/* Package Info Box */}
				{/* <div className="package-info-box">
					<div className="inner-container d-flex justify-content-between align-items-center">
						<div className="package-info-block">
							<div className="inner-box">
								<div className="icon">
									<img src="images/icons/duration.svg" alt="" />
								</div>
								<strong>Duration</strong>
								{excursion.duration}
							</div>
						</div>
						<div className="package-info-block">
							<div className="inner-box">
								<div className="icon">
									<img src="images/icons/speedometer.svg" alt="" />
								</div>
								<strong>Difficulty</strong>
								{excursion.difficulty}
							</div>
						</div>
						<div className="package-info-block">
							<div className="inner-box">
								<div className="icon">
									<img src="images/icons/team-group.svg" alt="" />
								</div>
								<strong>Group Size</strong>
								{excursion.groupSize}
							</div>
						</div>
						<div className="package-info-block">
							<div className="inner-box">
								<div className="icon">
									<img src="images/icons/hill.svg" alt="" />
								</div>
								<strong>Height</strong>
								{excursion.height}
							</div>
						</div>
					</div>
				</div> */}

				{/* Rating Box */}
				<div className="rating-box">
					<div className="clearfix">
						<div className="pull-left">
							<div className="rating">
								(5 reviews) &nbsp;
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
						</div>
						<div className="pull-right">
							<ul className="post-info">
								<li>
									<span className="icon">
										<img src="images/icons/share-icon.svg" alt="" />
									</span>
									Share
								</li>
								<li>
									<span className="icon">
										<img src="images/icons/review-icon.svg" alt="" />
									</span>
									Review
								</li>
								<li>
									<span className="icon">
										<img src="images/icons/heart-icon-1.svg" alt="" />
									</span>
									Wishlist
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="row clearfix">
					<div className="content-column col-xl-8 col-lg-7 col-md-12 col-sm-12">
						<h5>About {excursion.title}</h5>
						<p>{excursion.description}</p>

						{/* <div className="feature-box">
							<h5>Features</h5>
							<ul className="feature-list">
								{excursion.facilities.map((facility, index) => (
									<li key={index}>{facility}</li>
								))}
							</ul>
						</div> */}

						{/* <div className="itinerary-box">
							<h5>Itinerary</h5>
							<div className="days-outer">
								{excursion.itinerary.map((day, index) => (
									<div className="day-box" key={index}>
										<div className="title">Day {index + 1}</div>
										<div className="day-text">{day}</div>
									</div>
								))}
							</div>
						</div> */}

						{/* <div className="gallery-box">
							<h5>Gallery</h5>
							<div className="single-item-carousel owl-carousel owl-theme">
								{excursion.gallery.map((image, index) => (
									<div className="slide" key={index}>
										<div className="image">
											<img src={image} alt="" />
										</div>
									</div>
								))}
							</div>
						</div> */}

						{/* Add additional content here as needed */}
					</div>

					{/* Sidebar Column */}
					<div className="sidebar-column col-xl-4 col-lg-5 col-md-12 col-sm-12">
						<div className="inner-column">
							{/* Booking Widget */}
							<div
								className="sidebar-widget booking-widget"
								style={{
									backgroundImage: `url(/images/background/booking-bg.jpg)`,
								}}
							>
								<h5>Book this Trek</h5>
								<div className="booking-form">
									<form method="post" action="sendemail.php" id="contact-form">
										<div className="form-group">
											<input
												type="text"
												name="username"
												placeholder="Full Name"
												required
											/>
											<span className="icon fal fa-user fa-fw"></span>
										</div>
										<div className="form-group">
											<input
												type="email"
												name="email"
												placeholder="Email"
												required
											/>
											<span className="icon fal fa-envelope fa-fw"></span>
										</div>
										<div className="form-group">
											<input
												type="text"
												name="phone"
												placeholder="Phone *"
												required
											/>
											<span className="icon fal fa-phone fa-fw"></span>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="datepicker"
												name="time"
												placeholder="DD - MM - YYYY"
												required
											/>
											<span className="icon fal fa-calendar fa-fw"></span>
										</div>
										<div className="form-group">
											<input
												type="text"
												name="time"
												placeholder="Guest"
												required
											/>
											<div className="item-quantity">
												<div className="quantity-spinner">
													<button type="button" className="minus">
														<span className="fa fa-minus"></span>
													</button>
													<input
														type="text"
														name="product"
														value="2"
														className="prod_qty"
														readOnly
													/>
													<button type="button" className="plus">
														<span className="fa fa-plus"></span>
													</button>
												</div>
											</div>
										</div>
										<div className="form-group">
											<button className="theme-btn send-btn">
												<span className="txt">
													Send Now <i className="fa fa-angle-right"></i>
												</span>
											</button>
										</div>
									</form>
								</div>
							</div>
							{/* Follow Widget */}
							<div className="sidebar-widget follow-widget">
								<div className="sidebar-title">
									<h5>Follow us</h5>
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
							{/* Category Widget */}
							<div className="sidebar-widget category-widget">
								<div className="sidebar-title">
									<h5>Category</h5>
								</div>
								<ul className="sidebar-category-list">
									<li
										style={{
											backgroundImage: `url(/images/background/category-1.jpg)`,
										}}
									>
										<span className="txt">Therapy</span>{" "}
										<span className="number">05</span>
									</li>
									<li
										style={{
											backgroundImage: `url(/images/background/category-2.jpg)`,
										}}
									>
										<span className="txt">Beauty Items</span>{" "}
										<span className="number">09</span>
									</li>
									<li
										style={{
											backgroundImage: `url(/images/background/category-3.jpg)`,
										}}
									>
										<span className="txt">Body Sliming</span>{" "}
										<span className="number">07</span>
									</li>
									<li
										style={{
											backgroundImage: `url(/images/background/category-4.jpg)`,
										}}
									>
										<span className="txt">Fashion Fitness</span>{" "}
										<span className="number">10</span>
									</li>
								</ul>
							</div>
							{/* Buy Treker Widget */}
							<div className="sidebar-widget buy-treker-widget">
								<div
									className="widget-content"
									style={{ backgroundImage: `url(/images/background/buy.jpg)` }}
								>
									<div className="logo">
										<a href="index.html">
											<img src="/images/icons/buy-treker.svg" alt="" />
										</a>
									</div>
									<div className="text">
										Awesome Trekking Travel <br /> Theme !
									</div>
									<a href="#" className="theme-btn buy-now">
										Buy Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExcurcoesDetails;
