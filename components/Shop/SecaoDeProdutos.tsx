// src/components/SeçãoDeProdutos.tsx
import React, { useState } from "react";
import { productsData } from "@/app/Dados/productsData";
import ProdutoComponente from "@/components/Shop/Produto"; // Caminho correto

const SecaoDeProdutos: React.FC = () => {
	// Estado para armazenar os filtros e ordenação
	const [categoria, setCategoria] = useState<string>("Todos");
	const [ordenacao, setOrdenacao] = useState<string>("Mais Recentes");

	// Função para aplicar os filtros
	const filtrarProdutos = () => {
		let produtosFiltrados = productsData;

		// Filtrar por categoria
		if (categoria !== "Todos") {
			produtosFiltrados = produtosFiltrados.filter(
				(produto) => produto.categoria.toLowerCase() === categoria.toLowerCase()
			);
		}

		// Ordenar os produtos com base na opção selecionada
		switch (ordenacao) {
			case "Preço: Maior para Menor":
				produtosFiltrados = produtosFiltrados.sort(
					(a, b) =>
						parseFloat(b.preco.replace("€", "").replace(",", ".")) -
						parseFloat(a.preco.replace("€", "").replace(",", "."))
				);
				break;
			case "Data: Ascendente":
				produtosFiltrados = produtosFiltrados.sort(
					(a, b) => new Date(a.link).getTime() - new Date(b.link).getTime()
				);
				break;
			case "Data: Descendente":
				produtosFiltrados = produtosFiltrados.sort(
					(a, b) => new Date(b.link).getTime() - new Date(a.link).getTime()
				);
				break;
			default:
				break;
		}

		return produtosFiltrados;
	};

	// Função para atualizar a categoria
	const mudarCategoria = (categoriaSelecionada: string) => {
		setCategoria(categoriaSelecionada);
	};

	// Função para atualizar a ordenação
	const mudarOrdenacao = (ordenacaoSelecionada: string) => {
		setOrdenacao(ordenacaoSelecionada);
	};

	// Filtrar os produtos de acordo com a categoria e ordenação selecionada
	const produtosFiltrados = filtrarProdutos();

	// Gerar categorias únicas a partir dos produtos
	const categorias = [
		"Todos",
		...new Set(productsData.map((produto) => produto.categoria)),
	];

	return (
		<section className="products-section products-page">
			<div className="floated-icon left">
				<img src="images/resource/stones-left.svg" alt="" title="" />
			</div>
			<div className="floated-icon right">
				<img src="images/resource/stones-right.svg" alt="" title="" />
			</div>
			<div className="floated-icon right-2">
				<img src="images/resource/plant-icon.svg" alt="" title="" />
			</div>
			<div className="auto-container">
				<div className="title-box centered">
					<h2>
						<span>Produtos em Destaque</span>
					</h2>
					<div className="text">
						Desde 2014, ajudámos mais de 500.000 pessoas de todas as idades a
						viver a melhor experiência ao ar livre das suas vidas. Seja para um
						dia ou umas férias de duas semanas, perto de casa ou num destino
						internacional.
					</div>
				</div>

				<div className="filters-row clearfix">
					<div className="cat-links">
						<ul className="clearfix">
							{categorias.map((categoriaItem) => (
								<li key={categoriaItem}>
									<a
										className={categoria === categoriaItem ? "active" : ""}
										onClick={() => mudarCategoria(categoriaItem)}
									>
										{categoriaItem}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="sort-by">
						<div className="drop-list-one">
							<div className="inner clearfix">
								<div className="dropdown-outer open">
									<a
										className="btn-box dropdown-toggle"
										id="dropdownMenu1"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="true"
									>
										Ordenar por: {ordenacao}
									</a>
									<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
										<li>
											<a onClick={() => mudarOrdenacao("Mais Recentes")}>
												Mais Recentes
											</a>
										</li>
										<li>
											<a
												onClick={() =>
													mudarOrdenacao("Preço: Maior para Menor")
												}
											>
												Preço: Maior para Menor
											</a>
										</li>
										<li>
											<a onClick={() => mudarOrdenacao("Data: Ascendente")}>
												Data: Ascendente
											</a>
										</li>
										<li>
											<a onClick={() => mudarOrdenacao("Data: Descendente")}>
												Data: Descendente
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="results-info">
					Mostrando todos os {produtosFiltrados.length} resultados
				</div>
				<div className="row clearfix">
					{produtosFiltrados.map((produto) => (
						<ProdutoComponente key={produto.titulo} produto={produto} />
					))}
				</div>

				<div className="see-more-link">
					<a href="#" className="theme-btn btn-style-one">
						<span>Carregar Mais......</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default SecaoDeProdutos;
