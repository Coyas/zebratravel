"use client";

import { PublicCampaign, campaignService } from "@/services/campaignService";

export default function CampaignBanner({ campaigns }: { campaigns: PublicCampaign[] }) {
	if (campaigns.length === 0) {
		return null;
	}

	const handleClick = (id: number) => {
		campaignService.registerClick(id).catch(() => {});
	};

	return (
		<section style={{ position: "relative" }}>
			<div className={campaigns.length > 1 ? "campaign-carousel owl-theme owl-carousel" : undefined}>
				{campaigns.map((campaign) => (
					<a
						key={campaign.id}
						href={campaign.linkUrl}
						onClick={() => handleClick(campaign.id)}
						style={{ display: "block", position: "relative" }}
					>
						<img
							src={campaign.imageUrl}
							alt={campaign.altText ?? campaign.title}
							style={{ width: "100%", display: "block" }}
						/>
						<div
							style={{
								position: "absolute",
								left: 0,
								bottom: 0,
								width: "100%",
								padding: "24px 30px",
								background: "linear-gradient(transparent, rgba(0,0,0,0.65))",
								color: "#fff",
							}}
						>
							{campaign.ribbon && (
								<span
									style={{
										display: "inline-block",
										background: "#ffb400",
										color: "#1a1200",
										fontWeight: 700,
										fontSize: 13,
										padding: "3px 10px",
										borderRadius: 999,
										marginBottom: 8,
									}}
								>
									{campaign.ribbon}
								</span>
							)}
							<h4 style={{ margin: 0, color: "#fff" }}>{campaign.title}</h4>
							{campaign.subtitle && <p style={{ margin: "4px 0 0", color: "#eee" }}>{campaign.subtitle}</p>}
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
