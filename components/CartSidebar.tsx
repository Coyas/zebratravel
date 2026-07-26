// components/CartSidebar.tsx
"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";

type CartSidebarProps = {
	onClose: () => void;
};

const CartSidebar: React.FC<CartSidebarProps> = ({ onClose }) => {
	const { items, subtotal, removeItem, setQuantity } = useCart();

	return (
		<div className="cart-sidebar">
			<div className="cart-side-inner">
				<div className="cart-side-header">
					<div className="closer-btn" onClick={onClose}>
						<span>Close</span>
					</div>
					<h5>Carrinho de Compras</h5>
				</div>

				{/* If no items in the cart, display a message */}
				{items.length === 0 ? (
					<div className="empty-cart-message">
						<p>O seu carrinho está vazio</p>
					</div>
				) : (
					<div className="prod-box">
						{items.map((item) => (
							<div key={item.productId} className="prod-block">
								<div className="prod-inner">
									<div className="prod-thumb">
										<a href="#">
											<img src={item.imageUrl} alt={item.name} />
										</a>
									</div>
									<div
										className="remove-item"
										onClick={() => removeItem(item.productId)}
									>
										<a href="#">
											<i className="far fa-times"></i>
										</a>
									</div>
									<div className="prod-title">
										<a href="#">{item.name}</a>
									</div>
									<div className="quantity-box">
										<div className="item-quantity">
											<input
												className="qty-spinner"
												type="number"
												min={1}
												value={item.quantity}
												onChange={(e) => setQuantity(item.productId, Number(e.target.value))}
											/>
										</div>
									</div>
									<div className="calculations">
										{item.quantity} x <span>${item.price.toFixed(2)}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
			<div className="lower-content">
				<div className="count clearfix">
					<span className="ttl">Subtotal</span>
					<span className="dtl">${subtotal.toFixed(2)}</span>
				</div>
				<div className="links clearfix">
					<div className="left">
						<Link href="/loja" className="theme-btn btn-style-one" onClick={onClose}>
							<span>Ver Loja</span>
						</Link>
					</div>
					<div className="right">
						<Link href="/checkout" className="theme-btn btn-style-two" onClick={onClose}>
							<span>Checkout</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartSidebar;
