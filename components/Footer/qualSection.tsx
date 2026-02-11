"use client";

import Footer from "@/components/Footer/Footer";
import HFooter from "@/components/Footer/HFooter";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Navbar/Header";
import { usePathname } from "next/navigation";
import CartSidebar from "../CartSidebar";
import { useState } from "react";

// Importando os dados do menu e do carrinho
import { menuData } from "@/app/Dados/menu"; // Ajuste o caminho conforme sua estrutura de pastas
import { cartItems } from "@/app/Dados/cartItems"; // Novo caminho para o arquivo cartItems.ts

type SectionType = 0 | 1; // Tipando como número para os valores possíveis (0 ou 1)

interface QualSectionProps {
	sectionType: SectionType;
	footerContent?: any;
}

const QualSection: React.FC<QualSectionProps> = ({ sectionType, footerContent }) => {
	const pathname = usePathname();

	// Verifica se a rota atual é a página inicial
	const isHomePage = pathname === "/";

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
							navItems={menuData} // Usando os dados importados de menuData.ts
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
					{isHomePage && <HFooter content={footerContent} />}
					{/* Footer é renderizado em todas as páginas, exceto na home */}
					{!isHomePage && <Footer content={footerContent} />}
				</>
			);
		}
	};

	return <>{renderSection(sectionType)}</>;
};

export default QualSection;
