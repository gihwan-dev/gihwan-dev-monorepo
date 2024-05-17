"use client";

import { useRouter } from "next/navigation";
import { resetURLPathname } from "@repo/utils/src/url-utils";
import { Button } from "~/components/ui/button";
import GithubLogo from "~/assets/svgs/GithubLogo";

interface SignInWithGitHubButtonProps {
  clientId: string | undefined;
}

export default function SignInWithGitHubButton({
  clientId,
}: SignInWithGitHubButtonProps) {
  const router = useRouter();

  const onClick = () => {
    const githubAuthUrl = new URL("https://github.com/login/oauth/authorize");

    // TODO: 함수형 코딩으로 안정하게 URL 조작

    const originUrl = new URL(window.location.href);

    const formattedUrl = resetURLPathname(originUrl.href);

    if (!clientId) {
      // TODO: Open dialog.
      return;
    }

    githubAuthUrl.searchParams.append("client_id", clientId);
    githubAuthUrl.searchParams.append("redirect_url", formattedUrl.href);
    router.push(githubAuthUrl.href);
  };
  return (
    <Button
      className="w-full flex flex-row items-center justify-center gap-2"
      onClick={onClick}
      type="button"
    >
      <p>Sign in with GitHub.</p>
      <GithubLogo height={22} width={22} />
    </Button>
  );
}
