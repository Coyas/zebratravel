// src/app/Dados/excursionsData.ts

export interface Excursion {
	id: number;
	title: string;
	slug: string;
	image: {
		url: string;
	};
	price: number;
	days: number;
	location: string;
	rating: number;
	reviews: number;
	description: string;
}

export const excursionData: Excursion[] = [
	{
		id: 1,
		title: "Pico do Fogo",
		slug: "pico-do-fogo-vulcao",
		image: {
			url: "/images/resource/f-image-1.jpg", // Link da imagem do Pico do Fogo
		},
		price: 150,
		days: 3,
		location: "Pico do Fogo, Ilha do Fogo",
		rating: 5,
		reviews: 12,
		description:
			"Suba até o cume do vulcão ativo para uma vista incrível da ilha e das crateras ao redor.",
	},
	{
		id: 2,
		title: "Chã das Caldeiras",
		slug: "cha-das-caldeiras",
		image: {
			url: "/images/resource/f-image-2.jpg", // Link da imagem de Chã das Caldeiras
		},
		price: 120,
		days: 2,
		location: "Chã das Caldeiras, Ilha do Fogo",
		rating: 4,
		reviews: 8,
		description:
			"Explore a vila dentro da cratera do vulcão, com paisagens únicas e vinhedos locais.",
	},
	{
		id: 3,
		title: "São Filipe",
		slug: "sao-filipe-ilha-do-fogo",
		image: {
			url: "/images/resource/f-image-3.jpg", // Link da imagem de São Filipe
		},
		price: 100,
		days: 1,
		location: "São Filipe, Ilha do Fogo",
		rating: 4,
		reviews: 9,
		description:
			"Passeie pela charmosa cidade de São Filipe, com suas ruas históricas e vistas para o oceano.",
	},
	{
		id: 4,
		title: "Mosteiros",
		slug: "mosteiros-ilha-do-fogo",
		image: {
			url: "/images/resource/f-image-4.jpg", // Link da imagem de Mosteiros
		},
		price: 130,
		days: 2,
		location: "Mosteiros, Ilha do Fogo",
		rating: 4,
		reviews: 7,
		description:
			"Visite os Mosteiros, com suas paisagens dramáticas e áreas perfeitas para caminhadas.",
	},
	{
		id: 5,
		title: "Praia de São Jorge",
		slug: "praia-sao-jorge",
		image: {
			url: "/images/resource/f-image-5.jpg", // Link da imagem de Praia de São Jorge
		},
		price: 110,
		days: 1,
		location: "Praia de São Jorge, Ilha do Fogo",
		rating: 5,
		reviews: 15,
		description:
			"Relaxe na Praia de São Jorge, uma das praias mais bonitas da ilha, com águas cristalinas.",
	},
	{
		id: 6,
		title: "Vila de Patim",
		slug: "vila-de-patim",
		image: {
			url: "/images/resource/f-image-5.jpg", // Link da imagem de Vila de Patim
		},
		price: 90,
		days: 1,
		location: "Vila de Patim, Ilha do Fogo",
		rating: 4,
		reviews: 6,
		description:
			"Descubra a tranquilidade da Vila de Patim, com suas belas paisagens rurais e cultura local.",
	},
];
