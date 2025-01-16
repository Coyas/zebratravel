import React from "react";

// Definindo os tipos dos itens de menu
interface MenuItem {
	label: string;
	href: string;
	subMenu?: MenuItem[];
}

// Dados do menu
const menuData: MenuItem[] = [
	{
		label: "Home",
		href: "/",
		// subMenu: [
		// { label: "Home 01", href: "html/index.html" },
		// { label: "Home 02", href: "html/index-2.html" },
		// ],
	},
	{
		label: "About Us",
		href: "/about",
		// subMenu: [
		// 	{ label: "Our Team", href: "team.html" },
		// 	{ label: "Team Member", href: "team-member.html" },
		// 	{ label: "FAQs", href: "faq.html" },
		// 	{ label: "Gallery", href: "gallery.html" },
		// ],
	},
	{
		label: "Loja",
		href: "/loja",
		// subMenu: [
		// 	{ label: "Our Shop", href: "shop.html" },
		// 	{ label: "Product Details", href: "product-single.html" },
		// 	{ label: "My Wishlist", href: "wishlist.html" },
		// 	{ label: "Shopping Cart", href: "shopping-cart.html" },
		// 	{ label: "Checkout", href: "checkout.html" },
		// 	{ label: "Signup", href: "signup.html" },
		// 	{ label: "Login", href: "login.html" },
		// 	{ label: "Forgot Password", href: "reset-password.html" },
		// ],
	},
	// { label: "Destinations", href: "destinations.html" },
	{ label: "Excursões", href: "/tours" },
	{
		label: "Pages",
		href: "#",
		// subMenu: [
		// 	{ label: "Activities", href: "activities.html" },
		// 	{ label: "Destinations 02", href: "destinations-2.html" },
		// 	{ label: "Tours", href: "tours.html" },
		// 	{ label: "Packages 01", href: "packages.html" },
		// 	{ label: "Packages 02", href: "packages-2.html" },
		// 	{ label: "Booking", href: "booking.html" },
		// 	{ label: "Terms & Conditions", href: "terms-conditions.html" },
		// 	{ label: "404 Page", href: "error-page.html" },
		// ],
	},
	{
		label: "Notiçias",
		href: "/news",
		// subMenu: [
		// 	{ label: "Our Blog", href: "blog.html" },
		// 	{ label: "Blog Classic", href: "blog-2.html" },
		// 	{ label: "Blog Details", href: "blog-single.html" },
		// ],
	},
	{ label: "Contato", href: "/contact" },
];

const Header: React.FC = () => {
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
								<a href="index.html" title="Treker">
									<img src="images/logo.svg" alt="Treker" title="Treker" />
								</a>
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

							{/* Links Box */}
							<div className="links-box clearfix">
								<div className="link search-btn search-toggle">
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
									</a>
								</div>
							</div>

							{/* Hidden Nav Toggler */}
							<div className="nav-toggler">
								<button className="hidden-bar-opener">
									<span className="icon">
										<img src="images/icons/menu-icon.svg" alt="" />
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
		</header>
	);
};

export default Header;
