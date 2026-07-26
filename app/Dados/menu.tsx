// Definindo os tipos dos itens de menu
export interface MenuItem {
	label: string;
	i18nKey: string;
	href: string;
	subMenu?: MenuItem[];
}

// Dados do menu
export const menuData: MenuItem[] = [
	{
		label: "Home",
		i18nKey: "nav.home",
		href: "/",
	},
	{
		label: "Loja",
		i18nKey: "nav.loja",
		href: "/loja",
	},
	{ label: "Excursões", i18nKey: "nav.excursoes", href: "/excurcoes" },
	{ label: "Hotel", i18nKey: "nav.hotel", href: "/hotel" },
	{
		label: "Destinos",
		i18nKey: "nav.destinos",
		href: "/destinos",
	},
	{
		label: "Novidades",
		i18nKey: "nav.novidades",
		href: "/posts",
	},
	{
		label: "Sobre Nós",
		i18nKey: "nav.sobre",
		href: "/about",
		subMenu: [
			{ label: "Galeria", i18nKey: "nav.galeria", href: "/galeria" },
			{ label: "FAQs", i18nKey: "nav.faqs", href: "/faq" },
		],
	},
	{ label: "Contato", i18nKey: "nav.contato", href: "/contact" },
];
