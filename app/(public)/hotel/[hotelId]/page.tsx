import { notFound } from "next/navigation";
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import { hotelService } from "@/services/hotelService";
import RoomSearchForm from "@/components/hotel/RoomSearchForm";
import RoomRow from "@/components/hotel/RoomRow";

export default async function HotelDetailPage({
	params,
	searchParams,
}: {
	params: Promise<{ hotelId: string }>;
	searchParams: Promise<{ checkIn?: string; checkOut?: string; guests?: string }>;
}) {
	const { hotelId } = await params;
	const { checkIn, checkOut, guests } = await searchParams;
	const id = Number(hotelId);
	if (Number.isNaN(id)) notFound();

	let hotel;
	try {
		hotel = await hotelService.getHotel(id);
	} catch {
		notFound();
	}

	const rooms = await hotelService.getHotelRooms(id);

	let availableRoomIds: Set<number> | null = null;
	if (checkIn && checkOut) {
		const available = await hotelService.getAvailability(id, checkIn, checkOut);
		availableRoomIds = new Set(available.map((r) => r.roomId));
	}

	return (
		<>
			<InerBanner backgroundImage={hotel.image || bgImage.src} title={hotel.name} />
			<section className="dest-section">
				<div className="auto-container">
					{hotel.city && (
						<div style={{ color: "#888", marginBottom: 12 }}>
							<i className="icon far fa-map-marker-alt"></i> {hotel.address ? `${hotel.address}, ` : ""}
							{hotel.city}
						</div>
					)}
					{hotel.description && <p style={{ marginBottom: 25 }}>{hotel.description}</p>}

					<RoomSearchForm checkIn={checkIn} checkOut={checkOut} guests={guests} />

					<div style={{ marginTop: 25 }}>
						{rooms.map((room) => (
							<RoomRow
								key={room.id}
								room={room}
								hotelId={id}
								available={availableRoomIds ? availableRoomIds.has(room.id) : null}
								checkIn={checkIn}
								checkOut={checkOut}
								guests={guests}
							/>
						))}
						{rooms.length === 0 && <p>Ainda não há quartos configurados para este hotel.</p>}
					</div>
				</div>
			</section>
		</>
	);
}
