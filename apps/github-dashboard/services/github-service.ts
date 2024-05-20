export const getGithubAccessToken = () => {
  return localStorage.getItem("access_token");
};

export const setGithubAccessTokenInLocalStorage = (token: string) => {
  localStorage.setItem("access_token", token);
};
