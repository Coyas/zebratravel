import React from "react";
import Image from "next/image";

// Definindo um tipo para as propriedades do TeamMember
interface TeamMemberProps {
	name: string;
	image: string;
	designation: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
	name,
	image,
	designation,
}) => {
	return (
		<div className="team-block-one">
			<div className="inner-box">
				<div className="image-box">
					<div className="image">
						<a href="#">
							{/* Usando o componente Image do Next.js para otimização */}
							<Image
								src={image} // Caminho da imagem
								alt={name} // Texto alternativo
								title={name} // Título da imagem
								width={300} // Largura da imagem
								height={300} // Altura da imagem
								layout="responsive" // Ajuste da imagem de forma responsiva
							/>
						</a>
					</div>
				</div>
				<div className="lower-box">
					<h4>
						<a href="#">{name}</a>
					</h4>
					<div className="designation">{designation}</div>
					<div className="phone">
						<a href="#" className="theme-btn call-btn">
							<i className="icon">
								{/* Usando Image também para o ícone */}
								<Image
									src="/images/icons/phone-call.svg"
									alt="Phone icon"
									title="Phone icon"
									width={20} // Tamanho do ícone
									height={20} // Tamanho do ícone
								/>
							</i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamMember;
