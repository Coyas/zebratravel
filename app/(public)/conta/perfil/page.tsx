"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import { getUser, isAuthenticated, logout, ClientUser } from "@/lib/clientAuth";
import { profileService, Booking, Favorite } from "@/services/profileService";
import { hotelService, HotelReservation } from "@/services/hotelService";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { roomLabel } from "@/lib/roomLabel";

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
	const [favorites, setFavorites] = useState<Favorite[]>([]);
	const [hotelReservations, setHotelReservations] = useState<HotelReservation[]>([]);
	const [loading, setLoading] = useState(true);

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
			const [bookingsData, favoritesData, hotelData] = await Promise.all([
				profileService.getMyBookings(),
				profileService.getMyFavorites(),
				hotelService.getMyReservations(),
			]);
			setBookings(bookingsData);
			setFavorites(favoritesData);
			setHotelReservations(hotelData);
		} catch (error) {
			console.error("Error loading profile data:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleRemoveFavorite = async (productId: number) => {
		try {
			await profileService.removeFavorite(productId);
			setFavorites(favorites.filter((f) => f.id !== productId));
		} catch {
			Swal.fire("Erro", "Não foi possível remover o favorito", "error");
		}
	};

	const handleLogout = () => {
		logout();
		router.push("/conta/login");
	};

	if (!user) {
		return null;
	}

	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<section className="contact-section">
				<div className="auto-container">
					<div className="title-box centered">
						<h2>
							<span>{t("profile.title")}</span>
						</h2>
						<div className="text">
							{user.fullName} &middot; {user.email}
						</div>
					</div>

					<div style={{ textAlign: "center", marginBottom: 40 }}>
						<button className="theme-btn btn-style-two" onClick={handleLogout}>
							<span>
								{t("common.sair")} <i className="icon far fa-angle-right"></i>
							</span>
						</button>
					</div>

					{loading ? (
						<p style={{ textAlign: "center" }}>{t("common.aCarregar")}</p>
					) : (
						<div className="row clearfix">
							<div className="col-lg-6 col-md-12 col-sm-12">
								<h4 style={{ marginBottom: 20 }}>{t("profile.myBookings")}</h4>
								{bookings.length === 0 && <p>{t("profile.noBookings")}</p>}
								{bookings.map((booking) => (
									<div key={booking.id} className="form-box site-form" style={{ marginBottom: 15, padding: 15 }}>
										<strong>{booking.item}</strong>
										<div>{t("profile.date")}: {booking.date}</div>
										<div>{t("profile.status")}: {booking.status}</div>
										<div>{t("profile.amount")}: ${booking.amount}</div>
									</div>
								))}
							</div>

							<div className="col-lg-6 col-md-12 col-sm-12">
								<h4 style={{ marginBottom: 20 }}>{t("profile.myFavorites")}</h4>
								{favorites.length === 0 && <p>{t("profile.noFavorites")}</p>}
								{favorites.map((fav) => (
									<div
										key={fav.id}
										className="form-box site-form"
										style={{ marginBottom: 15, padding: 15, display: "flex", justifyContent: "space-between", alignItems: "center" }}
									>
										<div>
											<strong>{fav.title}</strong>
											<div>{fav.price} €</div>
										</div>
										<button className="theme-btn btn-style-two" onClick={() => handleRemoveFavorite(fav.id)}>
											<span>{t("profile.remove")}</span>
										</button>
									</div>
								))}
							</div>
						</div>
					)}

					{!loading && (
						<div className="row clearfix" style={{ marginTop: 30 }}>
							<div className="col-lg-12">
								<h4 style={{ marginBottom: 20 }}>{t("profile.myHotelReservations")}</h4>
								{hotelReservations.length === 0 && <p>{t("profile.noHotelReservations")}</p>}
								{hotelReservations.map((reservation) => (
									<div
										key={reservation.id}
										className="form-box site-form"
										style={{ marginBottom: 15, padding: 15, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}
									>
										<div>
											<strong>{reservation.hotelName}</strong>
											{reservation.roomTypeName && <div>{roomLabel(reservation.roomNumber, reservation.roomTypeName)}</div>}
											<div>
												{reservation.checkIn} → {reservation.checkOut} &middot; {reservation.guests} {t("profile.guestsSuffix")}
											</div>
											<div>{t("profile.amount")}: ${reservation.totalAmount.toFixed(2)}</div>
										</div>
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
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	);
}
