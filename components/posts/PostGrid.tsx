import PostCard from "@/components/posts/PostCard";

interface Post {
	id: string;
	title: string;
	author: string;
	date: string;
	image: string;
	content: string; // Se necessário
	category: string; // Adicione estas propriedades
	description: string; // Adicione estas propriedades
	slug: string; // Adicione estas propriedades
}


const PostGrid = ({ posts }: { posts: Post[] }) => {
					
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
