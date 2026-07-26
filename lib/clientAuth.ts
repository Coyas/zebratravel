"use client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export interface ClientUser {
	token: string;
	id: number;
	fullName: string;
	email: string;
	role: string;
}

export function getToken(): string | null {
	if (typeof window === "undefined") return null;
	return localStorage.getItem("zebratravel_token");
}

export function getUser(): ClientUser | null {
	if (typeof window === "undefined") return null;
	const raw = localStorage.getItem("zebratravel_user");
	return raw ? JSON.parse(raw) : null;
}

export function isAuthenticated(): boolean {
	return !!getToken();
}

function setSession(user: ClientUser) {
	localStorage.setItem("zebratravel_token", user.token);
	localStorage.setItem("zebratravel_user", JSON.stringify(user));
}

export function logout() {
	localStorage.removeItem("zebratravel_token");
	localStorage.removeItem("zebratravel_user");
}

async function parseError(res: Response): Promise<string> {
	try {
		const body = await res.json();
		return body.message || `Erro ${res.status}`;
	} catch {
		return `Erro ${res.status}`;
	}
}

export async function login(email: string, password: string): Promise<ClientUser> {
	const res = await fetch(`${API_URL}/api/auth/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, password }),
	});
	if (!res.ok) throw new Error(await parseError(res));
	const user = (await res.json()) as ClientUser;
	setSession(user);
	return user;
}

export async function register(fullName: string, email: string, password: string, phone?: string): Promise<ClientUser> {
	const res = await fetch(`${API_URL}/api/auth/register`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ fullName, email, password, phone }),
	});
	if (!res.ok) throw new Error(await parseError(res));
	const user = (await res.json()) as ClientUser;
	setSession(user);
	return user;
}

export async function authedFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
	const token = getToken();
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
		...(options.headers as Record<string, string> | undefined),
	};
	if (token) headers["Authorization"] = `Bearer ${token}`;

	const res = await fetch(`${API_URL}${path}`, { ...options, headers });
	if (!res.ok) throw new Error(await parseError(res));
	if (res.status === 204) return undefined as T;
	return res.json() as Promise<T>;
}
