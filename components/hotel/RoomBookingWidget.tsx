"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { isAuthenticated } from "@/lib/clientAuth";
import { hotelService, HotelRoomPublic } from "@/services/hotelService";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type PaymentMethod = "ONLINE" | "TRANSFER" | "CASH";

function submitVinti4Form(postUrl: string, fields: Record<string, string>) {
	const form = document.createElement("form");
	form.method = "POST";
	form.action = postUrl;
	Object.entries(fields).forEach(([key, value]) => {
		const input = document.createElement("input");
		input.type = "hidden";
		input.name = key;
		input.value = value;
		form.appendChild(input);
	});
	document.body.appendChild(form);
	form.submit();
}

function todayIso(): string {
	return new Date().toISOString().slice(0, 10);
}

function tomorrowIso(): string {
	const d = new Date();
	d.setDate(d.getDate() + 1);
	return d.toISOString().slice(0, 10);
}

interface RoomBookingWidgetProps {
	hotelId: number;
	room: HotelRoomPublic;
	initialCheckIn?: string;
	initialCheckOut?: string;
	initialGuests?: string;
}

export default function RoomBookingWidget({ hotelId, room, initialCheckIn, initialCheckOut, initialGuests }: RoomBookingWidgetProps) {
	const { t } = useLanguage();
	const router = useRouter();
	const [authed, setAuthed] = useState<boolean | null>(null);
	const [checkIn, setCheckIn] = useState(initialCheckIn || todayIso());
	const [checkOut, setCheckOut] = useState(initialCheckOut || tomorrowIso());
	const [guests, setGuests] = useState(Number(initialGuests) || 1);
	const [checking, setChecking] = useState(false);
	const [checked, setChecked] = useState(false);
	const [available, setAvailable] = useState(false);
	const [method, setMethod] = useState<PaymentMethod>("ONLINE");
	const [submitting, setSubmitting] = useState(false);

	useEffect(() => {
		setAuthed(isAuthenticated());
	}, []);

	const nights = Math.max(1, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000));
	const total = room.basePrice * nights;

	const checkAvailability = async () => {
		if (!checkIn || !checkOut || checkOut <= checkIn) {
			Swal.fire("Erro", t("hotel.invalidDates"), "error");
			return;
		}
		setChecking(true);
		setChecked(false);
		setAvailable(false);
		try {
			const rooms = await hotelService.getAvailability(hotelId, checkIn, checkOut);
			setAvailable(rooms.some((r) => r.roomId === room.id));
			setChecked(true);
		} catch (error) {
			Swal.fire("Erro", error instanceof Error ? error.message : t("hotel.availabilityError"), "error");
		} finally {
			setChecking(false);
		}
	};

	useEffect(() => {
		if (initialCheckIn && initialCheckOut) {
			checkAvailability();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleBook = async () => {
		if (!available) return;
		setSubmitting(true);
		try {
			const reservation = await hotelService.createReservation({
				roomId: room.id,
				checkIn,
				checkOut,
				guests,
				paymentMethod: method,
			});

			if (method === "ONLINE") {
				const { postUrl, fields } = await hotelService.getVinti4Fields(reservation.id);
				submitVinti4Form(postUrl, fields);
				return;
			}

			router.push(`/hotel/checkout/resultado?reservationId=${reservation.id}&status=${reservation.status}`);
		} catch (error) {
			Swal.fire("Erro", error instanceof Error ? error.message : t("hotel.bookingError"), "error");
		} finally {
			setSubmitting(false);
		}
	};

	if (authed === null) {
		return null;
	}

	return (
		<div className="form-box site-form" style={{ padding: 20, position: "sticky", top: 20 }}>
			<div style={{ marginBottom: 15 }}>
				<strong style={{ fontSize: 22 }}>${room.basePrice.toFixed(2)}</strong>
				<span style={{ fontSize: 13, color: "#888" }}> / {t("hotel.night")}</span>
			</div>

			<div className="row clearfix">
				<div className="col-md-6 col-sm-12" style={{ marginBottom: 12 }}>
					<label style={{ display: "block", marginBottom: 5, fontSize: 13 }}>{t("hotel.checkIn")}</label>
					<input type="date" min={todayIso()} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} style={{ width: "100%", padding: 10 }} />
				</div>
				<div className="col-md-6 col-sm-12" style={{ marginBottom: 12 }}>
					<label style={{ display: "block", marginBottom: 5, fontSize: 13 }}>{t("hotel.checkOut")}</label>
					<input type="date" min={checkIn} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} style={{ width: "100%", padding: 10 }} />
				</div>
			</div>
			<div style={{ marginBottom: 15 }}>
				<label style={{ display: "block", marginBottom: 5, fontSize: 13 }}>{t("hotel.guests")}</label>
				<input
					type="number"
					min={1}
					max={room.capacity}
					value={guests}
					onChange={(e) => setGuests(Number(e.target.value))}
					style={{ width: "100%", padding: 10 }}
				/>
			</div>

			<button className="theme-btn btn-style-two" onClick={checkAvailability} disabled={checking} style={{ width: "100%", marginBottom: 15 }}>
				<span>{checking ? t("hotel.searching") : t("hotel.checkAvailability")}</span>
			</button>

			{checked && !available && <p style={{ color: "#c0392b" }}>{t("hotel.roomNotAvailable")}</p>}

			{checked && available && (
				<>
					<div style={{ borderTop: "1px solid #eee", paddingTop: 12, marginBottom: 15 }}>
						<div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 4 }}>
							<span>
								${room.basePrice.toFixed(2)} x {nights} {nights === 1 ? t("hotel.night") : t("hotel.nights")}
							</span>
							<span>${total.toFixed(2)}</span>
						</div>
						<div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
							<span>{t("hotel.total")}</span>
							<span>${total.toFixed(2)}</span>
						</div>
					</div>

					{authed === false ? (
						<div>
							<p>{t("hotel.needLogin")}</p>
							<Link href="/conta/login" className="theme-btn btn-style-two">
								<span>{t("common.entrar")}</span>
							</Link>
						</div>
					) : (
						<>
							<h5 style={{ marginBottom: 10 }}>{t("hotel.paymentMethod")}</h5>
							<label style={{ display: "block", marginBottom: 8 }}>
								<input type="radio" name="method" checked={method === "ONLINE"} onChange={() => setMethod("ONLINE")} /> {t("hotel.onlineCard")}
							</label>
							<label style={{ display: "block", marginBottom: 8 }}>
								<input type="radio" name="method" checked={method === "TRANSFER"} onChange={() => setMethod("TRANSFER")} /> {t("hotel.bankTransfer")}
							</label>
							<label style={{ display: "block", marginBottom: 8 }}>
								<input type="radio" name="method" checked={method === "CASH"} onChange={() => setMethod("CASH")} /> {t("hotel.cashOnCheckin")}
							</label>

							<button className="theme-btn btn-style-one" style={{ width: "100%", marginTop: 15 }} disabled={submitting} onClick={handleBook}>
								<span>{submitting ? t("hotel.processing") : `${t("hotel.reserve")} — $${total.toFixed(2)}`}</span>
							</button>
						</>
					)}
				</>
			)}
		</div>
	);
}
