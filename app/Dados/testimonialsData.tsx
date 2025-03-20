// src/app/Dados/testimonialsData.ts

export interface Testimonial {
	image: string;
	text: string;
	name: string;
	designation: string;
	rating: number;
	backgroundImage?: string;
	link?: string;
}

export const testimonials: Testimonial[] = [
	{
		image: "/images/resource/testi-thumb-1.jpg",
		text: "Fight School has specialized in martial arts since 1986 and has one of the most Fight School has specialized.",
		name: "Randall Schwartz",
		designation: "Women's Trainer",
		rating: 5,
	},
	{
		image: "/images/resource/testi-thumb-2.jpg",
		text: "We teach martial arts because we love it — not because we want to make money on you. Unlike other martial.",
		name: "Andru Smith",
		designation: "Boxing Trainer",
		rating: 5,
	},
	{
		image: "/images/resource/testi-thumb-2.jpg",
		text: "We teach martial arts because we love it — not because we want to make money on you. Unlike other martial.",
		name: "Andru Smith",
		designation: "Boxing Trainer",
		rating: 5,
	},
	// Mais testemunhos podem ser adicionados aqui.
];
