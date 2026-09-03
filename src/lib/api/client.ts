const getBaseUrl = (): string => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  if (!url) {
    return "https://68ece284eff9ad3b1403ae8f.mockapi.io";
  }
  return url.replace(/\/$/, "");
};

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const baseUrl = getBaseUrl();
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const fullUrl = `${baseUrl}${cleanEndpoint}`;

  const isServer = typeof window === "undefined";
  const { next, ...customOptions } = (options || {}) as RequestInit & {
    next?: Record<string, unknown>;
  };

  const fetchOptions: RequestInit = {
    ...customOptions,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  };

  if (isServer) {
    (fetchOptions as Record<string, unknown>).next = {
      revalidate: 60,
      ...(next || {}),
    };
  }

  try {
    const response = await fetch(fullUrl, fetchOptions);

    if (!response.ok) {
      throw new Error(
        `API Request failed for ${endpoint}: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    if (
      error instanceof Error &&
      (error.name === "TypeError" || error.message.includes("Failed to fetch"))
    ) {
      throw new Error(
        `Network error: Unable to connect to ${fullUrl}. Please check your connection or CORS settings.`
      );
    }
    throw error;
  }
}
