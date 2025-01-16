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
		// subMenu: [
		// 	{ label: "Home 01", href: "index.html" },
		// 	{ label: "Home 02", href: "index-2.html" },
		// ],
	},
	{
		label: "Sobre Nós",
		href: "/about",
		// subMenu: [
		// 	{ label: "Our Team", href: "team.html" },
		// 	{ label: "Team Member", href: "team-member.html" },
		// 	{ label: "FAQs", href: "faq.html" },
		// ],
	},
	{
		label: "Loja",
		href: "/store",
		// subMenu: [
		// 	{ label: "Our Shop", href: "shop.html" },
		// 	{ label: "Product Details", href: "product-single.html" },
		// ],
	},
	// { label: "D", href: "destinations.html" },
	{ label: "Expedições", href: "/tours" },
	{ label: "Contato", href: "/contact" },
];

const QualSection = ({ sectionType }: any) => {
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

	type CartSidebarProps = {
		items: CartItem[];
		subtotal: number;
		onClose: () => void;
	};

	// Condições de renderização com base no valor de sectionType
	const renderSection = (type: any) => {
		const cartItems = [
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
