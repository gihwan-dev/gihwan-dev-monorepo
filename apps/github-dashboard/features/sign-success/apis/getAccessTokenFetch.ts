import { postFetcher } from "@repo/utils/src/fetch-utils";
import { sleep } from "@repo/utils/src/promise-utils";

export interface GetAccessTokenFetchParams {
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

  await sleep(5000);

  return {
    access_token: "mocked_access_token",
    scope: "mocked_scope",
    token_type: "bearer",
  };

  return (await response.json()) as Promise<{
    access_token: string;
    scope: string;
    token_type: "bearer";
  }>;
};
