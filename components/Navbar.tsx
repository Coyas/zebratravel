"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Importing usePathname

const Header = () => {
	const [isSearchVisible, setSearchVisible] = useState(false);
	const pathname = usePathname(); // Use the usePathname hook to get the current path

	const navLinks = [
		{ href: "/", title: "Home" },
		{ href: "/hotels", title: "Acomodações" },
		// { href: "/jazzebra", title: "Restaurante" },
		{ href: "/trekking", title: "Excursões" },
		{ href: "/destinations", title: "Destinos" },
		{ href: "/shop", title: "Loja" },
		{ href: "/blog", title: "Notiçias" },
		// { href: "/about", title: "Sobre Nós" },
		{ href: "/contact", title: "Contato" },
	];

	return (
		<header className="main-header">
			<div className="header-top">
				<div className="auto-container">
					<div className="inner clearfix">
						<div className="top-left clearfix">
							<ul className="info clearfix">
								<li>
									<i className="icon fa fa-envelope"></i>
									<a href="mailto:geral@zebratravel.net">
										GERAL@ZEBRATRAVEL.NET
									</a>
								</li>
								<li>
									<i className="icon fa fa-phone-circle"></i>
									<a href="tel:+2382813373">+238 281 33 73</a>
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
									<li>
										<a href="#">EN</a>
									</li>
									<li>
										<a href="#">Esp</a>
									</li>
									<li>
										<a href="#">Rus</a>
									</li>
								</ul>
							</div>
							<div className="login">
								<i className="icon fa fa-user"></i>
								<Link href="/signin">SIGN IN</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="header-upper">
				<div className="auto-container">
					<div className="main-box clearfix">
						<div className="logo-box">
							<div className="logo">
								<Link href="/" passHref>
									<img src="/images/logo.svg" alt="Treker" title="Treker" />
								</Link>
							</div>
						</div>

						<div className="nav-box clearfix">
							<div className="nav-outer clearfix">
								<nav className="main-menu">
									<ul className="navigation clearfix">
										{navLinks.map(({ href, title }) => (
											<li
												key={href}
												className={pathname === href ? "current" : ""} // Compare pathname to determine active link
											>
												<Link
													href={href}
													onClick={() => setSearchVisible(false)} // Close search if a link is clicked
												>
													{title}
												</Link>
											</li>
										))}
									</ul>
								</nav>
							</div>

							<div className="links-box clearfix">
								<div
									className="link search-btn search-toggle"
									onClick={() => setSearchVisible(!isSearchVisible)}
								>
									<span className="icon far fa-search"></span>
								</div>
								<div className="link fav-btn">
									<a href="#">
										<span className="icon far fa-heart"></span>
										<span className="count">02</span>
									</a>
								</div>
								<div className="link cart-btn">
									<a href="#" className="clearfix">
										<div className="cart-info">
											<span className="icon far fa-shopping-cart"></span>00
											Items
										</div>
										<div className="amount">$ 00:00</div>
									</a>
								</div>
							</div>

							<div className="nav-toggler">
								<button className="hidden-bar-opener">
									<span className="icon">
										<img src="/images/icons/menu-icon.svg" alt="" />
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{isSearchVisible && (
				<div className="search-box">
					<div className="outer-container">
						<div className="inner-box">
							<div className="form-box">
								<div
									className="s-close-btn"
									onClick={() => setSearchVisible(false)}
								>
									<span className="icon far fa-times"></span>
								</div>
								<span className="s-icon fa fa-search"></span>
								<form method="post" action="index.html">
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
		</header>
	);
};

export default Header;
