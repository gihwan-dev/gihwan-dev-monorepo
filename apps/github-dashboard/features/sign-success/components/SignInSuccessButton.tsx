"use client";

import type { JSX } from "react";
import { useContext } from "react";
import { Button } from "~/components/ui/button";
import LottieLoading from "~/components/LottieLoading";
import SignInSuccessContext from "~/features/sign-success/components/SignInSuccessContext";

export default function SignInSuccessButton(): JSX.Element | null {
  const context = useContext(SignInSuccessContext);

  if (context.isSuccess) {
    return null;
  }

  return context.isPending ? (
    <LottieLoading height="100px" width="100px" />
  ) : (
    <Button className="w-44" onClick={context.onClick}>
      Go to dashboard
    </Button>
  );
}
