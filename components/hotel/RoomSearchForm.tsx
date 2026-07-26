"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

function todayIso(): string {
	return new Date().toISOString().slice(0, 10);
}

function tomorrowIso(): string {
	const d = new Date();
	d.setDate(d.getDate() + 1);
	return d.toISOString().slice(0, 10);
}

interface RoomSearchFormProps {
	checkIn?: string;
	checkOut?: string;
	guests?: string;
}

// Formulário GET simples (sem JS de submissão) — ao submeter navega para a mesma
// página com ?checkIn=&checkOut=&guests=, que o Server Component lê para filtrar
// a disponibilidade. Só precisa de "use client" para poder traduzir as labels.
export default function RoomSearchForm({ checkIn, checkOut, guests }: RoomSearchFormProps) {
	const { t } = useLanguage();

	return (
		<form
			method="GET"
			style={{
				display: "flex",
				flexWrap: "wrap",
				alignItems: "flex-end",
				gap: 16,
				background: "#fff",
				border: "1px solid #eee",
				borderRadius: 50,
				padding: "12px 20px",
				marginBottom: 30,
				boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
			}}
		>
			<div>
				<label style={{ display: "block", fontSize: 11, color: "#888", textTransform: "uppercase" }}>{t("hotel.checkIn")}</label>
				<input
					type="date"
					name="checkIn"
					required
					min={todayIso()}
					defaultValue={checkIn || todayIso()}
					style={{ border: "none", outline: "none", fontSize: 14, padding: "4px 0" }}
				/>
			</div>
			<div style={{ color: "#ccc" }}>&rarr;</div>
			<div>
				<label style={{ display: "block", fontSize: 11, color: "#888", textTransform: "uppercase" }}>{t("hotel.checkOut")}</label>
				<input
					type="date"
					name="checkOut"
					required
					min={checkIn || todayIso()}
					defaultValue={checkOut || tomorrowIso()}
					style={{ border: "none", outline: "none", fontSize: 14, padding: "4px 0" }}
				/>
			</div>
			<div style={{ borderLeft: "1px solid #eee", paddingLeft: 16 }}>
				<label style={{ display: "block", fontSize: 11, color: "#888", textTransform: "uppercase" }}>{t("hotel.guests")}</label>
				<input
					type="number"
					name="guests"
					min={1}
					required
					defaultValue={guests || "1"}
					style={{ border: "none", outline: "none", fontSize: 14, padding: "4px 0", width: 60 }}
				/>
			</div>
			<button className="theme-btn btn-style-one" type="submit" style={{ marginLeft: "auto" }}>
				<span>
					<i className="icon far fa-search"></i> {t("hotel.checkAvailability")}
				</span>
			</button>
		</form>
	);
}
