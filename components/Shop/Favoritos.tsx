"use client";

// src/components/WishlistSection.tsx
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { isAuthenticated } from "@/lib/clientAuth";
import { FavoriteItemType } from "@/services/profileService";
import { useFavorites } from "@/lib/useFavorites";

const TYPE_LABELS: Record<FavoriteItemType, string> = {
	ROOM: "Quartos",
	PRODUCT: "Produtos",
	EXCURSION: "Excursões",
	TOUR: "Destinos",
};

const FavoritosSection: React.FC = () => {
	const [authed] = useState(isAuthenticated());
	const { favorites, loading, toggle } = useFavorites();
	const [filter, setFilter] = useState<FavoriteItemType | "all">("all");

	const availableTypes = useMemo(
		() => Array.from(new Set(favorites.map((f) => f.itemType))),
		[favorites]
	);

	const filtered = filter === "all" ? favorites : favorites.filter((f) => f.itemType === filter);

	// Se o único favorito da aba selecionada for removido, a aba desaparece da lista mas o
	// filtro ficava preso nesse tipo — a lista parecia vazia mesmo havendo outros favoritos.
	useEffect(() => {
		if (filter !== "all" && !availableTypes.includes(filter)) {
			setFilter("all");
		}
	}, [filter, availableTypes]);

	const handleRemove = (itemType: FavoriteItemType, itemId: number) => {
		toggle(itemType, itemId);
	};

	if (!authed) {
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
				{favorites.length === 0 ? (
					<p style={{ padding: "20px 0", textAlign: "center" }}>Ainda não tem favoritos. Explore o site e clique no coração de um quarto, produto, excursão ou destino para o guardar aqui.</p>
				) : (
					<>
						{availableTypes.length > 1 && (
							<div className="gallery-filters centered clearfix" style={{ marginBottom: 20 }}>
								<ul className="filter-tabs filter-btns clearfix">
									<li className={filter === "all" ? "active filter" : "filter"} onClick={() => setFilter("all")}>
										Todos ({favorites.length})
									</li>
									{availableTypes.map((type) => (
										<li key={type} className={filter === type ? "active filter" : "filter"} onClick={() => setFilter(type)}>
											{TYPE_LABELS[type]} ({favorites.filter((f) => f.itemType === type).length})
										</li>
									))}
								</ul>
							</div>
						)}

						<div className="wishlist-outer">
							<div className="table-outer">
								<table className="wishlist-table">
									<tbody>
										{filtered.map((item) => (
											<tr key={`${item.itemType}-${item.itemId}`}>
												<td className="prod-column image-column">
													<div className="image-box">
														<figure className="prod-thumb">
															<Link href={item.link || "#"}>
																<img src={item.image} alt={item.title} />
															</Link>
														</figure>
													</div>
												</td>
												<td className="prod-column info-column">
													<div className="info-box">
														<span style={{ fontSize: 11, textTransform: "uppercase", color: "#999", letterSpacing: 0.5 }}>
															{TYPE_LABELS[item.itemType]}
														</span>
														<h4 className="prod-title">
															<Link href={item.link || "#"}>{item.title}</Link>
														</h4>
														{item.subtitle && <div style={{ color: "#888", fontSize: 13 }}>{item.subtitle}</div>}
														{item.price > 0 && (
															<div className="price">
																Preço : <span>{item.price.toFixed(2)} €</span>
															</div>
														)}
													</div>
												</td>
												<td className="avail">
													<div className="add-btn">
														<Link href={item.link || "#"} className="theme-btn" style={{ marginRight: 8 }}>
															<span>Ver</span>
														</Link>
														<a
															href="#"
															className="theme-btn add-cart-btn"
															onClick={(e) => {
																e.preventDefault();
																handleRemove(item.itemType, item.itemId);
															}}
														>
															<span>
																<i className="far fa-heart-broken"></i> Remover
															</span>
														</a>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default FavoritosSection;
