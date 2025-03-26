import { posts } from "@/app/Dados/postsData";
import Link from "next/link";

const RecentPosts = () => {
	return (
		<>
			<div className="sidebar-widget popular-posts">
				<div className="sidebar-title">
					<h5>Posts Recentes</h5>
				</div>

				{posts.map((value, index) => (
					<article className="post" key={index}>
						<figure className="post-thumb">
							<img src={value.image} alt="" />
							<Link href={value.slug} className="overlay-box">
								<span className="icon fa fa-link"></span>
							</Link>
						</figure>
						<div className="text">
							<Link href={value.slug}>{value.title}</Link>
						</div>
						<div className="post-info">{value.date}</div>
					</article>
				))}

				{/* <article className="post">
					<figure className="post-thumb">
						<img src="/images/resource/post-thumb-1.jpg" alt="" />
						<a href="news-detail.html" className="overlay-box">
							<span className="icon fa fa-link"></span>
						</a>
					</figure>
					<div className="text">
						<a href="news-detail.html">
							the best beach hikes on the west coast
						</a>
					</div>
					<div className="post-info">20 March 2022</div>
				</article>

				<article className="post">
					<figure className="post-thumb">
						<img src="/images/resource/post-thumb-2.jpg" alt="" />
						<a href="news-detail.html" className="overlay-box">
							<span className="icon fa fa-link"></span>
						</a>
					</figure>
					<div className="text">
						<a href="news-detail.html">New: Freehand Template for the whole</a>
					</div>
					<div className="post-info">20 March 2022</div>
				</article>

				<article className="post">
					<figure className="post-thumb">
						<img src="/images/resource/post-thumb-3.jpg" alt="" />
						<a href="news-detail.html" className="overlay-box">
							<span className="icon fa fa-link"></span>
						</a>
					</figure>
					<div className="text">
						<a href="news-detail.html">
							Security isn’t just a techn logy problem it’s
						</a>
					</div>
					<div className="post-info">20 March 2022</div>
				</article> */}
			</div>
		</>
	);
};

export default RecentPosts;
