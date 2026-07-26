"use client";

import React from "react";
import TeamMember from "./TeamMember";
import { teamMembers } from "@/app/Dados/teamsMember";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Localized, pickLocale } from "@/lib/i18n/resolveContent";

interface TeamSectionProps {
	content?: { title: Localized };
}

const TeamSection = ({ content }: TeamSectionProps) => {
	const { locale } = useLanguage();
	const title = content ? pickLocale(content.title, locale) : "Conheça os Nossos Guias Turísticos";

	return (
		<section className="team-section">
			<div className="floated-icon left">
				<img src="/images/resource/team-icon-left.svg" alt="" title="" />
			</div>
			<div className="floated-icon right">
				<img src="/images/resource/stones-right.svg" alt="" title="" />
			</div>
			<div className="auto-container">
				<div className="title-box centered">
					<h2>
						<span>{title}</span>
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
