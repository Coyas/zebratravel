// components/CartSidebar.tsx
"use client";
import React from "react";

type CartItem = {
	id: number;
	name: string;
	price: number;
	quantity: number;
	imageUrl: string;
};

type CartSidebarProps = {
	items: CartItem[];
	subtotal: number;
	onClose: () => void;
};

const CartSidebar: React.FC<CartSidebarProps> = ({
	items,
	subtotal,
	onClose,
}) => {
	const handleRemoveItem = (id: number) => {
		console.log(`Remove item with id: ${id}`);
		// Implement remove item logic here
	};

	const handleQuantityChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		id: number
	) => {
		console.log(
			`Change quantity for item with id: ${id}, new value: ${e.target.value}`
		);
		// Implement quantity change logic here
	};

	return (
		<div className="cart-sidebar">
			<div className="cart-side-inner">
				<div className="cart-side-header">
					<div className="closer-btn" onClick={onClose}>
						<span>Close</span>
					</div>
					<h5>Shopping Cart</h5>
				</div>

				{/* If no items in the cart, display a message */}
				{items.length === 0 ? (
					<div className="empty-cart-message">
						<p>Your cart is empty</p>
					</div>
				) : (
					<div className="prod-box">
						{items.map((item) => (
							<div key={item.id} className="prod-block">
								<div className="prod-inner">
									<div className="prod-thumb">
										<a href="#">
											<img src={item.imageUrl} alt={item.name} />
										</a>
									</div>
									<div
										className="remove-item"
										onClick={() => handleRemoveItem(item.id)}
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
												value={item.quantity}
												onChange={(e) => handleQuantityChange(e, item.id)}
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
						<a href="#" className="theme-btn btn-style-one">
							<span>View Cart</span>
						</a>
					</div>
					<div className="right">
						<a href="#" className="theme-btn btn-style-two">
							<span>Checkout</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartSidebar;
