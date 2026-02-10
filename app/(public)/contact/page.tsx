"use client";

// import CartSidebar from "@/components/CartSidebar";
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import FindUs from "@/components/contacto/Findus";
import ContactForm from "@/components/contacto/ContactForm";

const Contact = () => {
	// Exemplo de CartItem

	return (
		<>
			{/* <Header {...HeaderProps}/> */}
			{/* <CartSidebar {...cartSidebarProps} /> */}
			{/* Passando a URL da imagem diretamente */}
			<InerBanner backgroundImage={bgImage.src} />

			{/* ContactForm */}
			<ContactForm />
			{/* End ContactForm */}

			{/* Find us */}
			<FindUs />
			{/* End Find us */}

			<section className="map-section">
				{/* <!--Map Box--> */}
				<div className="map-box">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4653.99856710527!2d-24.498764!3d14.895808500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93617b861ca1027%3A0x35a681b0dafcbcba!2sZebra%20Travel%20Viagens%20%26%20Turismo!5e1!3m2!1spt-PT!2scv!4v1738939194886!5m2!1spt-PT!2scv"
						width="600"
						height="450"
						allowFullScreen={false}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</section>
		</>
	);
};

export default Contact;
