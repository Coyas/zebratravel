import React from "react";
import SecaoDeProdutos from "@/components/Shop/SecaoDeProdutos";
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import { productsService } from "@/services/productsService";
import { getAllContent } from "@/app/actions/content";

const Loja = async () => {
	const produtos = await productsService.getAll();
	const content = await getAllContent();
	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<SecaoDeProdutos produtos={produtos} content={content?.loja} />
		</>
	);
};

export default Loja;
