// src/components/destinos/DestinosCard.tsx

import Link from "next/link";
import { Tour } from "@/services/destinosService";

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
						<Link href={`/destinos/${destino.id}`}>
							<img
								src={destino.image}
								alt={destino.title}
								title={destino.title}
							/>
						</Link>
					</div>
				</div>
				<div className="count">
					<span>{destino.tours} Tours</span>
				</div>
				<div className="title clearfix">
					<h4>
						<Link href={`/destinos/${destino.id}`}>{destino.title}</Link>
					</h4>
					<div className="more-link">
						<Link href={`/destinos/${destino.id}`} className="theme-btn">
							<span className="far fa-long-arrow-right"></span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DestinosCard;
