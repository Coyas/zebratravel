"use client";

import FavoritosSection from "@/components/Shop/Favoritos";
import React from "react";
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";

const Favoritos = () => {
	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<FavoritosSection />
		</>
	);
};

export default Favoritos;
