export default function RoomGallery({ images, name }: { images: string[]; name: string }) {
	const pics = images.length > 0 ? images : ["/images/resource/stones-right.svg"];
	const [main, ...rest] = pics;

	return (
		<div style={{ marginBottom: 20 }}>
			<a href={main} className="lightbox-image" data-fancybox="quarto-gallery">
				<img src={main} alt={name} style={{ width: "100%", height: 340, objectFit: "cover", borderRadius: 6 }} />
			</a>
			{rest.length > 0 && (
				<div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
					{rest.map((url, idx) => (
						<a key={idx} href={url} className="lightbox-image" data-fancybox="quarto-gallery" style={{ width: 90, height: 70 }}>
							<img src={url} alt="" style={{ width: 90, height: 70, objectFit: "cover", borderRadius: 4 }} />
						</a>
					))}
				</div>
			)}
		</div>
	);
}
