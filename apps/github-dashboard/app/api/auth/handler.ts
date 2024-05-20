import { postFetcher } from "@repo/utils/src/fetch-utils";
import { addUrlSearchParams } from "@repo/utils/src/url-utils";
import { githubAuthUrl } from "~/features/sign-success/consts/githubAuthUrl";

interface GithubOAuthHandlerParams {
  code: string;
  clientId: string;
  clientSecret: string;
}

export const githubOAuthHandler = async ({
  code,
  clientId,
  clientSecret,
}: GithubOAuthHandlerParams) => {
  const url = addUrlSearchParams(githubAuthUrl, {
    code,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await postFetcher({
    url: url.href,
    options: {},
    body: {},
  });

  if (!response.ok) {
    throw new Error("Failed to fetch access token");
  }
  const textResponse = await response.text();

  const params = new URLSearchParams(textResponse);

  return {
    access_token: params.get("access_token"),
    scope: params.get("scope"),
    token_type: params.get("token_type"),
  };
};
