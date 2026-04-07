export interface PayloadListResponse<T> {
  docs: T[];
}

export async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    credentials: "same-origin",
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as T;
}
