import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import CareerForm from "@/components/careers/CareerForm";
import { JOB_AREAS } from "@/services/jobApplicationsService";

const WorkWithUs = () => {
	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />

			<section className="contact-section">
				<div className="auto-container">
					<div className="title-box centered">
						<h2>Trabalhe Connosco</h2>
						<div className="text">
							Estamos sempre à procura de pessoas apaixonadas por turismo para juntar à nossa equipa.
						</div>
					</div>

					<div className="row clearfix" style={{ marginBottom: "40px" }}>
						{JOB_AREAS.map((area) => (
							<div key={area} className="col-lg-3 col-md-4 col-sm-6" style={{ marginBottom: "16px" }}>
								<div
									style={{
										border: "1px solid #eee",
										borderRadius: "8px",
										padding: "16px",
										textAlign: "center",
										fontWeight: 600,
									}}
								>
									{area}
								</div>
							</div>
						))}
					</div>

					<div className="form-box">
						<div className="default-form">
							<CareerForm />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default WorkWithUs;
