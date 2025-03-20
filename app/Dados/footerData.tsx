// data/footerData.ts

interface Contact {
	location: string;
	address: string;
	phone: string;
	additionalContacts?: {
		address: string;
		phone: string;
	}[];
}

// interface Link {
// 	name: string;
// 	url: string;
// }

// interface SocialLink {
// 	platform: string;
// 	url: string;
// 	icon: string;
// }

// interface Copyright {
// 	text: string;
// 	developedBy: {
// 		text: string;
// 		url: string;
// 		name: string;
// 	};
// }

export const footerData = {
	companyInfo: {
		logoAlt: "Treker Logo",
		logoSrc: "/images/logo.svg",
		text: "A ZebraTravel - Turismo e Viagens, Lda. é uma agência de Turismo e Viagens com sede em Alto S.Pedro, São Filipe - Ilha do Fogo. O seu escritório funciona no rés-do-chão de um dos sobrados mais antigos da cidade, que foi restaurado e transformado numa pousada que demos o nome COLONIAL HOUSE.",
	},
	contacts: [
		{
			location: "Santiago",
			address: "Avenida Amílcar Cabral, Plateau - Praia",
			phone: "+238 262 56 10",
		},
		{
			location: "Fogo",
			address: "Alto São Pedro, São Filipe",
			phone: "+238 281 33 73",
			additionalContacts: [
				{
					address: "Mosteiros, Fogo",
					phone: " +238 283 21 90",
				},
			],
		},
		{
			location: "Brava",
			address: "Rua Padre Pio - Nova Sintra",
			phone: "+238 598 19 81",
		},
	] as Contact[], // Adicionando a tipagem aqui
	footerLinks: {
		aboutUs: [
			{ name: "Sobre Nós", url: "/about" },
			{ name: "Blog da Comunidade", url: "/posts" },
			{ name: "Recompensas", url: "#" },
			{ name: "Trabalhe Conosco", url: "#" },
			{ name: "Contato", url: "/contact" },
		],
		usefulLinks: [
			{ name: "Conta", url: "/auth/perfil" },
			{ name: "Política de Privacidade", url: "/terms-and-conditions" },
			{ name: "Programa de Afiliados", url: "#" },
			{ name: "Nosso Parceiro", url: "#" },
		],
		quickAccess: [
			{ name: "Sobre nós", url: "/about" },
			{ name: "Notícias & Press", url: "/posts" },
			{ name: "Blog", url: "/posts" },
			{ name: "FAQs", url: "/faq" },
			{ name: "Carreiras", url: "/work-with-us" },
		],
	},
	galleryImages: [
		"/images/resource/footer-thumb-1.jpg",
		"/images/resource/footer-thumb-2.jpg",
		"/images/resource/footer-thumb-3.jpg",
		"/images/resource/footer-thumb-4.jpg",
	],
	socialLinks: [
		{
			platform: "facebook",
			url: "https://www.facebook.com/profile.php?id=100063583243790",
			icon: "fab fa-facebook-f",
		},
		{ platform: "twitter", url: "#", icon: "fab fa-twitter" },
		{
			platform: "youtube",
			url: "https://www.youtube.com/@zebragroupcaboverde",
			icon: "fab fa-youtube",
		},
		{ platform: "instagram", url: "#", icon: "fab fa-instagram" },
	],
	copyright: {
		text: "Copyright &copy; 2025 ZebraTravel. Todos os direitos reservados.",
		developedBy: {
			text: "Desenvolvido por",
			url: "https://terrasystem.cv",
			name: "TerraSystem",
		},
	},
};
