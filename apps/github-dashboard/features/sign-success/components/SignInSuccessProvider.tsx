"use client";

import type { ChildrenProps } from "~/types/prop-types";
import { useSignInSuccess } from "~/features/sign-success/hooks/useSignInSuccess";
import SignInSuccessContext from "./SignInSuccessContext";

interface SignInSuccessProviderProps extends ChildrenProps {
  clientId: string | undefined;
  clientSecret: string | undefined;
}

export default function SignInSuccessProvider({
  children,
  ...state
}: ChildrenProps & SignInSuccessProviderProps) {
  return (
    <SignInSuccessContext.Provider
      value={{
        ...state,
        ...useSignInSuccess(state),
      }}
    >
      {children}
    </SignInSuccessContext.Provider>
  );
}
