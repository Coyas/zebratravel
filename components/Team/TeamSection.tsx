import React from "react";
import TeamMember from "./TeamMember";

const TeamSection = () => {
	const teamMembers = [
		{
			id: 1,
			name: "Andree Hoy",
			designation: "Tour Guide",
			image: "images/resource/team-1.jpg",
		},
		{
			id: 2,
			name: "Andree Hoy",
			designation: "Tour Guide",
			image: "images/resource/team-2.jpg",
		},
		{
			id: 3,
			name: "Andree Hoy",
			designation: "Tour Guide",
			image: "images/resource/team-3.jpg",
		},
		{
			id: 4,
			name: "Andree Hoy",
			designation: "Tour Guide",
			image: "images/resource/team-1.jpg",
		},
		{
			id: 5,
			name: "Andree Hoy",
			designation: "Tour Guide",
			image: "images/resource/team-2.jpg",
		},
		{
			id: 6,
			name: "Andree Hoy",
			designation: "Tour Guide",
			image: "images/resource/team-3.jpg",
		},
		{
			id: 7,
			name: "Andree Hoy",
			designation: "Tour Guide",
			image: "images/resource/team-1.jpg",
		},
		{
			id: 8,
			name: "Andree Hoy",
			designation: "Tour Guide",
			image: "images/resource/team-2.jpg",
		},
		{
			id: 9,
			name: "Andree Hoy",
			designation: "Tour Guide",
			image: "images/resource/team-3.jpg",
		},
	];

	return (
		<section className="team-section">
			<div className="floated-icon left">
				<img src="images/resource/team-icon-left.svg" alt="" title="" />
			</div>
			<div className="floated-icon right">
				<img src="images/resource/stones-right.svg" alt="" title="" />
			</div>
			<div className="auto-container">
				<div className="title-box centered">
					<h2>
						<span>Meet Our Tour Guide</span>
					</h2>
				</div>
				<div className="carousel-box">
					<div className="team-carousel owl-theme owl-carousel">
						{teamMembers.map((member) => (
							<TeamMember
								key={member.id}
								name={member.name}
								designation={member.designation}
								image={member.image}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
