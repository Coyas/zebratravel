// src/app/Dados/travelPackagesData.ts

export interface TravelPackage {
	title: string;
	duration: string;
	location: string;
	price: string;
	description: string;
	link: string;
	imageUrl: string;
}

export const travelPackages: TravelPackage[] = [
	{
		title: "Grupo para Vulcao",
		duration: "5 days",
		location: "Pico Maior, Vulcão",
		price: "$75",
		description:
			"Uma jornada cansativa e dificil, com muitos obstáculos geológicos e um sol escaldante.",
		link: "#",
		imageUrl: "/images/background/image-2.jpg",
	},
	{
		title: "Grupo para Salinas",
		duration: "5 days",
		location: "Dentro Salinas",
		price: "$70",
		description:
			"Flora e fauna endêmica da salina, e a mini floresta das áreas mais verdes do Fogo.",
		link: "#",
		imageUrl: "/images/background/image-2.jpg",
	},
];
