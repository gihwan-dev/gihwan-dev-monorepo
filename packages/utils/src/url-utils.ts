export const resetURLPathname = (url: string) => {
  const newUrl = new URL(url);

  newUrl.pathname = "/";

  return newUrl;
};

export const setUrlPathname = (url: string, pathname: string) => {
  const newUrl = new URL(url);

  newUrl.pathname = pathname;

  return newUrl;
};

export const addUrlSearchParams = (
  url: string,
  searchParams: Record<string, string>,
) => {
  const newUrl = new URL(url);

  Object.entries(searchParams).forEach(([key, value]) => {
    newUrl.searchParams.append(key, value);
  });

  return newUrl;
};
