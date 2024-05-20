import { useMutation } from "@tanstack/react-query";
import { getAccessTokenFetch } from "~/features/sign-success/apis/getAccessTokenFetch";
import { queries } from "~/lib/query-key-store";

export const useGetAccessToken = () =>
  useMutation({
    mutationKey: queries.token.get.queryKey,
    mutationFn: getAccessTokenFetch,
  });
