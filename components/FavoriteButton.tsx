"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { isAuthenticated } from "@/lib/clientAuth";
import { FavoriteItemType } from "@/services/profileService";
import { useFavorites } from "@/lib/useFavorites";

interface FavoriteButtonProps {
	itemType: FavoriteItemType;
	itemId: number;
	title?: string;
	image?: string;
	price?: number;
	subtitle?: string;
	link?: string;
	className?: string;
}

export default function FavoriteButton({ itemType, itemId, title, image, price, subtitle, link, className }: FavoriteButtonProps) {
	const router = useRouter();
	const { isFavorite, toggle } = useFavorites();
	const active = isFavorite(itemType, itemId);

	const handleClick = async (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (!isAuthenticated()) {
			const result = await Swal.fire({
				title: "Inicia sessão",
				text: "Precisas de ter conta para guardar favoritos.",
				icon: "info",
				showCancelButton: true,
				confirmButtonText: "Entrar",
				cancelButtonText: "Cancelar",
			});
			if (result.isConfirmed) router.push("/conta/login");
			return;
		}
		await toggle(itemType, itemId, { title, image, price, subtitle, link });
	};

	return (
		<a
			href="#"
			className={className ?? "theme-btn"}
			onClick={handleClick}
			aria-label={active ? "Remover dos favoritos" : "Adicionar aos favoritos"}
			title={active ? "Remover dos favoritos" : "Adicionar aos favoritos"}
		>
			<i className={active ? "fas fa-heart" : "far fa-heart"} style={active ? { color: "#e74c3c" } : undefined}></i>
		</a>
	);
}
