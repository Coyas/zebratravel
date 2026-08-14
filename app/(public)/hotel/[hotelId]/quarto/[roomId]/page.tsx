import { notFound } from "next/navigation";
import Link from "next/link";
import InerBanner from "@/components/InerBanner";
import { hotelService } from "@/services/hotelService";
import RoomGallery from "@/components/hotel/RoomGallery";
import AmenityList from "@/components/hotel/AmenityList";
import RoomBookingWidget from "@/components/hotel/RoomBookingWidget";
import RoomReviews from "@/components/hotel/RoomReviews";
import { roomLabel } from "@/lib/roomLabel";
import FavoriteButton from "@/components/FavoriteButton";

export default async function RoomDetailPage({
	params,
	searchParams,
}: {
	params: Promise<{ hotelId: string; roomId: string }>;
	searchParams: Promise<{ checkIn?: string; checkOut?: string; guests?: string }>;
}) {
	const { hotelId, roomId } = await params;
	const { checkIn, checkOut, guests } = await searchParams;
	const hId = Number(hotelId);
	const rId = Number(roomId);
	if (Number.isNaN(hId) || Number.isNaN(rId)) notFound();

	let room;
	try {
		room = await hotelService.getRoom(rId);
	} catch {
		notFound();
	}
	if (room.hotelId !== hId) notFound();

	const images = room.images.length > 0 ? room.images : room.roomTypeImage ? [room.roomTypeImage] : [];
	const title = roomLabel(room.roomNumber, room.roomTypeName);

	return (
		<>
			<InerBanner backgroundImage={images[0] || room.hotelImage || "/images/resource/stones-right.svg"} title={title} />
			<section className="dest-section">
				<div className="auto-container">
					<div style={{ marginBottom: 15, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<Link href={`/hotel/${hId}`} style={{ color: "#888" }}>
							&larr; {room.hotelName}
						</Link>
						<FavoriteButton
							itemType="ROOM"
							itemId={room.id}
							title={title}
							image={images[0]}
							price={room.basePrice}
							subtitle={room.hotelName}
							link={`/hotel/${hId}/quarto/${room.id}`}
						/>
					</div>

					<div className="row clearfix">
						<div className="col-lg-7 col-md-12 col-sm-12">
							<RoomGallery images={images} name={title} />

							<div style={{ color: "#888", marginBottom: 20 }}>{room.hotelName}</div>

							{room.roomTypeDescription && <p style={{ marginBottom: 25 }}>{room.roomTypeDescription}</p>}

							{room.amenities.length > 0 && (
								<div style={{ marginBottom: 20 }}>
									<AmenityList amenities={room.amenities} showTitle />
								</div>
							)}

							<RoomReviews roomId={room.id} />
						</div>

						<div className="col-lg-5 col-md-12 col-sm-12">
							<RoomBookingWidget hotelId={hId} room={room} initialCheckIn={checkIn} initialCheckOut={checkOut} initialGuests={guests} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
