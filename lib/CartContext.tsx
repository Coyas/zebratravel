"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface CartItem {
	productId: number;
	name: string;
	price: number;
	imageUrl: string;
	quantity: number;
}

interface CartContextValue {
	items: CartItem[];
	addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
	removeItem: (productId: number) => void;
	setQuantity: (productId: number, quantity: number) => void;
	clear: () => void;
	subtotal: number;
	count: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "zebratravel_cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([]);

	useEffect(() => {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			try {
				setItems(JSON.parse(stored));
			} catch {
				// ignore malformed cart
			}
		}
	}, []);

	const persist = (next: CartItem[]) => {
		setItems(next);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
	};

	const addItem: CartContextValue["addItem"] = (item, quantity = 1) => {
		setItems((prev) => {
			const existing = prev.find((i) => i.productId === item.productId);
			const next = existing
				? prev.map((i) => (i.productId === item.productId ? { ...i, quantity: i.quantity + quantity } : i))
				: [...prev, { ...item, quantity }];
			localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
			return next;
		});
	};

	const removeItem = (productId: number) => {
		persist(items.filter((i) => i.productId !== productId));
	};

	const setQuantity = (productId: number, quantity: number) => {
		if (quantity <= 0) {
			removeItem(productId);
			return;
		}
		persist(items.map((i) => (i.productId === productId ? { ...i, quantity } : i)));
	};

	const clear = () => persist([]);

	const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
	const count = items.reduce((sum, i) => sum + i.quantity, 0);

	return (
		<CartContext.Provider value={{ items, addItem, removeItem, setQuantity, clear, subtotal, count }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart(): CartContextValue {
	const ctx = useContext(CartContext);
	if (!ctx) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return ctx;
}
