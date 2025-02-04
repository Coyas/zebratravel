import React, { useState } from "react";

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

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	};
	const contactEmail2 = contactEmail.replace(/\s+/g, "");
	return (
		<header className="main-header">
			<div className="header-top">
				<div className="auto-container">
					<div className="inner clearfix">
						<div className="top-left clearfix">
							<ul className="info clearfix">
								<li>
									<i className="icon fa fa-envelope"></i>{" "}
									<a href={`mailto:${contactEmail2}`}>{contactEmail}</a>
								</li>
								<li>
									<i className="icon fa fa-phone-circle"></i>{" "}
									<a href={`tel:${contactPhone}`}>{contactPhone}</a>
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
											<a href="#">{lang}</a>
										</li>
									))}
								</ul>
							</div>
							<div className="login">
								<i className="icon fa fa-user"></i> <a href="#">{loginText}</a>
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
								<a href="/" title="Zebra">
									<img src={logoSrc} alt="Zebra Logo" />
								</a>
							</div>
						</div>
						<div className="nav-box clearfix">
							<div className="nav-outer clearfix">
								<nav className="main-menu">
									<ul className="navigation clearfix">
										{navItems.map((item, index) => (
											<li
												key={index}
												className={item.subMenu ? "dropdown" : ""}
											>
												<a href={item.href}>{item.label}</a>
												{item.subMenu && (
													<ul>
														{item.subMenu.map((subItem, subIndex) => (
															<li key={subIndex}>
																<a href={subItem.href}>{subItem.label}</a>
															</li>
														))}
													</ul>
												)}
											</li>
										))}
									</ul>
								</nav>
							</div>
							<div className="links-box clearfix">
								<div
									className="link search-btn search-toggle"
									onClick={toggleSearch}
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
								<button className="hidden-bar-opener" onClick={toggleSidebar}>
									<span className="icon">
										<img src="/images/icons/menu-icon.svg" alt="" />
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
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
											value=""
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
			{isSidebarOpen && (
				<div className="hidden-sidebar">
					{/* Implement hidden sidebar content here */}
					<button onClick={toggleSidebar}></button>
				</div>
			)}
		</header>
	);
};

export default Navbar;
