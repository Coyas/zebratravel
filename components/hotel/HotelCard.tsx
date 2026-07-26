"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Hotel } from "@/services/hotelService";

export default function HotelCard({ hotel, reverse }: { hotel: Hotel; reverse?: boolean }) {
	const { t } = useLanguage();

	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				flexDirection: reverse ? "row-reverse" : "row",
				alignItems: "center",
				marginBottom: 40,
			}}
		>
			<div
				style={{
					flex: "1 1 420px",
					minHeight: 320,
					height: 320,
					backgroundImage: `url(${hotel.image || "/images/resource/stones-left.svg"})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					borderRadius: 6,
				}}
			/>

			<div style={{ flex: "1 1 420px", padding: "20px 40px" }}>
				{hotel.city && (
					<div style={{ color: "#888", marginBottom: 10 }}>
						<i className="icon far fa-map-marker-alt"></i> {hotel.address ? `${hotel.address}, ` : ""}
						{hotel.city}
					</div>
				)}
				<h3 style={{ marginBottom: 15 }}>{hotel.name}</h3>
				{hotel.description && <p style={{ marginBottom: 20 }}>{hotel.description}</p>}
				<Link href={`/hotel/${hotel.id}`} className="theme-btn btn-style-one">
					<span>
						{t("common.verDetalhes")}{" "}
						<i className="icon">
							<img src="/images/icons/logo-icon.svg" alt="logo" />
						</i>
					</span>
				</Link>
			</div>
		</div>
	);
}
