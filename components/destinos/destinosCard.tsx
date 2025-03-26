// src/components/destinos/DestinosCard.tsx

import { Tour } from "@/app/Dados/tourData";

interface DestinosCardProps {
	destino: Tour;
}

const DestinosCard: React.FC<DestinosCardProps> = ({ destino }) => {
	return (
		<div
			className={`trend-block-one mix all ${destino.category.join(
				" "
			)} col-xl-4 col-lg-6 col-md-6 col-sm-12`}
		>
			<div className="inner-box">
				<div className="image-box">
					<div className="image">
						<a href="#">
							<img
								src={destino.image}
								alt={destino.title}
								title={destino.title}
							/>
						</a>
					</div>
				</div>
				<div className="count">
					<span>{destino.tours} Tours</span>
				</div>
				<div className="title clearfix">
					<h4>
						<a href="#">{destino.title}</a>
					</h4>
					<div className="more-link">
						<a href="#" className="theme-btn">
							<span className="far fa-long-arrow-right"></span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DestinosCard;
