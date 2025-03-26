// src/app/Dados/tourData.ts

export interface Tour {
	id: number; // ID do tour, como um número
	title: string; // Título do tour
	image: string; // Caminho da imagem do tour
	category: string[]; // Categoria do tour (e.g., "Asia", "Europe")
	tours: number; // Número de tours disponíveis
	description: string; // Descrição do tour
}

export const tourData: Tour[] = [
	{
		id: 1,
		title: "Rajasthan",
		image: "/images/resource/tour-1.jpg",
		category: ["asia", "india"],
		tours: 6,
		description:
			"Experience the royal heritage of Rajasthan, from palaces to deserts.",
	},
	{
		id: 2,
		title: "Indonesia",
		image: "/images/resource/tour-2.jpg",
		category: ["asia", "india"],
		tours: 8,
		description: "Explore the beautiful islands and rich culture of Indonesia.",
	},
	{
		id: 3,
		title: "Helsingfors",
		image: "/images/resource/tour-3.jpg",
		category: ["europe"],
		tours: 5,
		description:
			"Discover the modern architecture and vibrant culture of Helsinki.",
	},
	{
		id: 4,
		title: "Tavastehus",
		image: "/images/resource/tour-4.jpg",
		category: ["europe"],
		tours: 4,
		description:
			"Enjoy the natural beauty and historical sites in Tavastehus, Finland.",
	},
	{
		id: 5,
		title: "Grankulla",
		image: "/images/resource/tour-5.jpg",
		category: ["europe"],
		tours: 7,
		description: "Visit Grankulla for its charming coastal views and parks.",
	},
	{
		id: 6,
		title: "Tuscany",
		image: "/images/resource/tour-6.jpg",
		category: ["europe"],
		tours: 10,
		description:
			"Savor the wines and landscapes of beautiful Tuscany in Italy.",
	},
	{
		id: 7,
		title: "Grand Canyon",
		image: "/images/resource/tour-7.jpg",
		category: ["n-america"],
		tours: 15,
		description:
			"Experience the breathtaking views and hiking trails of the Grand Canyon.",
	},
	{
		id: 8,
		title: "Machu Picchu",
		image: "/images/resource/tour-8.jpg",
		category: ["s-america"],
		tours: 12,
		description:
			"Explore the ancient Incan ruins and stunning scenery of Machu Picchu.",
	},
	{
		id: 9,
		title: "Cape Town",
		image: "/images/resource/tour-9.jpg",
		category: ["africa"],
		tours: 9,
		description:
			"Discover the vibrant culture and natural beauty of Cape Town, South Africa.",
	},
	{
		id: 10,
		title: "Sydney",
		image: "/images/resource/tour-10.jpg",
		category: ["australia"],
		tours: 11,
		description:
			"Experience the iconic Sydney Opera House and stunning harbor views.",
	},
];
