// src/app/Dados/newsData.ts

export interface NewsItem {
	title: string;
	link: string;
	category: string;
	date: string;
	author: string;
	image: string;
	description: string;
	layout: "top" | "bottom"; // Adicionando a propriedade layout
}

export const newsItems: NewsItem[] = [
	{
		title: "THE UPCOMING WBC CHAMP SHIPS 2022 in feb",
		link: "blog-single.html",
		category: "Trekking",
		date: "20 March 2022",
		author: "Sword Joy",
		image: "images/resource/news-1.jpg",
		description:
			"Fight School has specialized in martial arts since 1986 and has one of the most innovative.",
		layout: "top", // Imagem no topo
	},
	{
		title: "THE BEST BOXERS IN THEIR WEIGH Target CATEGOR",
		link: "blog-single.html",
		category: "Trekking",
		date: "20 March 2022",
		author: "Sword Joy",
		image: "images/resource/news-2.jpg",
		description:
			"Fight School has specialized in martial arts since 1986 and has one of the most innovative.",
		layout: "bottom", // Imagem na parte inferior
	},
	{
		title: "THE UPCOMING WBC CHAMP SHIPS 2022 in feb",
		link: "blog-single.html",
		category: "Trekking",
		date: "20 March 2022",
		author: "Sword Joy",
		image: "images/resource/news-1.jpg",
		description:
			"Fight School has specialized in martial arts since 1986 and has one of the most innovative.",
		layout: "top", // Imagem no topo
	},
];
