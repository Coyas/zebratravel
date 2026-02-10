"use client";

import React from "react";
import SecaoDeProdutos from "@/components/Shop/SecaoDeProdutos";
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";

const Loja = () => {
	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<SecaoDeProdutos />
		</>
	);
};

export default Loja;
