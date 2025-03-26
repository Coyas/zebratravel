import bgImage from "@/public/images/background/banner-image-1.jpg";
import InerBanner from "@/components/InerBanner";

import ExcursoesCard from "@/components/excursoes/ExcurcoesCard";
import excursoesData from "@/app/Dados/excurcoesData";

const Excurcoes = () => {
	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />

			{/* <!--Trekking Section--> */}
			<section className="trekking-section">
				<div className="floated-icon left">
					<img src="/images/resource/hills-image-2.svg" alt="" title="" />
				</div>
				<div className="floated-icon right">
					<img src="/images/resource/stones-right.svg" alt="" title="" />
				</div>
				<div className="floated-icon right-2">
					<img
						src="/images/resource/floated-icon-right-2.svg"
						alt=""
						title=""
					/>
				</div>
				<div className="auto-container">
					<div className="title-box centered">
						<h2>
							<span>Melhores trilhas para você com a ZebraTravel</span>
						</h2>
						<div className="text">
							Descubra as trilhas mais incríveis com a ZebraTravel! Conecte-se
							com a natureza, explore paisagens deslumbrantes e viva aventuras
							inesquecíveis, seja em uma caminhada de um dia ou em uma expedição
							prolongada.
						</div>
					</div>
					{/* <!--MixitUp Galery--> */}
					<div className="mixitup-gallery">
						{/* <!--Filter--> */}
						<div className="gallery-filters centered clearfix">
							<ul className="filter-tabs filter-btns clearfix">
								<li
									className="active filter"
									data-role="button"
									data-filter="all"
								>
									Todos
								</li>
								<li className="filter" data-role="button" data-filter=".easy-m">
									Fácil Moderado
								</li>
								<li
									className="filter"
									data-role="button"
									data-filter=".moderate"
								>
									Moderado
								</li>
								<li
									className="filter"
									data-role="button"
									data-filter=".m-difficult"
								>
									Moderado dificel
								</li>
								<li
									className="filter"
									data-role="button"
									data-filter=".difficult"
								>
									Dificel
								</li>
							</ul>
						</div>
						<div className="filter-list row clearfix">
							{/* <!--Block--> */}
							{excursoesData.map((excursao) => (
								<ExcursoesCard key={excursao.title} {...excursao} />
							))}
						</div>

						<div className="load-more">
							<a href="#" className="theme-btn btn-style-one">
								<span>Carregar mais......</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Excurcoes;
