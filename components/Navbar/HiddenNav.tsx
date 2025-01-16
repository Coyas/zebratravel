"use client";
import React, { useState } from "react";

// Home
// Acomodações
// Restaurante
// Excursões
// Loja
// Notiçias
// Contato
// Estrutura de dados para os links de navegação
const navigationLinks = [
	{
		label: "Home",
		url: "/",
		subLinks: [
			// { label: "Home 01", url: "index.html" },
			// { label: "Home 02", url: "index-2.html" },
		],
	},
	{
		label: "Acomodações",
		url: "/Acomodacao",
		subLinks: [
			// { label: "Our Team", url: "team.html" },
			// { label: "Team Member", url: "team-member.html" },
			// { label: "FAQs", url: "faq.html" },
			// { label: "Gallery", url: "gallery.html" },
		],
	},
	{
		label: "Restaurante",
		url: "/jazzebra",
		subLinks: [
			// { label: "Our Shop", url: "shop.html" },
			// { label: "Product Details", url: "product-single.html" },
			// { label: "My Wishlist", url: "wishlist.html" },
			// { label: "Shopping Cart", url: "shopping-cart.html" },
			// { label: "Checkout", url: "checkout.html" },
			// { label: "Signup", url: "signup.html" },
			// { label: "Login", url: "login.html" },
			// { label: "Forgot Password", url: "reset-password.html" },
		],
	},
	{
		label: "Excursões",
		url: "/excursoes",
		subLinks: [],
	},
	{
		label: "Loja",
		url: "/Loja",
		subLinks: [],
	},
	{
		label: "Notiçias",
		url: "/noticias",
		subLinks: [
			// { label: "Activities", url: "activities.html" },
			// { label: "Destinations 02", url: "destinations-2.html" },
			// { label: "Tours", url: "tours.html" },
			// { label: "Packages 01", url: "packages.html" },
			// { label: "Packages 02", url: "packages-2.html" },
			// { label: "Booking", url: "booking.html" },
			// { label: "Terms & Conditions", url: "terms-conditions.html" },
			// { label: "404 Page", url: "error-page.html" },
		],
	},
	{
		label: "Contato",
		url: "/contato",
		subLinks: [
			// { label: "Our Blog", url: "blog.html" },
			// { label: "Blog Classic", url: "blog-2.html" },
			// { label: "Blog Details", url: "blog-single.html" },
		],
	},
];

const HiddenNav: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<section className={`hidden-bar ${isOpen ? "open" : ""}`}>
			<div className="hidden-bar-wrapper">
				{/* Close Button */}
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

				{/* Logo Section */}
				<div className="nav-logo-box">
					<div className="logo">
						<a href="/" title="Treker">
							<img src="/images/logo.svg" alt="Treker Logo" />
						</a>
					</div>
				</div>

				{/* Navigation Menu */}
				<div className="side-menu">
					<ul className="navigation clearfix">
						{navigationLinks.map((link: any, index: any) => (
							<li
								key={index}
								className={link.subLinks.length > 0 ? "dropdown" : ""}
							>
								<a href={link.url}>{link.label}</a>
								{link.subLinks.length > 0 && (
									<ul>
										{link.subLinks.map((subLink: any, subIndex: any) => (
											<li key={subIndex}>
												<a href={subLink.url}>{subLink.label}</a>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>

				{/* Links Section */}
				<div className="links-box clearfix">
					<div className="clearfix">
						<div className="link">
							<a href="login.html" className="theme-btn btn-style-one">
								<span>
									Login<i className="icon far fa-angle-right"></i>
								</span>
							</a>
						</div>
						<div className="link">
							<a href="signup.html" className="theme-btn btn-style-two">
								<span>
									Sign Up<i className="icon far fa-angle-right"></i>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HiddenNav;
