type Fetch = typeof fetch;

function wrapFetch(fetch: Fetch, baseURL: string): Fetch {
	return (url, ...params) => {
		if (url.toString().startsWith("/")) return fetch(baseURL + url, ...params);
		else return fetch(url, ...params);
	};
}

export function setupFetch(fetch: Fetch, baseURL: string) {
	const newFetch = wrapFetch(fetch, baseURL);
	globalThis.fetch = newFetch;
}
