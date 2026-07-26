import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import { hotelService } from "@/services/hotelService";
import { getAllContent } from "@/app/actions/content";
import HotelListHeader from "@/components/hotel/HotelListHeader";
import HotelCard from "@/components/hotel/HotelCard";

export default async function HotelListPage() {
	const hotels = await hotelService.getHotels();
	const content = await getAllContent();

	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<section className="dest-section">
				<div className="auto-container">
					<HotelListHeader content={content?.hotelList} hasHotels={hotels.length > 0} />

					<div style={{ marginTop: 30 }}>
						{hotels.map((hotel, index) => (
							<HotelCard key={hotel.id} hotel={hotel} reverse={index % 2 === 1} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}
