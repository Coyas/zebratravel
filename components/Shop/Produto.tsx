// src/components/Produto.tsx
import React from "react";
import { Produto } from "@/app/Dados/productsData"; // Caminho correto

interface ProdutoProps {
	produto: Produto;
}

const ProdutoComponente: React.FC<ProdutoProps> = ({ produto }) => {
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
										<a href="#" className="theme-btn">
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
