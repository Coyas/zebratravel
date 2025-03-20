// src/app/Dados/produtosFavoritos.tsx

export interface ProdutoFavorito {
	imageUrl: string;
	title: string;
	price: string;
	date: string;
}

export const produtosFavoritos: ProdutoFavorito[] = [
	{
		imageUrl: "images/resource/shop/s-cart-thumb.jpg",
		title: "Smart Air Bag Travel",
		price: "$225.00",
		date: "April 02, 2022",
	},
	{
		imageUrl: "images/resource/shop/s-cart-thumb.jpg",
		title: "Teste dos produtos kkkk",
		price: "$225.00",
		date: "April 02, 2022",
	},
];
