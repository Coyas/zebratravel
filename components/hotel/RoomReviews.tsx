"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getUser, isAuthenticated } from "@/lib/clientAuth";
import { hotelService, RoomReview } from "@/services/hotelService";
import { testimonialsService } from "@/services/testimonialsService";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function GoldTestimonialTag() {
	return (
		<span
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: 4,
				background: "rgba(255,201,51,0.15)",
				color: "#b8860b",
				fontSize: 11,
				fontWeight: 700,
				padding: "3px 8px",
				borderRadius: 999,
			}}
		>
			<i className="fa fa-star" style={{ color: "#ffc933" }}></i> Testemunho
		</span>
	);
}

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
	return (
		<span style={{ color: "#f5a623", fontSize: size, letterSpacing: 2 }}>
			{Array.from({ length: 5 }).map((_, i) => (
				<i key={i} className={i < rating ? "fa fa-star" : "far fa-star"}></i>
			))}
		</span>
	);
}

function StarRatingInput({ value, onChange }: { value: number; onChange: (rating: number) => void }) {
	const [hovered, setHovered] = useState<number | null>(null);
	const display = hovered ?? value;
	return (
		<span style={{ fontSize: 26, color: "#f5a623" }} onMouseLeave={() => setHovered(null)}>
			{[1, 2, 3, 4, 5].map((n) => (
				<i
					key={n}
					className={n <= display ? "fa fa-star" : "far fa-star"}
					onMouseEnter={() => setHovered(n)}
					onClick={() => onChange(n)}
					style={{ cursor: "pointer", marginRight: 4, transition: "transform 0.1s", display: "inline-block" }}
				></i>
			))}
		</span>
	);
}

function initials(name: string): string {
	return name
		.trim()
		.split(/\s+/)
		.slice(0, 2)
		.map((part) => part[0]?.toUpperCase())
		.join("");
}

export default function RoomReviews({ roomId }: { roomId: number }) {
	const { t } = useLanguage();
	const [reviews, setReviews] = useState<RoomReview[]>([]);
	const [loading, setLoading] = useState(true);
	const [authed, setAuthed] = useState(false);
	const [rating, setRating] = useState(5);
	const [comment, setComment] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const currentUserId = getUser()?.id;

	const load = async () => {
		setLoading(true);
		try {
			setReviews(await hotelService.getReviews(roomId));
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		setAuthed(isAuthenticated());
		load();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [roomId]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitting(true);
		try {
			await hotelService.createReview(roomId, { rating, comment });
			setComment("");
			setRating(5);
			await load();
			Swal.fire("Sucesso", t("hotel.reviewSubmitted"), "success");
		} catch (error) {
			Swal.fire("Erro", error instanceof Error ? error.message : t("hotel.reviewError"), "error");
		} finally {
			setSubmitting(false);
		}
	};

	const averageRating = reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;

	const handleCreateTestimonial = async (review: RoomReview) => {
		const { value: designation, isDismissed } = await Swal.fire({
			title: "Criar o teu testemunho",
			input: "text",
			inputLabel: "Cargo ou frase curta (opcional)",
			inputPlaceholder: "ex: Cliente ZebraTravel",
			showCancelButton: true,
			confirmButtonText: "Criar testemunho",
			cancelButtonText: "Cancelar",
		});
		if (isDismissed) return;
		try {
			await testimonialsService.createFromReview("HOTEL_ROOM", review.id, designation || undefined);
			await load();
			Swal.fire("Sucesso", "O teu testemunho já aparece na home!", "success");
		} catch (error) {
			Swal.fire("Erro", error instanceof Error ? error.message : "Não foi possível criar o testemunho", "error");
		}
	};

	return (
		<div style={{ marginTop: 35 }}>
			<div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 20 }}>
				<h4 style={{ margin: 0 }}>{t("hotel.reviewsTitle")}</h4>
				{reviews.length > 0 && (
					<span style={{ display: "flex", alignItems: "center", gap: 8, color: "#888", fontSize: 14 }}>
						<Stars rating={Math.round(averageRating)} size={16} />
						<strong style={{ color: "#333" }}>{averageRating.toFixed(1)}</strong>
						<span>
							({reviews.length} {reviews.length === 1 ? t("hotel.reviewSingular") : t("hotel.reviewPlural")})
						</span>
					</span>
				)}
			</div>

			{loading ? (
				<p style={{ color: "#888" }}>...</p>
			) : reviews.length === 0 ? (
				<p style={{ color: "#888", marginBottom: 25 }}>{t("hotel.noReviews")}</p>
			) : (
				<div style={{ display: "grid", gap: 16, marginBottom: 25 }}>
					{reviews.map((review) => (
						<div
							key={review.id}
							style={{
								display: "flex",
								gap: 14,
								padding: 20,
								borderRadius: 10,
								background: "#fff",
								boxShadow: "0 4px 18px rgba(0,0,0,0.07)",
								border: "1px solid #f0f0f0",
							}}
						>
							<div
								style={{
									flexShrink: 0,
									width: 44,
									height: 44,
									borderRadius: "50%",
									background: "#f5a623",
									color: "#fff",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontWeight: 700,
									fontSize: 15,
								}}
							>
								{initials(review.userName)}
							</div>
							<div style={{ flex: 1, minWidth: 0 }}>
								<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6, gap: 10, flexWrap: "wrap" }}>
									<strong>{review.userName}</strong>
									<Stars rating={review.rating} />
								</div>
								{review.comment && <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>{review.comment}</p>}
								<div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
									<span style={{ fontSize: 12, color: "#aaa" }}>{new Date(review.createdAt).toLocaleDateString()}</span>
									{review.isTestimonial ? (
										<GoldTestimonialTag />
									) : (
										currentUserId === review.userId && (
											<button
												type="button"
												onClick={() => handleCreateTestimonial(review)}
												className="theme-btn btn-style-one"
												style={{ padding: "4px 14px", fontSize: 12 }}
											>
												<span>Criar seu testemunho</span>
											</button>
										)
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			)}

			{authed ? (
				<div
					style={{
						padding: 24,
						borderRadius: 10,
						background: "#fff",
						boxShadow: "0 4px 18px rgba(0,0,0,0.07)",
						border: "1px solid #f0f0f0",
					}}
				>
					<h5 style={{ marginBottom: 16 }}>{t("hotel.writeReview")}</h5>
					<form onSubmit={handleSubmit}>
						<div style={{ marginBottom: 16 }}>
							<label style={{ display: "block", marginBottom: 6, fontSize: 13 }}>{t("hotel.rating")}</label>
							<StarRatingInput value={rating} onChange={setRating} />
						</div>
						<div style={{ marginBottom: 16 }}>
							<label style={{ display: "block", marginBottom: 6, fontSize: 13 }}>{t("hotel.reviewComment")}</label>
							<textarea
								value={comment}
								onChange={(e) => setComment(e.target.value)}
								rows={3}
								style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #ddd", resize: "vertical" }}
							/>
						</div>
						<button type="submit" className="theme-btn btn-style-one" disabled={submitting}>
							<span>{submitting ? "..." : t("hotel.submitReview")}</span>
						</button>
					</form>
				</div>
			) : (
				<p style={{ color: "#888" }}>{t("hotel.reviewNeedLogin")}</p>
			)}
		</div>
	);
}
