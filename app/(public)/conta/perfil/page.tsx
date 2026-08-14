"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import { getUser, isAuthenticated, logout, ClientUser } from "@/lib/clientAuth";
import { profileService, Booking } from "@/services/profileService";
import { hotelService, HotelReservation } from "@/services/hotelService";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { roomLabel } from "@/lib/roomLabel";
import { useFavorites, resetFavoritesCache } from "@/lib/useFavorites";
import GuestManager from "@/components/hotel/GuestManager";

const card: React.CSSProperties = {
	background: "#fff",
	borderRadius: 14,
	boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
	padding: 22,
};

function StatCard({ icon, label, value, href }: { icon: string; label: string; value: number; href?: string }) {
	const content = (
		<div style={{ ...card, display: "flex", alignItems: "center", gap: 16, transition: "transform .15s, box-shadow .15s" }}>
			<div
				style={{
					width: 52,
					height: 52,
					borderRadius: "50%",
					background: "linear-gradient(135deg, #ffcc00, #ff9900)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexShrink: 0,
				}}
			>
				<i className={`far ${icon}`} style={{ fontSize: 22, color: "#fff" }}></i>
			</div>
			<div>
				<div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1 }}>{value}</div>
				<div style={{ color: "#888", fontSize: 14 }}>{label}</div>
			</div>
		</div>
	);
	return href ? (
		<Link href={href} style={{ display: "block" }}>
			{content}
		</Link>
	) : (
		content
	);
}

function SectionTitle({ children }: { children: React.ReactNode }) {
	return <h4 style={{ marginBottom: 18, marginTop: 40 }}>{children}</h4>;
}

export default function PerfilPage() {
	const router = useRouter();
	const { t } = useLanguage();
	const hotelStatusLabel = (status: string) => {
		const key = `profile.status.${status}`;
		const label = t(key);
		return label === key ? status : label;
	};
	const [user, setUser] = useState<ClientUser | null>(null);
	const [bookings, setBookings] = useState<Booking[]>([]);
	const [hotelReservations, setHotelReservations] = useState<HotelReservation[]>([]);
	const [loading, setLoading] = useState(true);
	const [guestManagerReservationId, setGuestManagerReservationId] = useState<number | null>(null);
	const { favorites } = useFavorites();

	useEffect(() => {
		if (!isAuthenticated()) {
			router.push("/conta/login");
			return;
		}
		setUser(getUser());
		loadData();
	}, [router]);

	const loadData = async () => {
		setLoading(true);
		try {
			const [bookingsData, hotelData] = await Promise.all([
				profileService.getMyBookings(),
				hotelService.getMyReservations(),
			]);
			setBookings(bookingsData);
			setHotelReservations(hotelData);
		} catch (error) {
			console.error("Error loading profile data:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleLogout = () => {
		logout();
		resetFavoritesCache();
		router.push("/conta/login");
	};

	if (!user) {
		return null;
	}

	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<section className="contact-section" style={{ paddingTop: 30 }}>
				<div className="auto-container">
					<div
						style={{
							...card,
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							flexWrap: "wrap",
							gap: 16,
							marginBottom: 30,
						}}
					>
						<div style={{ display: "flex", alignItems: "center", gap: 16 }}>
							<div
								style={{
									width: 64,
									height: 64,
									borderRadius: "50%",
									background: "#1b1b1b",
									color: "#ffcc00",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: 24,
									fontWeight: 700,
									flexShrink: 0,
								}}
							>
								{user.fullName.charAt(0).toUpperCase()}
							</div>
							<div>
								<h3 style={{ margin: 0 }}>{user.fullName}</h3>
								<div style={{ color: "#888" }}>{user.email}</div>
							</div>
						</div>
						<button className="theme-btn btn-style-two" onClick={handleLogout}>
							<span>
								{t("common.sair")} <i className="icon far fa-angle-right"></i>
							</span>
						</button>
					</div>

					{loading ? (
						<p style={{ textAlign: "center" }}>{t("common.aCarregar")}</p>
					) : (
						<>
							<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
								<StatCard icon="fa-suitcase" label={t("profile.myBookings")} value={bookings.length} />
								<StatCard icon="fa-bed" label={t("profile.myHotelReservations")} value={hotelReservations.length} />
								<StatCard icon="fa-heart" label={t("profile.myFavorites")} value={favorites.length} href="/favoritos" />
							</div>

							<SectionTitle>{t("profile.myBookings")}</SectionTitle>
							{bookings.length === 0 && <p>{t("profile.noBookings")}</p>}
							<div style={{ display: "grid", gap: 12 }}>
								{bookings.map((booking) => (
									<div key={booking.id} style={{ ...card, padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
										<div>
											<strong>{booking.item}</strong>
											<div style={{ color: "#888", fontSize: 14 }}>
												{t("profile.date")}: {booking.date} &middot; {t("profile.amount")}: ${booking.amount}
											</div>
										</div>
										<span
											style={{
												padding: "5px 12px",
												borderRadius: 20,
												fontSize: 13,
												fontWeight: 600,
												background: booking.status === "CONFIRMED" ? "#d4edda" : booking.status === "CANCELLED" || booking.status === "FAILED" ? "#f8d7da" : "#fff3cd",
												color: booking.status === "CONFIRMED" ? "#155724" : booking.status === "CANCELLED" || booking.status === "FAILED" ? "#721c24" : "#856404",
											}}
										>
											{booking.status}
										</span>
									</div>
								))}
							</div>

							<SectionTitle>{t("profile.myHotelReservations")}</SectionTitle>
							{hotelReservations.length === 0 && <p>{t("profile.noHotelReservations")}</p>}
							<div style={{ display: "grid", gap: 12 }}>
								{hotelReservations.map((reservation) => (
									<div key={reservation.id} style={{ ...card, padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
										<div>
											<strong>{reservation.hotelName}</strong>
											{reservation.roomTypeName && <div style={{ color: "#888", fontSize: 14 }}>{roomLabel(reservation.roomNumber, reservation.roomTypeName)}</div>}
											<div style={{ color: "#888", fontSize: 14 }}>
												{reservation.checkIn} → {reservation.checkOut} &middot; {reservation.guests} {t("profile.guestsSuffix")}
											</div>
											<div style={{ color: "#888", fontSize: 14 }}>{t("profile.amount")}: ${reservation.totalAmount.toFixed(2)}</div>
										</div>
										<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
											<span
												style={{
													padding: "5px 12px",
													borderRadius: 20,
													fontSize: 13,
													fontWeight: 600,
													background: reservation.status === "PAID" || reservation.status === "CONFIRMED" ? "#d4edda" : "#fff3cd",
													color: reservation.status === "PAID" || reservation.status === "CONFIRMED" ? "#155724" : "#856404",
												}}
											>
												{hotelStatusLabel(reservation.status)}
											</span>
											<button
												className="theme-btn btn-style-two"
												style={{ padding: "5px 15px", fontSize: 13 }}
												onClick={() => setGuestManagerReservationId(reservation.id)}
											>
												<span>{t("profile.guests.manage")}</span>
											</button>
										</div>
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</section>

			{guestManagerReservationId != null && (
				<GuestManager reservationId={guestManagerReservationId} onClose={() => setGuestManagerReservationId(null)} />
			)}
		</>
	);
}
