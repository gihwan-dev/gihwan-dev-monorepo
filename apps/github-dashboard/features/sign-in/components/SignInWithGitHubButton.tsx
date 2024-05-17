"use client";

import { Button } from "~/components/ui/button";
import GithubLogo from "~/assets/svgs/GithubLogo";
import { useGithubOAuth } from "~/features/sign-in/hooks/useGithubOAuth";

interface SignInWithGitHubButtonProps {
  clientId: string | undefined;
}

export default function SignInWithGitHubButton({
  clientId,
}: SignInWithGitHubButtonProps) {
  return (
    <Button
      className="w-full flex flex-row items-center justify-center gap-2"
      {...useGithubOAuth(clientId)}
      type="button"
    >
      <p>Sign in with GitHub.</p>
      <GithubLogo height={22} width={22} />
    </Button>
  );
}
