import React, { useState } from "react";
import Link from "next/link";
import { produtosFavoritos } from "@/app/Dados/produtosFavoritos";

interface NavItem {
	label: string;
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
	languageOptions,
	loginText,
	logoSrc,
	navItems,
}) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
	const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

	const contactEmail2 = contactEmail.replace(/\s+/g, "");

	const proNumber: number = produtosFavoritos.length;

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
									<span className="txt">PT</span>
									<span className="icon far fa-angle-down"></span>
								</div>
								<ul className="lang-list">
									{languageOptions.map((lang, index) => (
										<li key={index}>
											<Link href="#">{lang}</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="login">
								<i className="icon fa fa-user"></i>
								<Link href="#">{loginText}</Link>
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
												className={item.subMenu ? "dropdown" : ""}
											>
												<Link href={item.href}>{item.label}</Link>
												{item.subMenu && (
													<ul>
														{item.subMenu.map((subItem, subIndex) => (
															<li key={subIndex}>
																<Link href={subItem.href}>{subItem.label}</Link>
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
									<Link href="#">
										<span className="icon far fa-heart"></span>
										<span className="count">{proNumber}</span>
									</Link>
								</div>
								<div className="link cart-btn">
									<Link href="/favoritos" className="clearfix">
										<div className="cart-info">
											<span className="icon far fa-shopping-cart"></span>00
											Items
										</div>
										<div className="amount">$ 00:00</div>
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
