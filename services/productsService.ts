import { api } from "@/lib/api";

export interface Produto {
	id: number;
	imagemUrl: string;
	titulo: string;
	preco: string;
	precoOriginal: string | null;
	discountPercent: number | null;
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
	discountPercent: number | null;
	promoPrice: number | null;
}

function fromDto(dto: ProductDto): Produto {
	const hasPromo = dto.promoPrice != null && dto.discountPercent != null;
	return {
		id: dto.id,
		imagemUrl: dto.imageUrl,
		titulo: dto.title,
		preco: `${(hasPromo ? dto.promoPrice! : dto.price).toFixed(2)}€`,
		precoOriginal: hasPromo ? `${dto.price.toFixed(2)}€` : null,
		discountPercent: hasPromo ? dto.discountPercent : null,
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
