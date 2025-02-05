import React from "react";

interface Product {
	imageUrl: string;
	title: string;
	price: string;
	link: string;
}

const products: Product[] = [
	{
		imageUrl: "/images/resource/shop/prod-1.jpg",
		title: "Smart Air Bag Travel",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-2.jpg",
		title: "Travel Suitcase Bag",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-3.jpg",
		title: "Travel Light Suitcase",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-4.jpg",
		title: "Smart Travel Gadgets",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-5.jpg",
		title: "Set of Black Silk Pillow",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-6.jpg",
		title: "Travel Slipping Support",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-7.jpg",
		title: "Travelling Black Suitcase",
		price: "$225.00",
		link: "product-single.html",
	},
	{
		imageUrl: "/images/resource/shop/prod-8.jpg",
		title: "Coffee Travel Mug",
		price: "$225.00",
		link: "product-single.html",
	},
];

const ProductSection: React.FC = () => {
	return (
		<section className="products-section">
			<div className="floated-icon left">
				<img src="/images/resource/stones-left.svg" alt="Left Icon" />
			</div>
			<div className="floated-icon right">
				<img src="/images/resource/stones-right.svg" alt="Right Icon" />
			</div>
			<div className="auto-container">
				<div className="title-box centered">
					<div className="subtitle">Comprar agora</div>
					<h2>
						<i className="bg-vector"></i>
						<span>Produtos em destaques</span>
					</h2>
				</div>

				<div className="row clearfix">
					{products.map((product, index) => (
						<div
							key={index}
							className="prod-block col-xl-3 col-lg-4 col-md-6 col-sm-12"
						>
							<div className="inner-box">
								<div className="why-block">
									<div className="image-box">
										<div className="image">
											<a href={product.link}>
												<img src={product.imageUrl} alt={product.title} />
											</a>
										</div>
										<div className="hvr-box">
											<div className="hvr-inner">
												<div className="hvr-content">
													<div className="link">
														<a href={product.link} className="theme-btn">
															<i className="far fa-shopping-cart"></i> adicionar
															ao carinhho
														</a>
													</div>
													<div className="link">
														<a href={product.link} className="theme-btn">
															<i className="far fa-bars"></i> Detalhes
														</a>
													</div>
												</div>
											</div>
										</div>
										<div className="add-fav">
											<a href={product.link} className="theme-btn">
												<i className="far fa-heart"></i>
											</a>
										</div>
									</div>
									<div className="lower-box">
										<h5>
											<a href={product.link}>{product.title}</a>
										</h5>
										<div className="price">
											<span>{product.price}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="see-more-link">
					<a href="shop.html" className="theme-btn btn-style-one">
						<span>
							Ver todos os produtos{" "}
							<i className="icon">
								<img src="/images/icons/logo-icon.svg" alt="Logo Icon" />
							</i>
						</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default ProductSection;
