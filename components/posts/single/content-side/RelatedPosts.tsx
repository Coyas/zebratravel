import { posts } from "@/app/Dados/postsData";

const RelatedPosts = () => {
	return (
		<>
			<div className="carousel-box">
				<h5>Top Posts Relacionados</h5>
				<div className="related-blog-carousel owl-carousel owl-theme">
					{/* <!-- Slide --> */}
					{posts.map((value, index) => (
						<div key={index} className="slide">
							<div className="row clearfix">
								{/* <!-- Image Column --> */}
								<div className="image-column col-xl-6 col-lg-12 col-md-6 col-sm-12">
									<div className="image">
										<img src={value.image} alt="" />
									</div>
								</div>
								{/* <!-- Content Column --> */}
								<div className="content-column col-xl-6 col-lg-12 col-md-6 col-sm-12">
									<div className="inner-column">
										<div className="info">
											<span className="i-block">Por : {value.author}</span>{" "}
											&ensp; | &ensp;{" "}
											<span className="i-block">{value.date}</span>
										</div>
										<h4>
											<a href="blog-single.html">{value.title}</a>
										</h4>
										<div className="text">{value.description}</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default RelatedPosts;

// {
// 	/* <!-- Slide --> */
// }
// <div className="slide">
// 	<div className="row clearfix">
// 		{/* <!-- Image Column --> */}
// 		<div className="image-column col-xl-6 col-lg-12 col-md-6 col-sm-12">
// 			<div className="image">
// 				<img src="/images/resource/news-7.jpg" alt="" />
// 			</div>
// 		</div>
// 		{/* <!-- Content Column --> */}
// 		<div className="content-column col-xl-6 col-lg-12 col-md-6 col-sm-12">
// 			<div className="inner-column">
// 				<div className="info">
// 					<span className="i-block">By : Sword Joy</span> &ensp; | &ensp;{" "}
// 					<span className="i-block">20 March 2022</span>
// 				</div>
// 				<h4>
// 					<a href="blog-single.html">
// 						THE BEST BOXERS IN THEIR WEIGH Target CATEGOR
// 					</a>
// 				</h4>
// 				<div className="text">
// 					Fight School has specialized in martial arts since 1986 and has one of
// 					the most innovative
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>;

// {
// 	/* <!-- Slide --> */
// }
// <div className="slide">
// 	<div className="row clearfix">
// 		{/* <!-- Image Column --> */}
// 		<div className="image-column col-xl-6 col-lg-12 col-md-6 col-sm-12">
// 			<div className="image">
// 				<img src="/images/resource/news-7.jpg" alt="" />
// 			</div>
// 		</div>
// 		{/* <!-- Content Column --> */}
// 		<div className="content-column col-xl-6 col-lg-12 col-md-6 col-sm-12">
// 			<div className="inner-column">
// 				<div className="info">
// 					<span className="i-block">By : Sword Joy</span> &ensp; | &ensp;{" "}
// 					<span className="i-block">20 March 2022</span>
// 				</div>
// 				<h4>
// 					<a href="blog-single.html">
// 						THE BEST BOXERS IN THEIR WEIGH Target CATEGOR
// 					</a>
// 				</h4>
// 				<div className="text">
// 					Fight School has specialized in martial arts since 1986 and has one of
// 					the most innovative
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>;

// {/* <!-- Slide --> */}
// <div className="slide">
// <div className="row clearfix">
// 	{/* <!-- Image Column --> */}
// 	<div className="image-column col-xl-6 col-lg-12 col-md-6 col-sm-12">
// 		<div className="image">
// 			<img src="/images/resource/news-7.jpg" alt="" />
// 		</div>
// 	</div>
// 	{/* <!-- Content Column --> */}
// 	<div className="content-column col-xl-6 col-lg-12 col-md-6 col-sm-12">
// 		<div className="inner-column">
// 			<div className="info">
// 				<span className="i-block">By : Sword Joy</span> &ensp; |
// 				&ensp; <span className="i-block">20 March 2022</span>
// 			</div>
// 			<h4>
// 				<a href="blog-single.html">
// 					THE BEST BOXERS IN THEIR WEIGH Target CATEGOR
// 				</a>
// 			</h4>
// 			<div className="text">
// 				Fight School has specialized in martial arts since 1986 and
// 				has one of the most innovative
// 			</div>
// 		</div>
// 	</div>
// </div>
// </div>
