"use client";

import { useContext } from "react";
import SignInSuccessContext from "~/features/sign-success/components/SignInSuccessContext";

export default function SignInSuccessTitle() {
  const context = useContext(SignInSuccessContext);

  if (context.isSuccess || context.isPending) {
    return null;
  }

  return <h1 className="text-center font-bold">Confirm your sign in</h1>;
}
