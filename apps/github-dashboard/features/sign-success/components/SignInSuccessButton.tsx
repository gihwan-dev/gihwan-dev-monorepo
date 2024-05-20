"use client";

import { Button } from "~/components/ui/button";
import { useSignInSuccess } from "~/features/sign-success/hooks/useSignInSuccess";

interface SignInSuccessButtonProps {
  clientId: string | undefined;
  clientSecret: string | undefined;
}

export default function SignInSuccessButton(props: SignInSuccessButtonProps) {
  const { onClick } = useSignInSuccess(props);

  return <Button onClick={onClick}>Go to dashboard</Button>;
}
