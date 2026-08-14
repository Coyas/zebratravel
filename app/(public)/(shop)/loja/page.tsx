import React from "react";
import SecaoDeProdutos from "@/components/Shop/SecaoDeProdutos";
import InerBanner from "@/components/InerBanner";
import CampaignBanner from "@/components/CampaignBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import { productsService } from "@/services/productsService";
import { getAllContent } from "@/app/actions/content";
import { campaignService } from "@/services/campaignService";

const Loja = async () => {
	const produtos = await productsService.getAll();
	const content = await getAllContent();
	const campaigns = await campaignService.getActive("LOJA_TOP");
	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<CampaignBanner campaigns={campaigns} />
			<SecaoDeProdutos produtos={produtos} content={content?.loja} />
		</>
	);
};

export default Loja;
