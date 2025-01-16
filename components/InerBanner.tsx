"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface BannerProps {
	backgroundImage: string; // Imagem fornecida manualmente
}

const InerBanner: React.FC<BannerProps> = ({ backgroundImage }) => {
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

	// Título baseado no último segmento ou fallback
	const title = pathSegments[pathSegments.length - 1] || "Page Title"; // Fallback para "Page Title" caso não exista título

	return (
		<section className="inner-banner">
			{/* Imagem de fundo usando o componente Image do Next.js para otimização */}
			<div className="image-layer">
				<Image
					src={backgroundImage}
					alt="Banner Background"
					layout="fill"
					objectFit="cover"
					priority
				/>
			</div>
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
											<span className="icon-home fa fa-home"></span>
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

export default InerBanner;
