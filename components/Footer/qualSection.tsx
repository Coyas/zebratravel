"use client";

import Footer from "@/components/Footer/Footer";
import HFooter from "@/components/Footer/HFooter";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Navbar/Header";
import { usePathname } from "next/navigation";
import CartSidebar from "../CartSidebar";
import { useState } from "react";

const navItems = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Sobre Nós",
		href: "/about",
	},
	{
		label: "Loja",
		href: "/store",
	},
	{
		label: "Expedições",
		href: "/tours",
	},
	{
		label: "Contato",
		href: "/contact",
	},
];

type SectionType = 0 | 1; // Tipando como número para os valores possíveis (0 ou 1)

const QualSection = ({ sectionType }: { sectionType: SectionType }) => {
	const pathname = usePathname();

	// Verifica se a rota atual é a página inicial
	const isHomePage = pathname === "/";

	type CartItem = {
		id: number;
		name: string;
		price: number;
		quantity: number;
		imageUrl: string;
	};

	// Dados de exemplo para o carrinho
	const cartItems: CartItem[] = [
		{
			id: 1,
			name: "Smart Air Bag Travel",
			price: 225.0,
			quantity: 1,
			imageUrl: "/images/resource/shop/shop-thumb-1.jpg",
		},
		{
			id: 2,
			name: "Smart Backpack",
			price: 150.0,
			quantity: 2,
			imageUrl: "/images/resource/shop/shop-thumb-2.jpg",
		},
		{
			id: 3,
			name: "Smart Backpack",
			price: 150.0,
			quantity: 2,
			imageUrl: "/images/resource/shop/shop-thumb-2.jpg",
		},
		{
			id: 4,
			name: "Smart Backpack",
			price: 150.0,
			quantity: 2,
			imageUrl: "/images/resource/shop/shop-thumb-2.jpg",
		},
		{
			id: 5,
			name: "Smart Backpack",
			price: 150.0,
			quantity: 2,
			imageUrl: "/images/resource/shop/shop-thumb-2.jpg",
		},
	];

	// Calculando o subtotal
	const subtotal = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	const [isCartOpen, setIsCartOpen] = useState(false);

	const handleCartToggle = () => {
		setIsCartOpen(!isCartOpen);
	};

	const renderSection = (type: SectionType) => {
		if (type === 1) {
			return (
				<>
					<CartSidebar
						items={cartItems}
						subtotal={subtotal}
						onClose={handleCartToggle}
					/>
					{/* Navbar é renderizado apenas na página inicial */}
					{isHomePage && (
						<Navbar
							contactEmail="Geral@zebratravel.net"
							contactPhone="+238 281 33 73"
							languageOptions={["PT", "EN", "Rus"]}
							loginText="SIGN IN"
							logoSrc="/images/logo.svg"
							navItems={navItems}
						/>
					)}
					{/* Header é renderizado em todas as páginas, exceto na home */}
					{!isHomePage && <Header />}
				</>
			);
		} else if (type === 0) {
			return (
				<>
					{/* HFooter é renderizado apenas na página inicial */}
					{isHomePage && <HFooter />}
					{/* Footer é renderizado em todas as páginas, exceto na home */}
					{!isHomePage && <Footer />}
				</>
			);
		}
	};

	return <>{renderSection(sectionType)}</>;
};

export default QualSection;
