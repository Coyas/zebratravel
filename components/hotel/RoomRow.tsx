"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { HotelRoomPublic } from "@/services/hotelService";
import AmenityList from "@/components/hotel/AmenityList";
import { roomLabel } from "@/lib/roomLabel";

interface RoomRowProps {
	room: HotelRoomPublic;
	hotelId: number;
	available: boolean | null; // null = no search performed yet
	checkIn?: string;
	checkOut?: string;
	guests?: string;
}

export default function RoomRow({ room, hotelId, available, checkIn, checkOut, guests }: RoomRowProps) {
	const { t } = useLanguage();

	const query = new URLSearchParams();
	if (checkIn) query.set("checkIn", checkIn);
	if (checkOut) query.set("checkOut", checkOut);
	if (guests) query.set("guests", guests);
	const href = `/hotel/${hotelId}/quarto/${room.id}${query.toString() ? `?${query.toString()}` : ""}`;
	const thumbnail = room.images[0] || room.roomTypeImage || "/images/resource/stones-right.svg";

	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				gap: 20,
				padding: 18,
				marginBottom: 18,
				border: "1px solid #eee",
				borderRadius: 8,
				opacity: available === false ? 0.55 : 1,
			}}
		>
			<div
				style={{
					width: 160,
					height: 120,
					flexShrink: 0,
					borderRadius: 6,
					backgroundImage: `url(${thumbnail})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>

			<div style={{ flex: 1, minWidth: 200 }}>
				<h4 style={{ marginBottom: 8 }}>
					<Link href={href}>{roomLabel(room.roomNumber, room.roomTypeName)}</Link>
				</h4>
				<div style={{ fontSize: 13, color: "#888", marginBottom: 10 }}>
					<i className="far fa-user"></i> {t("hotel.maxGuests")}: {room.capacity}
				</div>
				<AmenityList amenities={room.amenities} compact />
			</div>

			<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: 10, minWidth: 140 }}>
				<div style={{ textAlign: "right" }}>
					<strong style={{ fontSize: 20 }}>${room.basePrice.toFixed(2)}</strong>
					<div style={{ fontSize: 13, color: "#888" }}>/ {t("hotel.night")}</div>
				</div>
				<Link href={href} className="theme-btn btn-style-one">
					<span>{available === false ? t("hotel.noAvailability") : t("hotel.selectRoom")}</span>
				</Link>
			</div>
		</div>
	);
}
