"use client";

import { type JSX, useContext } from "react";
import SignInSuccessContext from "~/features/sign-success/components/SignInSuccessContext";

export default function SignInSuccessTitle(): JSX.Element | null {
  const context = useContext(SignInSuccessContext);

  if (context.isSuccess || context.isPending) {
    return null;
  }

  return <h1 className="text-center font-bold">Confirm your sign in</h1>;
}
