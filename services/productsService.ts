import { api } from "@/lib/api";

export interface Produto {
	id: number;
	imagemUrl: string;
	titulo: string;
	preco: string;
	link: string;
	categoria: string;
}

interface ProductDto {
	id: number;
	title: string;
	price: number;
	imageUrl: string;
	link: string;
	category: string | null;
}

function fromDto(dto: ProductDto): Produto {
	return {
		id: dto.id,
		imagemUrl: dto.imageUrl,
		titulo: dto.title,
		preco: `${dto.price.toFixed(2)}€`,
		link: dto.link,
		categoria: dto.category ?? "",
	};
}

export const productsService = {
	getAll: async (): Promise<Produto[]> => {
		try {
			const data = await api.get<ProductDto[]>("/api/products");
			return data.map(fromDto);
		} catch (error) {
			console.error("Error fetching products:", error);
			return [];
		}
	},
};
