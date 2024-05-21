import { createContext } from "react";
import type { SignInSuccessContextState } from "~/features/sign-success/types";

const SignInSuccessContext = createContext<SignInSuccessContextState>({
  clientId: "",
  clientSecret: "",
  onClick: () => {
    return null;
  },
  isSuccess: false,
  isPending: false,
  error: null,
});

export default SignInSuccessContext;
