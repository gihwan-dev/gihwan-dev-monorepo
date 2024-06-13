import type { JSX } from "react";
import { CardHeader } from "~/components/ui/card";
import type { ChildrenProps } from "~/types/prop-types";

export default function SignInCardHeader({
  children,
}: ChildrenProps): JSX.Element {
  return <CardHeader>{children}</CardHeader>;
}
