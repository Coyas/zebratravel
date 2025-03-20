// Header.tsx
import React from "react";
import Link from "next/link";
import { menuData } from "@/app/Dados/menu";
import { produtosFavoritos } from "@/app/Dados/produtosFavoritos";

const Header: React.FC = () => {
	const proNumber: number = produtosFavoritos.length;
	return (
		<header className="main-header header-style-two">
			{/* Header Upper */}
			<div className="header-upper">
				<div className="auto-container">
					{/* Main Box */}
					<div className="main-box clearfix">
						{/* Logo */}
						<div className="logo-box">
							<div className="logo">
								<Link href="/" title="Treker">
									<img src="/images/logo.svg" alt="Treker" title="Treker" />
								</Link>
							</div>
						</div>

						<div className="nav-box clearfix">
							{/* Nav Outer */}
							<div className="nav-outer clearfix">
								<nav className="main-menu">
									<ul className="navigation clearfix">
										{menuData.map((item, index) => (
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

							{/* Links Box */}
							<div className="links-box clearfix">
								<div className="link search-btn search-toggle">
									<span className="icon far fa-search"></span>
								</div>
								<div className="link fav-btn">
									<Link href="/favoritos">
										<span className="icon far fa-heart"></span>
										<span className="count">{proNumber}</span>
									</Link>
								</div>
								<div className="link cart-btn">
									<Link href="#" className="clearfix">
										<div className="cart-info">
											<span className="icon far fa-shopping-cart"></span>00
											Items
										</div>
									</Link>
								</div>
							</div>

							{/* Hidden Nav Toggler */}
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

			{/* Search Box */}
			<div className="search-box">
				<div className="outer-container">
					<div className="inner-box">
						<div className="form-box">
							<div className="s-close-btn">
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
		</header>
	);
};

export default Header;
