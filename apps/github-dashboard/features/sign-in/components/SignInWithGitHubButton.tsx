"use client";

import { Button } from "~/components/ui/button";
import GithubLogo from "~/assets/svgs/GithubLogo";

export default function SignInWithGitHubButton() {
  return (
    <Button
      className="w-full flex flex-row items-center justify-center gap-2"
      onClick={() => {
        // TODO: Implement GitHub sign in.
      }}
      type="button"
    >
      <p>Sign in with GitHub.</p>
      <GithubLogo height={22} width={22} />
    </Button>
  );
}
