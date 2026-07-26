"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";

const STATUS_INFO: Record<string, { title: string; text: string; icon: string }> = {
	PAID: { title: "Pagamento confirmado!", text: "A sua reserva de hotel está confirmada. Vai receber a confirmação por email.", icon: "✅" },
	CONFIRMED: { title: "Reserva confirmada!", text: "A sua reserva de hotel foi confirmada.", icon: "✅" },
	AWAITING_TRANSFER: {
		title: "Reserva registada",
		text: "Para concluir, efectue a transferência bancária para o IBAN indicado no email de confirmação e envie o comprovativo.",
		icon: "🏦",
	},
	AWAITING_CASH: {
		title: "Reserva registada",
		text: "Pode pagar em dinheiro no momento do check-in. Guarde o número da reserva.",
		icon: "💵",
	},
	FAILED: { title: "Pagamento não concluído", text: "Não foi possível confirmar o pagamento. Pode tentar novamente.", icon: "⚠️" },
	CANCELLED: { title: "Pagamento cancelado", text: "O pagamento foi cancelado.", icon: "✖️" },
};

function ResultadoContent() {
	const searchParams = useSearchParams();
	const reservationId = searchParams.get("reservationId") || searchParams.get("orderId");
	const status = searchParams.get("status") || "FAILED";
	const info = STATUS_INFO[status] ?? STATUS_INFO.FAILED;

	return (
		<div className="auto-container" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
			<div style={{ fontSize: 48 }}>{info.icon}</div>
			<h2 style={{ margin: "20px 0 10px" }}>{info.title}</h2>
			<p>{info.text}</p>
			{reservationId && <p style={{ color: "#888" }}>Nº da reserva: {reservationId}</p>}
			<div style={{ marginTop: 30 }}>
				<Link href="/conta/perfil" className="theme-btn btn-style-two">
					<span>Ver as Minhas Reservas</span>
				</Link>
			</div>
		</div>
	);
}

export default function HotelCheckoutResultadoPage() {
	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<section className="contact-section">
				<Suspense fallback={null}>
					<ResultadoContent />
				</Suspense>
			</section>
		</>
	);
}
