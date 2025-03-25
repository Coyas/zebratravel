import PostGrid from "@/components/posts/PostGrid";
import Sidebar from "@/components/posts/sidebar";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import InerBanner from "@/components/InerBanner";

const Posts = () => {
	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<section className="sidebar-page-container">
				<div className="auto-container">
					<div className="row clearfix">
						{/* Seção de Conteúdo */}
						<div className="content-side col-xl-8 col-lg-7 col-md-12 col-sm-12">
							<PostGrid />
						</div>

						{/* Barra Lateral */}
						<div className="sidebar-column col-xl-4 col-lg-5 col-md-12 col-sm-12">
							<Sidebar />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Posts;
