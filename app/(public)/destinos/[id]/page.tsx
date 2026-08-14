import { notFound } from "next/navigation";
import Link from "next/link";
import InerBanner from "@/components/InerBanner";
import { destinosService } from "@/services/destinosService";
import RoomGallery from "@/components/hotel/RoomGallery";
import TourBookingWidget from "@/components/destinos/TourBookingWidget";
import FavoriteButton from "@/components/FavoriteButton";

export default async function DestinoDetailPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const tourId = Number(id);
	if (Number.isNaN(tourId)) notFound();

	const tour = await destinosService.getById(tourId);
	if (!tour) notFound();

	const images = tour.images.length > 0 ? tour.images : tour.image ? [tour.image] : [];

	return (
		<>
			<InerBanner backgroundImage={images[0] || "/images/resource/stones-right.svg"} title={tour.title} />
			<section className="dest-section">
				<div className="auto-container">
					<div style={{ marginBottom: 15, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<Link href="/destinos" style={{ color: "#888" }}>
							&larr; Destinos
						</Link>
						<FavoriteButton itemType="TOUR" itemId={tour.id} title={tour.title} image={images[0]} price={tour.price} link={`/destinos/${tour.id}`} />
					</div>

					<div className="row clearfix">
						<div className="col-lg-7 col-md-12 col-sm-12">
							<RoomGallery images={images} name={tour.title} />

							<p style={{ marginBottom: 25 }}>{tour.description}</p>
						</div>

						<div className="col-lg-5 col-md-12 col-sm-12">
							<TourBookingWidget tourId={tour.id} title={tour.title} price={tour.price} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
