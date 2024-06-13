import type { JSX } from "react";
import type { ChildrenProps } from "~/types/prop-types";
import { CardDescription } from "~/components/ui/card";

export default function SignInCardDescription({
  children,
}: ChildrenProps): JSX.Element {
  return <CardDescription>{children}</CardDescription>;
}
