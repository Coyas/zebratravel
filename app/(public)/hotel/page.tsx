import InerBanner from "@/components/InerBanner";
import CampaignBanner from "@/components/CampaignBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import { hotelService } from "@/services/hotelService";
import { getAllContent } from "@/app/actions/content";
import HotelListHeader from "@/components/hotel/HotelListHeader";
import HotelCard from "@/components/hotel/HotelCard";
import { campaignService } from "@/services/campaignService";

export default async function HotelListPage() {
	const hotels = await hotelService.getHotels();
	const content = await getAllContent();
	const campaigns = await campaignService.getActive("HOTEL_TOP");

	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<CampaignBanner campaigns={campaigns} />
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
