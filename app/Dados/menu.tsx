// Definindo os tipos dos itens de menu
export interface MenuItem {
	label: string;
	href: string;
	subMenu?: MenuItem[];
}

// Dados do menu
export const menuData: MenuItem[] = [
	{
		label: "Home",
		href: "/",
		// subMenu: [
		// { label: "Home 01", href: "html/index.html" },
		// { label: "Home 02", href: "html/index-2.html" },
		// ],
	},
	{
		label: "Sobre Nós",
		href: "/about",
		subMenu: [
			// { label: "Our Team", href: "team.html" },
			// { label: "Team Member", href: "team-member.html" },

			{ label: "Galeria", href: "/galeria" },
			{ label: "FAQs", href: "/faq" },
		],
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
		label: "Notícias",
		href: "/news",
		// subMenu: [
		// 	{ label: "Our Blog", href: "blog.html" },
		// 	{ label: "Blog Classic", href: "blog-2.html" },
		// 	{ label: "Blog Details", href: "blog-single.html" },
		// ],
	},
	{ label: "Contato", href: "/contact" },
];
