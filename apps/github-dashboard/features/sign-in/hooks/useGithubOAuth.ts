import { useRouter } from "next/navigation";
import { resetURLPathname, setUrlPathname } from "@repo/utils/src/url-utils";

export const useGithubOAuth = (clientId: string | undefined) => {
  const router = useRouter();

  const onClick = () => {
    const githubAuthUrl = new URL("https://github.com/login/oauth/authorize");

    const originUrl = new URL(window.location.href);

    const formattedUrl = resetURLPathname(originUrl.href);

    const redirectUrl = setUrlPathname(formattedUrl.href, "/sign-in/success");

    if (!clientId) {
      return;
    }

    githubAuthUrl.searchParams.append("client_id", clientId);
    githubAuthUrl.searchParams.append("redirect_uri", redirectUrl.href);
    router.push(githubAuthUrl.href);
  };

  return {
    onClick,
  };
};
