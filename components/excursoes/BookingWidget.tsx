"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { isAuthenticated } from "@/lib/clientAuth";
import { profileService } from "@/services/profileService";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function BookingWidget({
	slug,
	title,
	price,
}: {
	slug: string;
	title: string;
	price: number;
}) {
	const { t } = useLanguage();
	const [authed, setAuthed] = useState<boolean | null>(null);
	const [date, setDate] = useState("");
	const [guests, setGuests] = useState(1);
	const [submitting, setSubmitting] = useState(false);

	useEffect(() => {
		setAuthed(isAuthenticated());
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!date) {
			Swal.fire("Erro", "Escolha uma data", "error");
			return;
		}
		setSubmitting(true);
		try {
			await profileService.createBooking(slug, date, guests);
			Swal.fire("Reserva efectuada!", `A sua reserva para "${title}" foi registada e está pendente de confirmação.`, "success");
			setDate("");
			setGuests(1);
		} catch (error) {
			Swal.fire("Erro", error instanceof Error ? error.message : "Não foi possível criar a reserva", "error");
		} finally {
			setSubmitting(false);
		}
	};

	if (authed === null) {
		return null;
	}

	return (
		<div
			className="sidebar-widget booking-widget"
			style={{ backgroundImage: `url(/images/background/booking-bg.jpg)` }}
		>
			<h5>{t("booking.title")}</h5>
			<div className="booking-form">
				{!authed ? (
					<div style={{ padding: "10px 0", color: "#fff" }}>
						<p>{t("booking.needLogin")}</p>
						<div className="form-group">
							<Link href="/conta/login" className="theme-btn send-btn">
								<span className="txt">
									{t("common.entrar")} <i className="fa fa-angle-right"></i>
								</span>
							</Link>
						</div>
						<p style={{ marginTop: 10 }}>
							{t("booking.noAccount")} <Link href="/conta/registo">{t("common.criarConta")}</Link>
						</p>
					</div>
				) : (
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<input
								type="date"
								name="date"
								required
								value={date}
								onChange={(e) => setDate(e.target.value)}
							/>
							<span className="icon fal fa-calendar fa-fw"></span>
						</div>
						<div className="form-group">
							<div className="item-quantity">
								<div className="quantity-spinner">
									<button
										type="button"
										className="minus"
										onClick={() => setGuests((g) => Math.max(1, g - 1))}
									>
										<span className="fa fa-minus"></span>
									</button>
									<input type="text" value={guests} className="prod_qty" readOnly />
									<button type="button" className="plus" onClick={() => setGuests((g) => g + 1)}>
										<span className="fa fa-plus"></span>
									</button>
								</div>
							</div>
						</div>
						<div className="form-group" style={{ color: "#fff" }}>
							{t("booking.total")}: ${(price * guests).toFixed(2)}
						</div>
						<div className="form-group">
							<button className="theme-btn send-btn" type="submit" disabled={submitting}>
								<span className="txt">
									{submitting ? t("booking.submitting") : t("booking.now")} <i className="fa fa-angle-right"></i>
								</span>
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
}
