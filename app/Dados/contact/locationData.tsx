// src/app/Dados/locationData.ts

export interface LocationPoint {
	id: number;
	address: string;
	link: string;
}

export const locations: LocationPoint[] = [
	{ id: 1, address: "Avenida Amilcar Cabral, Plateau - Praia", link: "#" },
	{
		id: 2,
		address: "Alto São Pedro, São Filipe - Fogo",
		link: "https://maps.app.goo.gl/EhmhbDyUW7TGAg759",
	},
	{ id: 3, address: "Mosteiros - Fogo", link: "#" },
	{ id: 4, address: "Rua Padre Pio, Nova Sintra - Brava", link: "#" },
];
