import Comments from "./content-side/Comments";
import RelatedPosts from "./content-side/RelatedPosts";
import CommentsForm from "./content-side/CommentsForm";

const PostDetails = ({ posts }: any) => {
	return (
		<>
			<div className="content-side col-xl-8 col-lg-7 col-md-12 col-sm-12">
				<div className="blog-classic">
					{/* <!-- News Detail --> */}
					<div className="news-detail">
						<div className="inner-box">
							<div className="image-box">
								<div className="image">
									<img src="/images/resource/news-4.jpg" alt="" title="" />
								</div>
							</div>
							<div className="lower-content">
								<div className="post-detalis-data">
									<div className="info">
										<span className="i-block">Por : {posts.author}</span> &ensp;
										| &ensp; <span className="i-block">{posts.date}</span>
									</div>
									<article className="post-details-data">
										<h4>{posts.title}</h4>
										{posts.description}
									</article>
								</div>
								{/* <!-- Post Share Options--> */}
								<div className="post-share-options">
									<div className="tags">
										<span className="tag">Tags:</span>
										<a href="#">Fashion</a>
										<a href="#">Beauty</a>
									</div>
								</div>

								{/* <!-- Author Box --> */}
								<div className="blog-author-box">
									<div className="author-inner">
										<div className="thumb">
											<img src="/images/resource/author-1.jpg" alt="" />
										</div>
										<div className="name">Amena Green</div>
										<div className="text">
											A small river named Duden flows by their place and
											supplies it with the necessary regelialia. It is a
											paradisematic country.
										</div>
										<ul className="social-icons clearfix">
											<li>
												<a href="#">
													<span className="fab fa-facebook-f fa-fw"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="fab fa-twitter fa-fw"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="fab fa-youtube fa-fw"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="fab fa-instagram fa-fw"></span>
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- End Author Box --> */}

								{/* <!-- More Posts --> */}
								<div className="more-posts clearfix">
									<div className="pull-left">
										<a href="#">Post Anterior</a>
									</div>
									<span className="grid-icon fas fa-grid-2 fa-fw"></span>
									<div className="pull-right">
										<a href="#">proximo Post</a>
									</div>
								</div>
								{/* <!-- End More Posts --> */}

								{/* <!-- Carousel Box --> */}
								<RelatedPosts />
								{/* <!-- End Carousel Box --> */}

								{/* <!-- Comments Area --> */}
								<Comments />

								{/* <!-- Comment Form --> */}
								<CommentsForm />
								{/* <!--End Comment Form --> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PostDetails;
