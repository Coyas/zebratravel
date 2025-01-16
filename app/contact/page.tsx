"use client";

// import CartSidebar from "@/components/CartSidebar";
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";

// type CartItem = {
// 	id: number;
// 	name: string;
// 	price: number;
// 	quantity: number;
// 	imageUrl: string;
// };

// type CartSidebarProps = {
// 	items: CartItem[];
// 	subtotal: number;
// 	onClose: () => void;
// };

// Definindo os tipos dos itens de menu
interface MenuItem {
	label: string;
	href: string;
	subMenu?: MenuItem[];
}

// interface HeaderProps {
// 	menuItems: MenuItem[];
// }

// Dados do menu para passar como props
// const menuData: MenuItem[] = [
// 	{
// 		label: "Home",
// 		href: "index.html",
// 		subMenu: [
// 			{ label: "Home 01", href: "index.html" },
// 			{ label: "Home 02", href: "index-2.html" },
// 		],
// 	},
// 	{
// 		label: "About Us",
// 		href: "about.html",
// 		subMenu: [
// 			{ label: "Our Team", href: "team.html" },
// 			{ label: "Team Member", href: "team-member.html" },
// 			{ label: "FAQs", href: "faq.html" },
// 			{ label: "Gallery", href: "gallery.html" },
// 		],
// 	},
// 	{
// 		label: "Shop",
// 		href: "shop.html",
// 		subMenu: [
// 			{ label: "Our Shop", href: "shop.html" },
// 			{ label: "Product Details", href: "product-single.html" },
// 			{ label: "My Wishlist", href: "wishlist.html" },
// 			{ label: "Shopping Cart", href: "shopping-cart.html" },
// 			{ label: "Checkout", href: "checkout.html" },
// 			{ label: "Signup", href: "signup.html" },
// 			{ label: "Login", href: "login.html" },
// 			{ label: "Forgot Password", href: "reset-password.html" },
// 		],
// 	},
// 	{ label: "Destinations", href: "destinations.html" },
// 	{ label: "Trekking", href: "trekking.html" },
// 	{
// 		label: "Pages",
// 		href: "#",
// 		subMenu: [
// 			{ label: "Activities", href: "activities.html" },
// 			{ label: "Destinations 02", href: "destinations-2.html" },
// 			{ label: "Tours", href: "tours.html" },
// 			{ label: "Packages 01", href: "packages.html" },
// 			{ label: "Packages 02", href: "packages-2.html" },
// 			{ label: "Booking", href: "booking.html" },
// 			{ label: "Terms & Conditions", href: "terms-conditions.html" },
// 			{ label: "404 Page", href: "error-page.html" },
// 		],
// 	},
// 	{
// 		label: "News",
// 		href: "blog.html",
// 		subMenu: [
// 			{ label: "Our Blog", href: "blog.html" },
// 			{ label: "Blog Classic", href: "blog-2.html" },
// 			{ label: "Blog Details", href: "blog-single.html" },
// 		],
// 	},
// 	{ label: "Contact", href: "contact.html" },
// ];

const Contact = () => {
	// Exemplo de CartItem

	return (
		<>
			{/* <Header {...HeaderProps}/> */}
			{/* <CartSidebar {...cartSidebarProps} /> */}
			{/* Passando a URL da imagem diretamente */}
			<InerBanner backgroundImage={bgImage.src} />
		</>
	);
};

export default Contact;
