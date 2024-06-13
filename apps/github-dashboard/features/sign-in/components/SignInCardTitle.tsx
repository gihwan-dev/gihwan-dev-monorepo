import type { JSX } from "react";
import type { ChildrenProps } from "~/types/prop-types";
import { CardTitle } from "~/components/ui/card";

export default function SignInCardTitle({
  children,
}: ChildrenProps): JSX.Element {
  return <CardTitle>{children}</CardTitle>;
}
