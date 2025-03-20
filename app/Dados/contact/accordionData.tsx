// src/app/Dados/accordionData.ts

export interface AccordionItem {
	title: string;
	content: string;
}

export const accordionItems: AccordionItem[] = [
	{
		title: "Como localizar a zebra?",
		content:
			"A ZebraTravel está localizada em vários pontos, você pode consultar nossos locais no mapa.",
	},
	{
		title: "Tem restaurante na zebratravel?",
		content:
			"Sim, a ZebraTravel oferece opções gastronômicas de qualidade em diversos locais.",
	},
	{
		title: "Devo-me preocupar com a altitude do vulcão?",
		content:
			"Não se preocupe! A equipe da ZebraTravel oferece todo o apoio necessário durante as viagens.",
	},
];
