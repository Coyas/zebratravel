"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface BannerProps {
	backgroundImage: string; // Imagem fornecida manualmente (local ou de qualquer host — usada como CSS background, sem passar pelo next/image)
	title?: string; // Título a mostrar; por defeito deriva-se do último segmento do URL
}

const InnerBanner: React.FC<BannerProps> = ({ backgroundImage, title: titleProp }) => {
	const pathname = usePathname(); // Usando o hook usePathname() para acessar o pathname atual

	// Obter o pathname atual da URL
	const pathSegments = pathname.split("/").filter(Boolean); // Dividindo o pathname em segmentos

	// Adicionar "Home" como o primeiro item no breadcrumb
	const breadcrumb = [
		{ name: "Home", href: "/", current: false }, // Home como o primeiro item
		...pathSegments.map((segment, index) => {
			const href = "/" + pathSegments.slice(0, index + 1).join("/"); // Criando o caminho de cada item do breadcrumb
			return {
				name: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalizando a primeira letra de cada item
				href,
				current: index === pathSegments.length - 1, // Marcar o último item como "current"
			};
		}),
	];

	// Título: usa o que foi passado explicitamente, ou deriva do último segmento do URL
	const title = titleProp || pathSegments[pathSegments.length - 1] || "Page Title";

	return (
		<section className="inner-banner">
			{/* Imagem de fundo em CSS puro — a classe .image-layer já traz background-size:cover no tema */}
			<div className="image-layer" style={{ backgroundImage: `url(${backgroundImage})` }} />
			<div className="auto-container">
				<div className="content-box">
					<h2>{title}</h2>
					<div className="bread-crumb">
						<ul className="clearfix">
							{breadcrumb.map((item, index) => (
								<li key={index} className={item.current ? "current" : ""}>
									{item.current ? (
										item.name // Exibe o nome do breadcrumb atual sem link
									) : (
										<>
											{index === 0 && ( // Adiciona o ícone do Home apenas para o primeiro item
												<span className="icon-home fa fa-home"></span>
											)}
											<Link href={item.href}>{item.name}</Link>{" "}
											{/* Link para os breadcrumbs anteriores */}
										</>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InnerBanner;
