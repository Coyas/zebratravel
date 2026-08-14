"use client";

import { useEffect, useState } from "react";
import { profileService, Favorite, FavoriteItemType } from "@/services/profileService";
import { isAuthenticated } from "@/lib/clientAuth";

// Cache simples em módulo (fora do React) partilhado por todos os botões de favorito
// da página — evita um pedido GET /api/favorites por cada card/botão renderizado.
let cache: Favorite[] | null = null;
let inflight: Promise<Favorite[]> | null = null;
const listeners = new Set<(favs: Favorite[]) => void>();

function notify(favs: Favorite[]) {
	cache = favs;
	listeners.forEach((l) => l(favs));
}

function fetchFavorites(): Promise<Favorite[]> {
	if (!isAuthenticated()) return Promise.resolve([]);
	if (cache) return Promise.resolve(cache);
	if (!inflight) {
		inflight = profileService
			.getMyFavorites()
			.then((data) => {
				inflight = null;
				notify(data);
				return data;
			})
			.catch(() => {
				inflight = null;
				return [];
			});
	}
	return inflight;
}

export function useFavorites() {
	const [favorites, setFavorites] = useState<Favorite[]>(cache ?? []);

	useEffect(() => {
		listeners.add(setFavorites);
		fetchFavorites().then(setFavorites);
		return () => {
			listeners.delete(setFavorites);
		};
	}, []);

	const isFavorite = (itemType: FavoriteItemType, itemId: number) =>
		favorites.some((f) => f.itemType === itemType && f.itemId === itemId);

	const toggle = async (itemType: FavoriteItemType, itemId: number, meta?: Partial<Favorite>) => {
		const current = cache ?? favorites;
		const already = current.some((f) => f.itemType === itemType && f.itemId === itemId);

		if (already) {
			notify(current.filter((f) => !(f.itemType === itemType && f.itemId === itemId)));
			try {
				await profileService.removeFavorite(itemType, itemId);
			} catch {
				cache = null;
				fetchFavorites();
			}
		} else {
			const optimistic: Favorite = {
				itemType,
				itemId,
				title: meta?.title ?? "",
				subtitle: meta?.subtitle ?? null,
				image: meta?.image ?? "",
				price: meta?.price ?? 0,
				link: meta?.link ?? "",
			};
			notify([...current, optimistic]);
			try {
				await profileService.addFavorite(itemType, itemId);
				cache = null;
				fetchFavorites();
			} catch {
				notify(current);
			}
		}
	};

	return { favorites, isFavorite, toggle, loading: cache === null };
}

// Chamado depois de login/logout para não mostrar favoritos do utilizador anterior.
export function resetFavoritesCache() {
	cache = null;
	inflight = null;
}
