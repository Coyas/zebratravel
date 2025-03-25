import PostCard from "@/components/posts/PostCard";
import { posts } from "@/app/Dados/postsData";

const PostGrid = () => {
	return (
		<div className="blog-grid">
			<div className="row clearfix">
				{posts.map((post) => (
					<PostCard key={post.id} {...post} />
				))}
			</div>

			{/* Paginação */}
			<ul className="styled-pagination">
				<li className="prev">
					<a href="#">Prev</a>
				</li>
				<li>
					<a href="#" className="active">
						01
					</a>
				</li>
				<li>
					<a href="#">02</a>
				</li>
				<li>
					<a href="#">03</a>
				</li>
				<li className="next">
					<a href="#">Next</a>
				</li>
			</ul>
		</div>
	);
};

export default PostGrid;
