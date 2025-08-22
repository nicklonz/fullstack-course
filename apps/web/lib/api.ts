const PUBLIC_API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const INTERNAL_API_BASE =
  process.env.INTERNAL_API_URL || PUBLIC_API_BASE;

const isServer = typeof window === "undefined";
const API_BASE = isServer ? INTERNAL_API_BASE : PUBLIC_API_BASE;

async function handle(res: Response) {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Request failed ${res.status}: ${text}`);
  }
  return res.json();
}

export async function getJSON<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, { ...init, cache: "no-store" });
  return handle(res) as Promise<T>;
}

export async function postJSON<T>(path: string, body: any): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  return handle(res) as Promise<T>;
}

export async function putJSON<T>(path: string, body: any): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  return handle(res) as Promise<T>;
}

export async function del(path: string): Promise<{ ok: true }> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "DELETE",
    cache: "no-store",
  });
  return handle(res) as Promise<{ ok: true }>;
}
