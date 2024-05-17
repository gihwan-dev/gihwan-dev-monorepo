export const resetURLPathname = (url: string) => {
  const newUrl = new URL(url);

  newUrl.pathname = "/";

  return newUrl;
};

export const addUrlPathname = (url: string, pathname: string) => {
  const newUrl = new URL(url);

  newUrl.pathname = pathname;

  return newUrl;
};
