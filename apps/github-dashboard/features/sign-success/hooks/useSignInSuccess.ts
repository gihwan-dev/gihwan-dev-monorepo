import { useRouter, useSearchParams } from "next/navigation";
import { setGithubAccessTokenInLocalStorage } from "~/services/github-service";
import { useGetAccessToken } from "~/features/sign-success/queries/useGetAccessToken";

interface UseSignInSuccessParams {
  clientId: string | undefined;
  clientSecret: string | undefined;
}

export const useSignInSuccess = (params: UseSignInSuccessParams) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  const { mutate, isPending, isError, error, isSuccess } = useGetAccessToken();

  const onClick = () => {
    mutate(
      { ...params, code },
      {
        onSettled: (data) => {
          if (!data) {
            throw new Error("Failed to fetch access token");
          }

          const accessToken = data.access_token;

          if (!accessToken) {
            throw new Error("Failed to fetch access token");
          }
        },
        onSuccess: (data) => {
          setGithubAccessTokenInLocalStorage(data.access_token);
          router.push("/");
        },
      },
    );
  };

  return {
    onClick,
    isPending,
    isError,
    error,
    isSuccess,
  };
};
