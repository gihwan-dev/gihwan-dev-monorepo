import type { JSX } from "react";
import type { ChildrenProps } from "~/types/prop-types";

export default function SignInLayout({ children }: ChildrenProps): JSX.Element {
  return (
    <main className="h-screen overflow-hidden flex flex-col justify-center">
      {children}
    </main>
  );
}
