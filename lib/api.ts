const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

// Network-level failures (e.g. backend not accepting connections yet right after a
// deploy/restart) are retried once after a short delay, so a transient hiccup doesn't
// surface to the user as an empty page that only fixes itself on manual refresh.
async function fetchWithRetry(url: string, init: RequestInit): Promise<Response> {
	try {
		return await fetch(url, init);
	} catch {
		await new Promise((resolve) => setTimeout(resolve, 400));
		return fetch(url, init);
	}
}

async function request<T>(path: string, options: RequestInit = {}, token?: string): Promise<T> {
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
		...(options.headers as Record<string, string> | undefined),
	};
	if (token) {
		headers["Authorization"] = `Bearer ${token}`;
	}

	const res = await fetchWithRetry(`${API_URL}${path}`, { cache: "no-store", ...options, headers });

	if (!res.ok) {
		let message = `Erro ${res.status}`;
		try {
			const body = await res.json();
			message = body.message || message;
		} catch {
			// ignore body parse errors
		}
		throw new Error(message);
	}

	if (res.status === 204) {
		return undefined as T;
	}

	return res.json() as Promise<T>;
}

export const api = {
	get: <T>(path: string, token?: string) => request<T>(path, { method: "GET" }, token),
	post: <T>(path: string, body?: unknown, token?: string) => request<T>(path, { method: "POST", body: body !== undefined ? JSON.stringify(body) : undefined }, token),
	put: <T>(path: string, body?: unknown, token?: string) => request<T>(path, { method: "PUT", body: body !== undefined ? JSON.stringify(body) : undefined }, token),
	patch: <T>(path: string, body?: unknown, token?: string) => request<T>(path, { method: "PATCH", body: body !== undefined ? JSON.stringify(body) : undefined }, token),
	delete: <T>(path: string, token?: string) => request<T>(path, { method: "DELETE" }, token),
};
