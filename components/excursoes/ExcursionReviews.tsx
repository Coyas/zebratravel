"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { isAuthenticated } from "@/lib/clientAuth";
import { excursoesService, ExcursaoReview } from "@/services/excursoesService";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

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

export default function ExcursionReviews({ slug }: { slug: string }) {
	const { t } = useLanguage();
	const [reviews, setReviews] = useState<ExcursaoReview[]>([]);
	const [loading, setLoading] = useState(true);
	const [authed, setAuthed] = useState(false);
	const [rating, setRating] = useState(5);
	const [comment, setComment] = useState("");
	const [submitting, setSubmitting] = useState(false);

	const load = async () => {
		setLoading(true);
		try {
			setReviews(await excursoesService.getReviews(slug));
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		setAuthed(isAuthenticated());
		load();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slug]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitting(true);
		try {
			await excursoesService.createReview(slug, { rating, comment });
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
				<p style={{ color: "#888", marginBottom: 25 }}>{t("excursion.noReviews")}</p>
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
								<div style={{ fontSize: 12, color: "#aaa", marginTop: 8 }}>{new Date(review.createdAt).toLocaleDateString()}</div>
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
