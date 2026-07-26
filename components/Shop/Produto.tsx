// src/components/Produto.tsx
"use client";

import React from "react";
import Swal from "sweetalert2";
import { Produto } from "@/services/productsService";
import { useCart } from "@/lib/CartContext";

interface ProdutoProps {
	produto: Produto;
}

const ProdutoComponente: React.FC<ProdutoProps> = ({ produto }) => {
	const { addItem } = useCart();

	const handleAddToCart = (e: React.MouseEvent) => {
		e.preventDefault();
		const numericPrice = Number(produto.preco.replace(",", ".").replace(/[^0-9.]/g, "")) || 0;
		addItem({
			productId: produto.id,
			name: produto.titulo,
			price: numericPrice,
			imageUrl: produto.imagemUrl,
		});
		Swal.fire({ toast: true, position: "top-end", icon: "success", title: "Adicionado ao carrinho", showConfirmButton: false, timer: 1200 });
	};

	return (
		<div className="prod-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
			<div className="inner-box">
				<div className="why-block">
					<div className="image-box">
						<div className="image">
							<a href={produto.link}>
								<img src={produto.imagemUrl} alt={produto.titulo} />
							</a>
						</div>
						<div className="hvr-box">
							<div className="hvr-inner">
								<div className="hvr-content">
									<div className="link">
										<a href="#" className="theme-btn" onClick={handleAddToCart}>
											<i className="far fa-shopping-cart"></i> Adicionar ao
											Carrinho
										</a>
									</div>
									<div className="link">
										<a href={produto.link} className="theme-btn">
											<i className="far fa-bars"></i> Detalhes
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="add-fav">
							<a href="#" className="theme-btn">
								<i className="far fa-heart"></i>
							</a>
						</div>
					</div>
					<div className="lower-box">
						<h5>
							<a href={produto.link}>{produto.titulo}</a>
						</h5>
						<div className="price">
							<span>{produto.preco}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProdutoComponente;
