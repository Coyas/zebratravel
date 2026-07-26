// src/components/SeçãoDeProdutos.tsx
"use client";

import React, { useState } from "react";
import { Produto } from "@/services/productsService";
import ProdutoComponente from "@/components/Shop/Produto"; // Caminho correto
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

const PAGE_SIZE = 8;
const ALL_CATEGORIES = "all";
const SORT_RECENT = "recent";
const SORT_PRICE_DESC = "price-desc";
const SORT_DATE_ASC = "date-asc";
const SORT_DATE_DESC = "date-desc";

interface SecaoDeProdutosProps {
	produtos: Produto[];
	content?: { title: Localized; text: Localized; seeMore: Localized };
}

const SecaoDeProdutos: React.FC<SecaoDeProdutosProps> = ({ produtos: productsData, content }) => {
	const { locale, t } = useLanguage();
	const data = content
		? { title: pickLocale(content.title, locale), text: pickLocale(content.text, locale), seeMore: pickLocale(content.seeMore, locale) }
		: {
				title: "Produtos em Destaque",
				text: "Desde 2014, ajudámos mais de 500.000 pessoas de todas as idades a viver a melhor experiência ao ar livre das suas vidas. Seja para um dia ou umas férias de duas semanas, perto de casa ou num destino internacional.",
				seeMore: "Carregar Mais......",
			};

	const sortLabels: Record<string, string> = {
		[SORT_RECENT]: t("shop.sortRecent"),
		[SORT_PRICE_DESC]: t("shop.sortPriceDesc"),
		[SORT_DATE_ASC]: t("shop.sortDateAsc"),
		[SORT_DATE_DESC]: t("shop.sortDateDesc"),
	};

	// Estado para armazenar os filtros e ordenação (valores internos, independentes do idioma)
	const [categoria, setCategoria] = useState<string>(ALL_CATEGORIES);
	const [ordenacao, setOrdenacao] = useState<string>(SORT_RECENT);
	const [visible, setVisible] = useState(PAGE_SIZE);

	// Função para aplicar os filtros
	const filtrarProdutos = () => {
		let produtosFiltrados = productsData;

		// Filtrar por categoria
		if (categoria !== ALL_CATEGORIES) {
			produtosFiltrados = produtosFiltrados.filter(
				(produto) => produto.categoria.toLowerCase() === categoria.toLowerCase()
			);
		}

		// Ordenar os produtos com base na opção selecionada
		switch (ordenacao) {
			case SORT_PRICE_DESC:
				produtosFiltrados = produtosFiltrados.sort(
					(a, b) =>
						parseFloat(b.preco.replace("€", "").replace(",", ".")) -
						parseFloat(a.preco.replace("€", "").replace(",", "."))
				);
				break;
			case SORT_DATE_ASC:
				produtosFiltrados = produtosFiltrados.sort(
					(a, b) => new Date(a.link).getTime() - new Date(b.link).getTime()
				);
				break;
			case SORT_DATE_DESC:
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
		setVisible(PAGE_SIZE);
	};

	// Função para atualizar a ordenação
	const mudarOrdenacao = (ordenacaoSelecionada: string) => {
		setOrdenacao(ordenacaoSelecionada);
	};

	// Filtrar os produtos de acordo com a categoria e ordenação selecionada
	const produtosFiltrados = filtrarProdutos();
	const produtosVisiveis = produtosFiltrados.slice(0, visible);
	const temMais = visible < produtosFiltrados.length;

	// Gerar categorias únicas a partir dos produtos
	const categorias = [
		ALL_CATEGORIES,
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
						<span>{data.title}</span>
					</h2>
					<div className="text">{data.text}</div>
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
										{categoriaItem === ALL_CATEGORIES ? t("shop.allCategories") : categoriaItem}
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
										{t("shop.sortBy")}: {sortLabels[ordenacao]}
									</a>
									<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
										<li>
											<a onClick={() => mudarOrdenacao(SORT_RECENT)}>
												{sortLabels[SORT_RECENT]}
											</a>
										</li>
										<li>
											<a onClick={() => mudarOrdenacao(SORT_PRICE_DESC)}>
												{sortLabels[SORT_PRICE_DESC]}
											</a>
										</li>
										<li>
											<a onClick={() => mudarOrdenacao(SORT_DATE_ASC)}>
												{sortLabels[SORT_DATE_ASC]}
											</a>
										</li>
										<li>
											<a onClick={() => mudarOrdenacao(SORT_DATE_DESC)}>
												{sortLabels[SORT_DATE_DESC]}
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="results-info">
					{t("shop.showing")} {produtosVisiveis.length} {t("shop.of")} {produtosFiltrados.length} {t("shop.results")}
				</div>
				<div className="row clearfix">
					{produtosVisiveis.map((produto) => (
						<ProdutoComponente key={produto.id} produto={produto} />
					))}
				</div>

				{temMais && (
				<div className="see-more-link">
					<a
						href="#"
						className="theme-btn btn-style-one"
						onClick={(e) => {
							e.preventDefault();
							setVisible((v) => v + PAGE_SIZE);
						}}
					>
						<span>{data.seeMore}</span>
					</a>
				</div>
				)}
			</div>
		</section>
	);
};

export default SecaoDeProdutos;
