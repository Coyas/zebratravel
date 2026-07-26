"use client";

// src/components/WishlistSection.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { isAuthenticated } from "@/lib/clientAuth";
import { profileService, Favorite } from "@/services/profileService";

const WishlistItem: React.FC<{ item: Favorite; onRemove: (id: number) => void }> = ({ item, onRemove }) => {
	return (
		<tr>
			<td className="prod-column image-column">
				<div className="image-box">
					<figure className="prod-thumb">
						<a href="#">
							<img src={item.imageUrl} alt={item.title} />
						</a>
					</figure>
				</div>
			</td>
			<td className="prod-column info-column">
				<div className="info-box">
					<h4 className="prod-title">{item.title}</h4>
					<div className="price">
						Preço : <span>{item.price} €</span>
					</div>
				</div>
			</td>
			<td className="avail">
				<div className="yes">Em estoque</div>
				<div className="add-btn">
					<a
						href="#"
						className="theme-btn add-cart-btn"
						onClick={(e) => {
							e.preventDefault();
							onRemove(item.id);
						}}
					>
						<span>
							<i className="far fa-heart-broken"></i> Remover dos Favoritos
						</span>
					</a>
				</div>
			</td>
		</tr>
	);
};

const FavoritosSection: React.FC = () => {
	const [authed, setAuthed] = useState<boolean | null>(null);
	const [favorites, setFavorites] = useState<Favorite[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const ok = isAuthenticated();
		setAuthed(ok);
		if (ok) {
			profileService
				.getMyFavorites()
				.then(setFavorites)
				.catch((err) => console.error("Error loading favorites:", err))
				.finally(() => setLoading(false));
		} else {
			setLoading(false);
		}
	}, []);

	const handleRemove = async (productId: number) => {
		try {
			await profileService.removeFavorite(productId);
			setFavorites((prev) => prev.filter((f) => f.id !== productId));
		} catch (error) {
			console.error("Error removing favorite:", error);
		}
	};

	if (authed === false) {
		return (
			<section className="wishlist-section">
				<div className="auto-container" style={{ textAlign: "center", padding: "60px 0" }}>
					<p>Precisa de iniciar sessão para ver os seus favoritos.</p>
					<Link href="/conta/login" className="theme-btn btn-style-two">
						<span>Entrar</span>
					</Link>
				</div>
			</section>
		);
	}

	if (loading) {
		return (
			<section className="wishlist-section">
				<div className="auto-container" style={{ textAlign: "center", padding: "60px 0" }}>
					<p>A carregar...</p>
				</div>
			</section>
		);
	}

	return (
		<section className="wishlist-section">
			<div className="auto-container">
				{/* Wishlist Outer */}
				<div className="wishlist-outer">
					<div className="table-outer">
						{favorites.length === 0 ? (
							<p style={{ padding: "20px 0" }}>Ainda não tem produtos favoritos.</p>
						) : (
							<table className="wishlist-table">
								<tbody>
									{favorites.map((item) => (
										<WishlistItem key={item.id} item={item} onRemove={handleRemove} />
									))}
								</tbody>
							</table>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FavoritosSection;
