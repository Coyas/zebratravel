// src/components/WishlistSection.tsx
import React from "react";
import {
	produtosFavoritos,
	ProdutoFavorito,
} from "@/app/Dados/produtosFavoritos";

const WishlistItem: React.FC<ProdutoFavorito> = ({
	imageUrl,
	title,
	price,
	date,
}) => {
	return (
		<tr>
			<td className="prod-column image-column">
				<div className="image-box">
					<figure className="prod-thumb">
						<a href="#">
							<img src={imageUrl} alt={title} />
						</a>
					</figure>
				</div>
			</td>
			<td className="prod-column info-column">
				<div className="info-box">
					<h4 className="prod-title">{title}</h4>
					<div className="price">
						Preço : <span>{price}</span>
					</div>
					<div className="date">{date}</div>
				</div>
			</td>
			<td className="avail">
				<div className="yes">Em estoque</div>
				<div className="add-btn">
					<a href="#" className="theme-btn add-cart-btn">
						<span>
							<i className="far fa-shopping-cart"></i> Adicionar ao Carrinho
						</span>
					</a>
				</div>
			</td>
		</tr>
	);
};

const FavoritosSection: React.FC = () => {
	return (
		<section className="wishlist-section">
			<div className="auto-container">
				{/* Wishlist Outer */}
				<div className="wishlist-outer">
					<div className="table-outer">
						<div className="table-box">
							<table className="wishlist-table">
								<tbody>
									{produtosFavoritos.map((item, index) => (
										<WishlistItem
											key={index}
											imageUrl={item.imageUrl}
											title={item.title}
											price={item.price}
											date={item.date}
										/>
									))}
								</tbody>
							</table>
						</div>

						{/* Wishlist Lower Section */}
						<div className="wishlist-lower clearfix">
							<div className="left clearfix">
								<div className="link-title">Link dos Favoritos</div>
								<div className="link-form clearfix">
									<div className="field">
										<input
											type="text"
											name="coupon-code"
											placeholder="https://themeforest.net/"
										/>
									</div>
									<div className="button">
										<button type="button" className="theme-btn btn-style-two">
											<span>Copiar Link</span>
										</button>
									</div>
								</div>
							</div>
							<div className="share clearfix">
								<div className="share-title">Compartilhar em:</div>
								<ul className="share-links clearfix">
									<li>
										<a href="#">
											<span className="fab fa-facebook-f"></span>
										</a>
									</li>
									<li>
										<a href="#">
											<span className="fab fa-twitter"></span>
										</a>
									</li>
									<li>
										<a href="#">
											<span className="fab fa-youtube"></span>
										</a>
									</li>
									<li>
										<a href="#">
											<span className="fab fa-instagram"></span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FavoritosSection;
