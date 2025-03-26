import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import PostDetails from "@/components/posts/single/PostDetails";
import Sidebar from "@/components/posts/single/Sidebar";
import { posts } from "@/app/Dados/postsData";

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;

	return (
		<>
			{/* Passando a URL da imagem diretamente */}
			<InerBanner backgroundImage={bgImage.src} />
			{/* <!-- Sidebar Page Container --> */}
			<section className="sidebar-page-container">
				<div className="auto-container">
					<div className="row clearfix">
						{/* <!-- Content Side --> */}
						<p>{slug}</p>
						<PostDetails posts={posts} />

						{/* <!-- Sidebar Column --> */}
						<Sidebar />
					</div>
				</div>
			</section>
		</>
	);
};

export default PostPage;
