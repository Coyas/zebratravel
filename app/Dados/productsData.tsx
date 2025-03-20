// src/app/Dados/productsData.ts

export interface Product {
	imageUrl: string;
	title: string;
	price: string;
	link: string;
}

export const products: Product[] = [
	{
		imageUrl: "/images/resource/shop/prod-1.jpg",
		title: "Smart Air Bag Travel",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-2.jpg",
		title: "Travel Suitcase Bag",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-3.jpg",
		title: "Travel Light Suitcase",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-4.jpg",
		title: "Smart Travel Gadgets",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-5.jpg",
		title: "Set of Black Silk Pillow",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-6.jpg",
		title: "Travel Slipping Support",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-7.jpg",
		title: "Travelling Black Suitcase",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-8.jpg",
		title: "Coffee Travel Mug",
		price: "$225.00",
		link: "product-single.html",
	},
];
