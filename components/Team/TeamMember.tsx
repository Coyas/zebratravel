import React from "react";

const TeamMember = ({ name, image, designation }: any) => {
	return (
		<div className="team-block-one">
			<div className="inner-box">
				<div className="image-box">
					<div className="image">
						<a href="#">
							<img src={image} alt={name} title="" />
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
								<img src="images/icons/phone-call.svg" alt="" title="" />
							</i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamMember;
