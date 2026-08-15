import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import { invoiceVerificationService } from "@/services/invoiceVerificationService";

const SOURCE_LABELS: Record<string, string> = {
	ORDER: "Loja",
	EXCURSION_BOOKING: "Excursão",
	HOTEL_RESERVATION: "Hotel",
};

const card: React.CSSProperties = {
	background: "#fff",
	borderRadius: 14,
	boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
	padding: 30,
	maxWidth: 560,
	margin: "0 auto",
};

export default async function VerificarFaturaPage({
	searchParams,
}: {
	searchParams: Promise<{ doc?: string; sig?: string }>;
}) {
	const { doc, sig } = await searchParams;

	let result: Awaited<ReturnType<typeof invoiceVerificationService.verify>> | null = null;
	if (doc && sig) {
		try {
			result = await invoiceVerificationService.verify(doc, sig);
		} catch {
			result = { valid: false, documentNumber: null, sourceType: null, customerName: null, customerNif: null, totalAmount: null, currency: null, issuedAt: null };
		}
	}

	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<section className="contact-section" style={{ paddingTop: 40, paddingBottom: 60 }}>
				<div className="auto-container">
					<div className="title-box centered" style={{ marginBottom: 30 }}>
						<h2>
							<span>Verificação de Fatura</span>
						</h2>
					</div>

					{!doc || !sig ? (
						<div style={card}>
							<p style={{ textAlign: "center", color: "#555" }}>
								Este link deve ser aberto a partir do QR code impresso no rodapé de uma fatura da
								ZebraTravel. Digitaliza o código com a câmara do telemóvel para verificar a autenticidade
								do documento.
							</p>
						</div>
					) : result?.valid ? (
						<div style={card}>
							<div style={{ textAlign: "center", marginBottom: 20 }}>
								<div
									style={{
										width: 64,
										height: 64,
										borderRadius: "50%",
										background: "#d4edda",
										color: "#155724",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										margin: "0 auto 12px",
										fontSize: 30,
									}}
								>
									✓
								</div>
								<h4 style={{ margin: 0, color: "#155724" }}>Documento Autêntico</h4>
								<p style={{ color: "#888", fontSize: 14, marginTop: 6 }}>
									Este documento foi emitido pela ZebraTravel e não foi alterado.
								</p>
							</div>
							<table style={{ width: "100%", fontSize: 14, borderCollapse: "collapse" }}>
								<tbody>
									<tr>
										<td style={{ padding: "8px 0", color: "#888" }}>Nº do Documento</td>
										<td style={{ padding: "8px 0", textAlign: "right", fontWeight: 600 }}>{result.documentNumber}</td>
									</tr>
									<tr>
										<td style={{ padding: "8px 0", color: "#888" }}>Origem</td>
										<td style={{ padding: "8px 0", textAlign: "right" }}>{SOURCE_LABELS[result.sourceType ?? ""] ?? result.sourceType}</td>
									</tr>
									<tr>
										<td style={{ padding: "8px 0", color: "#888" }}>Cliente</td>
										<td style={{ padding: "8px 0", textAlign: "right" }}>{result.customerName}</td>
									</tr>
									{result.customerNif && (
										<tr>
											<td style={{ padding: "8px 0", color: "#888" }}>NIF</td>
											<td style={{ padding: "8px 0", textAlign: "right" }}>{result.customerNif}</td>
										</tr>
									)}
									<tr>
										<td style={{ padding: "8px 0", color: "#888" }}>Total</td>
										<td style={{ padding: "8px 0", textAlign: "right", fontWeight: 600 }}>
											{result.totalAmount} {result.currency}
										</td>
									</tr>
									<tr>
										<td style={{ padding: "8px 0", color: "#888" }}>Data de Emissão</td>
										<td style={{ padding: "8px 0", textAlign: "right" }}>{result.issuedAt}</td>
									</tr>
								</tbody>
							</table>
						</div>
					) : (
						<div style={card}>
							<div style={{ textAlign: "center" }}>
								<div
									style={{
										width: 64,
										height: 64,
										borderRadius: "50%",
										background: "#f8d7da",
										color: "#721c24",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										margin: "0 auto 12px",
										fontSize: 30,
									}}
								>
									✕
								</div>
								<h4 style={{ margin: 0, color: "#721c24" }}>Documento Inválido</h4>
								<p style={{ color: "#888", fontSize: 14, marginTop: 6 }}>
									Não foi possível confirmar a autenticidade deste documento — o código não corresponde a
									nenhuma fatura emitida pela ZebraTravel, ou os valores foram alterados. Contacta{" "}
									<a href="mailto:geral@zebratravel.net">geral@zebratravel.net</a> se acreditas que isto é um
									erro.
								</p>
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	);
}
