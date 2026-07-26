"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import { isAuthenticated } from "@/lib/clientAuth";
import { useCart } from "@/lib/CartContext";
import { orderService } from "@/services/orderService";

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

export default function CheckoutPage() {
	const router = useRouter();
	const { items, subtotal, clear } = useCart();
	const [authed, setAuthed] = useState<boolean | null>(null);
	const [method, setMethod] = useState<PaymentMethod>("ONLINE");
	const [submitting, setSubmitting] = useState(false);

	useEffect(() => {
		setAuthed(isAuthenticated());
	}, []);

	const handleCheckout = async () => {
		if (items.length === 0) {
			Swal.fire("Carrinho vazio", "Adicione produtos ao carrinho antes de finalizar a compra.", "info");
			return;
		}
		setSubmitting(true);
		try {
			const order = await orderService.create(
				items.map((i) => ({ productId: i.productId, name: i.name, price: i.price, quantity: i.quantity })),
				method
			);

			if (method === "ONLINE") {
				const { postUrl, fields } = await orderService.getVinti4Fields(order.id);
				clear();
				submitVinti4Form(postUrl, fields);
				return;
			}

			clear();
			router.push(`/checkout/resultado?orderId=${order.id}&status=${order.status}`);
		} catch (error) {
			Swal.fire("Erro", error instanceof Error ? error.message : "Não foi possível finalizar a compra", "error");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<section className="contact-section">
				<div className="auto-container">
					<div className="title-box centered">
						<h2>
							<span>Checkout</span>
						</h2>
					</div>

					{authed === false ? (
						<div style={{ textAlign: "center" }}>
							<p>Precisa de iniciar sessão para finalizar a compra.</p>
							<Link href="/conta/login" className="theme-btn btn-style-two">
								<span>Entrar</span>
							</Link>
						</div>
					) : (
						<div className="row clearfix" style={{ maxWidth: 900, margin: "0 auto" }}>
							<div className="col-lg-7 col-md-12 col-sm-12">
								<h4 style={{ marginBottom: 20 }}>O seu Carrinho</h4>
								{items.length === 0 ? (
									<p>O carrinho está vazio.</p>
								) : (
									items.map((item) => (
										<div
											key={item.productId}
											className="form-box site-form"
											style={{ marginBottom: 10, padding: 12, display: "flex", justifyContent: "space-between" }}
										>
											<span>
												{item.quantity} x {item.name}
											</span>
											<strong>${(item.price * item.quantity).toFixed(2)}</strong>
										</div>
									))
								)}
								<div style={{ textAlign: "right", marginTop: 15, fontSize: 18 }}>
									<strong>Subtotal: ${subtotal.toFixed(2)}</strong>
								</div>
							</div>

							<div className="col-lg-5 col-md-12 col-sm-12">
								<h4 style={{ marginBottom: 20 }}>Método de Pagamento</h4>
								<div className="form-box site-form" style={{ padding: 15 }}>
									<label style={{ display: "block", marginBottom: 10 }}>
										<input
											type="radio"
											name="method"
											checked={method === "ONLINE"}
											onChange={() => setMethod("ONLINE")}
										/>{" "}
										Cartão Online (Vinti4 / SISP)
									</label>
									<label style={{ display: "block", marginBottom: 10 }}>
										<input
											type="radio"
											name="method"
											checked={method === "TRANSFER"}
											onChange={() => setMethod("TRANSFER")}
										/>{" "}
										Transferência Bancária
									</label>
									<label style={{ display: "block", marginBottom: 10 }}>
										<input
											type="radio"
											name="method"
											checked={method === "CASH"}
											onChange={() => setMethod("CASH")}
										/>{" "}
										Dinheiro Vivo (pagar na loja)
									</label>

									<button
										className="theme-btn btn-style-two"
										style={{ marginTop: 15, width: "100%" }}
										disabled={submitting || items.length === 0}
										onClick={handleCheckout}
									>
										<span>{submitting ? "A processar..." : "Finalizar Compra"}</span>
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	);
}
