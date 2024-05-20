interface FetchOptions {
  url: string;
  options: Omit<RequestInit, "method">;
}

interface PostFetcherOptions extends FetchOptions {
  body?: Record<any, any>;
}

export const getFetcher = ({ url, options }: FetchOptions) => {
  return fetch(url, {
    method: "GET",
    ...options,
  });
};

export const postFetcher = ({ url, options, body }: PostFetcherOptions) => {
  return fetch(url, {
    method: "POST",
    ...options,
    body: body === undefined ? undefined : JSON.stringify(body),
  });
};
