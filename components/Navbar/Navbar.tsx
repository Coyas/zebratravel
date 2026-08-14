"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavItemActive, isPathActive } from "@/lib/isActive";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { locales, localeLabels } from "@/lib/i18n/translations";
import { useCart } from "@/lib/CartContext";
import { useFavorites } from "@/lib/useFavorites";

interface NavItem {
	label: string;
	i18nKey?: string;
	href: string;
	subMenu?: NavItem[];
}

interface HeaderProps {
	contactEmail: string;
	contactPhone: string;
	languageOptions: string[];
	loginText: string;
	logoSrc: string;
	navItems: NavItem[];
}

const Navbar: React.FC<HeaderProps> = ({
	contactEmail,
	contactPhone,
	logoSrc,
	navItems,
}) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const pathname = usePathname();
	const { locale, setLocale, t } = useLanguage();
	const { count: cartCount, subtotal: cartSubtotal } = useCart();

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
	const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

	const contactEmail2 = contactEmail.replace(/\s+/g, "");

	const { favorites } = useFavorites();
	const proNumber: number = favorites.length;

	return (
		<header className="main-header">
			{/* Header Top Section */}
			<div className="header-top">
				<div className="auto-container">
					<div className="inner clearfix">
						<div className="top-left clearfix">
							<ul className="info clearfix">
								<li>
									<i className="icon fa fa-envelope"></i>
									<Link href={`mailto:${contactEmail2}`}>{contactEmail}</Link>
								</li>
								<li>
									<i className="icon fa fa-phone-circle"></i>
									<Link href={`tel:${contactPhone}`}>{contactPhone}</Link>
								</li>
							</ul>
						</div>
						<div className="top-right clearfix">
							<div className="lang-box">
								<div className="lang-btn clearfix">
									<span className="img far fa-globe-americas"></span>
									<span className="txt">{localeLabels[locale]}</span>
									<span className="icon far fa-angle-down"></span>
								</div>
								<ul className="lang-list">
									{locales.map((code) => (
										<li key={code}>
											<a
												href="#"
												onClick={(e) => {
													e.preventDefault();
													setLocale(code);
												}}
											>
												{localeLabels[code]}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="login">
								<i className="icon fa fa-user"></i>
								<Link href="/conta/perfil">{t("nav.minhaConta")}</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Header Upper Section */}
			<div className="header-upper">
				<div className="auto-container">
					<div className="main-box clearfix">
						{/* Logo */}
						<div className="logo-box">
							<div className="logo">
								<Link href="/" title="Zebra">
									<img src={logoSrc} alt="Zebra Logo" />
								</Link>
							</div>
						</div>

						{/* Navigation */}
						<div className="nav-box clearfix">
							<div className="nav-outer clearfix">
								<nav className="main-menu">
									<ul className="navigation clearfix">
										{navItems.map((item, index) => (
											<li
												key={index}
												className={[item.subMenu ? "dropdown" : "", isNavItemActive(item, pathname) ? "current" : ""].filter(Boolean).join(" ")}
											>
												<Link href={item.href}>{item.i18nKey ? t(item.i18nKey) : item.label}</Link>
												{item.subMenu && (
													<ul>
														{item.subMenu.map((subItem, subIndex) => (
															<li key={subIndex} className={isPathActive(subItem.href, pathname) ? "current" : ""}>
																<Link href={subItem.href}>{subItem.i18nKey ? t(subItem.i18nKey) : subItem.label}</Link>
															</li>
														))}
													</ul>
												)}
											</li>
										))}
									</ul>
								</nav>
							</div>

							{/* Links Section */}
							<div className="links-box clearfix">
								<div
									className="link search-btn search-toggle"
									onClick={toggleSearch}
								>
									<span className="icon far fa-search"></span>
								</div>
								<div className="link fav-btn">
									<Link href="/favoritos">
										<span className="icon far fa-heart"></span>
										<span className="count">{proNumber}</span>
									</Link>
								</div>
								<div className="link cart-btn">
									<Link href="/checkout" className="clearfix">
										<div className="cart-info">
											<span className="icon far fa-shopping-cart"></span>
											{String(cartCount).padStart(2, "0")} Items
										</div>
										<div className="amount">${cartSubtotal.toFixed(2)}</div>
									</Link>
								</div>
								<div className="link account-btn">
									<Link href="/conta/perfil">
										<span className="icon far fa-user"></span>
									</Link>
								</div>
							</div>

							{/* Sidebar Toggler */}
							<div className="nav-toggler">
								<button className="hidden-bar-opener" onClick={toggleSidebar}>
									<span className="icon">
										<img src="/images/icons/menu-icon.svg" alt="Menu Icon" />
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Search Box */}
			{isSearchOpen && (
				<div className="search-box">
					<div className="outer-container">
						<div className="inner-box">
							<div className="form-box">
								<div className="s-close-btn" onClick={toggleSearch}>
									<span className="icon far fa-times"></span>
								</div>
								<span className="s-icon fa fa-search"></span>
								<form method="post" action="#">
									<div className="form-group">
										<input
											type="search"
											name="search"
											placeholder="Search Here"
											required
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Sidebar */}
			{isSidebarOpen && (
				<div className="hidden-sidebar">
					{/* Implement hidden sidebar content here */}
					<button onClick={toggleSidebar}>Close Sidebar</button>
				</div>
			)}
		</header>
	);
};

export default Navbar;
