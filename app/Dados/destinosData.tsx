// src/app/Dados/destinosData.ts

export interface Destino {
	nome: string;
	imagem: string;
	tours: number;
	colSize: string;
}

export const destinos: Destino[] = [
	{
		nome: "Praia",
		imagem: "/images/resource/gallery-1.jpg",
		tours: 15,
		colSize: "col-lg-8 col-md-12 col-sm-12",
	},
	{
		nome: "Fogo",
		imagem: "/images/resource/gallery-2.jpg",
		tours: 15,
		colSize: "column-width col-lg-4 col-md-6 col-sm-12",
	},
	{
		nome: "Sal",
		imagem: "/images/resource/gallery-3.jpg",
		tours: 15,
		colSize: "col-lg-6 col-md-6 col-sm-12",
	},
	{
		nome: "São Vicente",
		imagem: "/images/resource/gallery-4.jpg",
		tours: 15,
		colSize: "col-lg-6 col-md-6 col-sm-12",
	},
	{
		nome: "Boa Vista",
		imagem: "/images/resource/gallery-5.jpg",
		tours: 15,
		colSize: "column-width col-lg-4 col-md-6 col-sm-12",
	},
	{
		nome: "Maio",
		imagem: "/images/resource/gallery-6.jpg",
		tours: 15,
		colSize: "col-lg-8 col-md-12 col-sm-12",
	},
];
