"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import InerBanner from "@/components/InerBanner";
import bgImage from "@/public/images/background/banner-image-1.jpg";
import { login, isAuthenticated } from "@/lib/clientAuth";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import Turnstile, { TurnstileHandle } from "@/components/Turnstile";

type FormValues = {
	email: string;
	password: string;
};

export default function LoginPage() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [turnstileToken, setTurnstileToken] = useState("");
	const turnstileRef = useRef<TurnstileHandle>(null);
	const { t } = useLanguage();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	useEffect(() => {
		if (isAuthenticated()) {
			router.push("/conta/perfil");
		}
	}, [router]);

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		setLoading(true);
		try {
			await login(data.email, data.password, turnstileToken);
			router.push("/conta/perfil");
		} catch (error) {
			Swal.fire("Erro", error instanceof Error ? error.message : "Credenciais inválidas", "error");
		} finally {
			setLoading(false);
			setTurnstileToken("");
			turnstileRef.current?.reset();
		}
	};

	return (
		<>
			<InerBanner backgroundImage={bgImage.src} />
			<section className="contact-section">
				<div className="auto-container">
					<div className="title-box centered">
						<h2>
							<span>{t("login.title")}</span>
						</h2>
						<div className="text">{t("login.subtitle")}</div>
					</div>

					<div className="form-box site-form" style={{ maxWidth: 520, margin: "0 auto" }}>
						<div className="contact-form">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="row clearfix">
									<div className="form-group col-lg-12 col-md-12 col-sm-12">
										<div className="f-label">
											{t("common.email")} <i>*</i>
										</div>
										<div className="field-inner">
											<input
												type="email"
												placeholder={t("common.email")}
												{...register("email", { required: "Email é obrigatório" })}
											/>
											{errors.email && <span>{errors.email.message}</span>}
										</div>
									</div>

									<div className="form-group col-lg-12 col-md-12 col-sm-12">
										<div className="f-label">
											{t("common.senha")} <i>*</i>
										</div>
										<div className="field-inner">
											<input
												type="password"
												placeholder={t("common.senha")}
												{...register("password", { required: "Senha é obrigatória" })}
											/>
											{errors.password && <span>{errors.password.message}</span>}
										</div>
									</div>

									<div className="form-group col-lg-12 col-md-12 col-sm-12">
										<Turnstile ref={turnstileRef} onVerify={setTurnstileToken} />
									</div>

									<div className="form-group col-lg-12 col-md-12 col-sm-12">
										<button type="submit" className="theme-btn btn-style-two" disabled={loading || !turnstileToken}>
											<span>
												{loading ? t("common.aCarregar") : t("common.entrar")} <i className="icon far fa-angle-right"></i>
											</span>
										</button>
									</div>

									<div className="form-group col-lg-12 col-md-12 col-sm-12">
										{t("login.noAccount")} <Link href="/conta/registo">{t("login.createAccount")}</Link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
