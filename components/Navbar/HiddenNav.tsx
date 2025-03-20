// HiddenNav.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link"; // Importando Link do Next.js
import Image from "next/image"; // Importando Image do Next.js
import { menuData } from "@/app/Dados/menu"; // Importa o menuData

const HiddenNav: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<section className={`hidden-bar ${isOpen ? "open" : ""}`}>
			<div className="hidden-bar-wrapper">
				{/* Botão de Fechar */}
				<div className="hidden-bar-closer" onClick={toggleNav}>
					<span className="icon">
						<svg className="icon-close" role="presentation" viewBox="0 0 16 14">
							<path
								d="M15 0L1 14m14 0L1 0"
								stroke="currentColor"
								fill="none"
								fillRule="evenodd"
							></path>
						</svg>
					</span>
				</div>

				{/* Seção de Logo */}
				<div className="nav-logo-box">
					<div className="logo">
						<Link href="/" title="Treker">
							{/* Usando o componente Image do Next.js */}
							<Image
								src="/images/logo.svg"
								alt="Treker Logo"
								width={150}
								height={50}
							/>
						</Link>
					</div>
				</div>

				{/* Menu de Navegação */}
				<div className="side-menu">
					<ul className="navigation clearfix">
						{menuData.map((link, index) => (
							<li
								key={index}
								className={
									link.subMenu && link.subMenu.length > 0 ? "dropdown" : ""
								}
							>
								<Link href={link.href}>{link.label}</Link>{" "}
								{/* Usando o componente Link do Next.js */}
								{link.subMenu && link.subMenu.length > 0 && (
									<ul>
										{link.subMenu.map((subLink, subIndex) => (
											<li key={subIndex}>
												<Link href={subLink.href}>{subLink.label}</Link>{" "}
												{/* Usando o componente Link */}
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>

				{/* Seção de Links Extras */}
				<div className="links-box clearfix">
					<div className="clearfix">
						<div className="link">
							<Link href="#" className="theme-btn btn-style-one">
								<span>
									Login<i className="icon far fa-angle-right"></i>
								</span>
							</Link>
						</div>
						<div className="link">
							<Link href="#" className="theme-btn btn-style-two">
								<span>
									Sign Up<i className="icon far fa-angle-right"></i>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HiddenNav;
