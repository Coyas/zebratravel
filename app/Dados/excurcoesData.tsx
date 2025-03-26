export type Excursao = {
	title: string;
	image: string;
	price: number;
	duration: string;
	location: string;
	rating: number;
	reviews: number;
	description: string;
	categories: string[];
};

export const excursoesData: Excursao[] = [
	{
		title: "Moscow Red City Land",
		image: "/images/resource/f-image-1.jpg",
		price: 120,
		duration: "5 days",
		location: "259P, Himalaya Ag",
		rating: 4,
		reviews: 5,
		description:
			"Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you.",
		categories: ["easy-m", "popular"],
	},
	{
		title: "Yellowstone & Mt Rushm",
		image: "/images/resource/f-image-2.jpg",
		price: 120,
		duration: "5 days",
		location: "259P, Himalaya Ag",
		rating: 4,
		reviews: 5,
		description:
			"Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you.",
		categories: ["moderate", "wild"],
	},
	{
		title: "Los Angeles to San Franc",
		image: "/images/resource/f-image-3.jpg",
		price: 120,
		duration: "5 days",
		location: "259P, Himalaya Ag",
		rating: 4,
		reviews: 5,
		description:
			"Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you.",
		categories: ["m-difficult", "urban"],
	},
	{
		title: "Best Of Switzerland",
		image: "/images/resource/f-image-4.jpg",
		price: 120,
		duration: "5 days",
		location: "259P, Himalaya Ag",
		rating: 4,
		reviews: 5,
		description:
			"Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you.",
		categories: ["difficult", "mountains"],
	},
	{
		title: "Italian Dolomites",
		image: "/images/resource/f-image-5.jpg",
		price: 120,
		duration: "5 days",
		location: "259P, Himalaya Ag",
		rating: 4,
		reviews: 5,
		description:
			"Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you.",
		categories: ["easy-m", "hiking"],
	},
];

export default excursoesData;
