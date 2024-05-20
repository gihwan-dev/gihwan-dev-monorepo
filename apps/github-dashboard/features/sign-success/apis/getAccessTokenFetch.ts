import { postFetcher } from "@repo/utils/src/fetch-utils";

interface GetAccessTokenFetchParams {
  code: string | null;
  clientId: string | undefined;
  clientSecret: string | undefined;
}

export const getAccessTokenFetch = async ({
  code,
  clientId,
  clientSecret,
}: GetAccessTokenFetchParams) => {
  if (!code || !clientId || !clientSecret) {
    throw new Error("Invalid parameters");
  }

  const response = await postFetcher({
    url: "/api/auth",
    body: {
      code,
      clientId,
      clientSecret,
    },
    options: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch access token");
  }

  return (await response.json()) as Promise<{
    access_token: string;
    scope: string;
    token_type: "bearer";
  }>;
};
