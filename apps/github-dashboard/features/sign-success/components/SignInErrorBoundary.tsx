"use client";

import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import type { JSX } from "react";
import type { ChildrenProps } from "~/types/prop-types";
import SignInSuccessErrorComponent from "~/features/sign-success/components/SignInSuccessErrorComponent";

export default function SignInSuccessErrorBoundary({
  children,
}: ChildrenProps): JSX.Element {
  return (
    <ErrorBoundary errorComponent={SignInSuccessErrorComponent}>
      {children}
    </ErrorBoundary>
  );
}
