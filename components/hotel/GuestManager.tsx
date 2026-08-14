"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { hotelService, ReservationGuest } from "@/services/hotelService";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface GuestManagerProps {
	reservationId: number;
	onClose: () => void;
}

const emptyGuest = { fullName: "", dateOfBirth: "", nationality: "", passportNumber: "" };

export default function GuestManager({ reservationId, onClose }: GuestManagerProps) {
	const { t } = useLanguage();
	const [guests, setGuests] = useState<ReservationGuest[]>([]);
	const [loading, setLoading] = useState(true);
	const [form, setForm] = useState(emptyGuest);
	const [saving, setSaving] = useState(false);
	const [uploadingGuestId, setUploadingGuestId] = useState<number | null>(null);

	const load = async () => {
		setLoading(true);
		try {
			setGuests(await hotelService.getReservationGuests(reservationId));
		} catch {
			Swal.fire("Erro", "Não foi possível carregar os hóspedes", "error");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		load();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reservationId]);

	const submit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!form.fullName.trim()) return;
		setSaving(true);
		try {
			await hotelService.addReservationGuest(reservationId, {
				fullName: form.fullName,
				dateOfBirth: form.dateOfBirth || undefined,
				nationality: form.nationality || undefined,
				passportNumber: form.passportNumber || undefined,
			});
			setForm(emptyGuest);
			await load();
		} catch (error) {
			Swal.fire("Erro", error instanceof Error ? error.message : "Não foi possível adicionar o hóspede", "error");
		} finally {
			setSaving(false);
		}
	};

	const remove = async (guestId: number) => {
		const result = await Swal.fire({ title: "Remover hóspede?", icon: "warning", showCancelButton: true, confirmButtonText: "Sim, remover" });
		if (!result.isConfirmed) return;
		try {
			await hotelService.deleteReservationGuest(reservationId, guestId);
			await load();
		} catch {
			Swal.fire("Erro", "Não foi possível remover o hóspede", "error");
		}
	};

	const uploadDocument = async (guestId: number, file: File) => {
		setUploadingGuestId(guestId);
		try {
			await hotelService.uploadGuestDocument(reservationId, guestId, file);
			await load();
		} catch (error) {
			Swal.fire("Erro", error instanceof Error ? error.message : "Não foi possível enviar o ficheiro", "error");
		} finally {
			setUploadingGuestId(null);
		}
	};

	return (
		<div
			style={{
				position: "fixed",
				inset: 0,
				background: "rgba(0,0,0,0.5)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				zIndex: 1000,
				padding: 20,
			}}
			onClick={onClose}
		>
			<div
				style={{ background: "#fff", borderRadius: 8, padding: 25, maxWidth: 520, width: "100%", maxHeight: "85vh", overflowY: "auto" }}
				onClick={(e) => e.stopPropagation()}
			>
				<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
					<h4 style={{ margin: 0 }}>{t("profile.guests.title")}</h4>
					<button onClick={onClose} className="theme-btn btn-style-two" style={{ padding: "5px 15px" }}>
						<span>{t("profile.guests.close")}</span>
					</button>
				</div>

				{loading ? (
					<p>{t("common.aCarregar")}</p>
				) : (
					<>
						{guests.length === 0 && <p>{t("profile.guests.none")}</p>}
						{guests.map((guest) => (
							<div key={guest.id} style={{ border: "1px solid #eee", borderRadius: 6, padding: 12, marginBottom: 10 }}>
								<div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
									<div>
										<strong>{guest.fullName}</strong>
										{guest.isPrimary && (
											<span style={{ marginLeft: 8, fontSize: 11, background: "#d4edda", color: "#155724", padding: "2px 8px", borderRadius: 10 }}>
												{t("profile.guests.primary")}
											</span>
										)}
										<div style={{ fontSize: 13, color: "#666" }}>
											{[guest.dateOfBirth, guest.nationality, guest.passportNumber].filter(Boolean).join(" · ")}
										</div>
										<div style={{ fontSize: 13, color: "#666" }}>
											{guest.documents.length} {t("profile.guests.documentsUploaded")}
										</div>
									</div>
									<button onClick={() => remove(guest.id)} style={{ color: "#c00", background: "none", border: "none", cursor: "pointer" }}>
										{t("profile.guests.remove")}
									</button>
								</div>
								<label style={{ display: "inline-block", marginTop: 8, fontSize: 13, cursor: "pointer" }}>
									{uploadingGuestId === guest.id ? t("profile.guests.saving") : t("profile.guests.uploadDocument")}
									<input
										type="file"
										accept="image/jpeg,image/png,application/pdf"
										style={{ display: "none" }}
										disabled={uploadingGuestId === guest.id}
										onChange={(e) => {
											const file = e.target.files?.[0];
											if (file) uploadDocument(guest.id, file);
											e.target.value = "";
										}}
									/>
								</label>
							</div>
						))}

						<form onSubmit={submit} style={{ marginTop: 15, borderTop: "1px solid #eee", paddingTop: 15 }}>
							<div style={{ display: "grid", gap: 10 }}>
								<input
									required
									placeholder={t("profile.guests.fullName")}
									value={form.fullName}
									onChange={(e) => setForm({ ...form, fullName: e.target.value })}
									style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
								/>
								<input
									type="date"
									placeholder={t("profile.guests.dob")}
									value={form.dateOfBirth}
									onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
									style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
								/>
								<input
									placeholder={t("profile.guests.nationality")}
									value={form.nationality}
									onChange={(e) => setForm({ ...form, nationality: e.target.value })}
									style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
								/>
								<input
									placeholder={t("profile.guests.passportNumber")}
									value={form.passportNumber}
									onChange={(e) => setForm({ ...form, passportNumber: e.target.value })}
									style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
								/>
							</div>
							<button type="submit" disabled={saving} className="theme-btn btn-style-two" style={{ marginTop: 10 }}>
								<span>{saving ? t("profile.guests.saving") : t("profile.guests.add")}</span>
							</button>
						</form>
					</>
				)}
			</div>
		</div>
	);
}
