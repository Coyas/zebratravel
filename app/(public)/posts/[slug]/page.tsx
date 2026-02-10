import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import PostDetails from "@/components/posts/single/PostDetails";
import Sidebar from "@/components/posts/single/Sidebar";
import { posts } from "@/app/Dados/postsData";
// import { Post } from "@/components/posts/single/PostDetails";

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;

	// Encontrar o primeiro post que corresponde ao slug
	const post = posts.find((post) => post.slug === slug);

	return (
		<>
			{/* Passando a URL da imagem diretamente */}
			<InerBanner backgroundImage={bgImage.src} />
			{/* <!-- Sidebar Page Container --> */}
			<section className="sidebar-page-container">
				<div className="auto-container">
					<div className="row clearfix">
						{/* <!-- Content Side --> */}
						{/* Passando apenas o objeto do primeiro post encontrado */}
						{post ? (
							<PostDetails posts={post} /> // Passa o objeto correspondente
						) : (
							<p>Post not found.</p> // Exibe mensagem caso não encontre o post
						)}

						{/* <!-- Sidebar Column --> */}
						<Sidebar />
					</div>
				</div>
			</section>
		</>
	);
};

export default PostPage;
