export const resetURLPathname = (url: string) => {
  const newUrl = new URL(url);

  newUrl.pathname = "/";

  return newUrl;
};
