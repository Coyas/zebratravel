"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { isAuthenticated } from "@/lib/clientAuth";
import { profileService } from "@/services/profileService";
import { voucherService } from "@/services/voucherService";
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

export default function BookingWidget({
	excursionId,
	slug,
	title,
	price,
}: {
	excursionId?: number;
	slug: string;
	title: string;
	price: number;
}) {
	const { t } = useLanguage();
	const router = useRouter();
	const [authed, setAuthed] = useState<boolean | null>(null);
	const [date, setDate] = useState("");
	const [guests, setGuests] = useState(1);
	const [method, setMethod] = useState<PaymentMethod>("ONLINE");
	const [submitting, setSubmitting] = useState(false);
	const [voucherCode, setVoucherCode] = useState("");
	const [voucherChecking, setVoucherChecking] = useState(false);
	const [voucherDiscount, setVoucherDiscount] = useState<number | null>(null);
	const [voucherError, setVoucherError] = useState<string | null>(null);

	useEffect(() => {
		setAuthed(isAuthenticated());
	}, []);

	const total = price * guests;
	const discountedTotal = voucherDiscount != null ? total * (1 - voucherDiscount / 100) : total;

	const applyVoucher = async () => {
		if (!voucherCode.trim() || excursionId == null) return;
		setVoucherChecking(true);
		setVoucherError(null);
		setVoucherDiscount(null);
		try {
			const result = await voucherService.validate(voucherCode.trim(), "EXCURSION", excursionId);
			setVoucherDiscount(result.discountPercent);
		} catch (error) {
			setVoucherError(error instanceof Error ? error.message : "Código inválido");
		} finally {
			setVoucherChecking(false);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!date) {
			Swal.fire("Erro", "Escolha uma data", "error");
			return;
		}
		setSubmitting(true);
		try {
			const booking = await profileService.createBooking({
				excursionSlug: slug,
				date,
				guests,
				paymentMethod: method,
				voucherCode: voucherDiscount != null ? voucherCode.trim() : undefined,
			});

			if (method === "ONLINE") {
				const { postUrl, fields } = await profileService.getVinti4Fields(booking.id);
				submitVinti4Form(postUrl, fields);
				return;
			}

			router.push(`/excurcoes/checkout/resultado?bookingId=${booking.id}&status=${booking.status}`);
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
								min={todayIso()}
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
							{t("booking.total")}:{" "}
							{voucherDiscount != null ? (
								<>
									<span style={{ textDecoration: "line-through", opacity: 0.6, marginRight: 6 }}>${total.toFixed(2)}</span>
									${discountedTotal.toFixed(2)}
								</>
							) : (
								<>${total.toFixed(2)}</>
							)}
						</div>
						{excursionId != null && (
							<div className="form-group">
								<div style={{ display: "flex", gap: 8 }}>
									<input
										type="text"
										value={voucherCode}
										onChange={(e) => {
											setVoucherCode(e.target.value.toUpperCase());
											setVoucherDiscount(null);
											setVoucherError(null);
										}}
										placeholder="Código de desconto"
										style={{ flex: 1 }}
									/>
									<button
										type="button"
										className="theme-btn send-btn"
										onClick={applyVoucher}
										disabled={voucherChecking || !voucherCode.trim()}
									>
										<span className="txt">{voucherChecking ? "..." : "Aplicar"}</span>
									</button>
								</div>
								{voucherDiscount != null && <p style={{ color: "#7ee787", fontSize: 13, marginTop: 5 }}>Voucher aplicado: -{voucherDiscount}%</p>}
								{voucherError && <p style={{ color: "#ff8a8a", fontSize: 13, marginTop: 5 }}>{voucherError}</p>}
							</div>
						)}
						<div className="form-group" style={{ color: "#fff" }}>
							<label style={{ display: "block", marginBottom: 8 }}>
								<input type="radio" name="method" checked={method === "ONLINE"} onChange={() => setMethod("ONLINE")} /> {t("booking.paymentOnline")}
							</label>
							<label style={{ display: "block", marginBottom: 8 }}>
								<input type="radio" name="method" checked={method === "TRANSFER"} onChange={() => setMethod("TRANSFER")} /> {t("booking.paymentTransfer")}
							</label>
							<label style={{ display: "block", marginBottom: 8 }}>
								<input type="radio" name="method" checked={method === "CASH"} onChange={() => setMethod("CASH")} /> {t("booking.paymentCash")}
							</label>
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
