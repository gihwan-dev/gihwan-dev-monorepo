import type { JSX } from "react";
import type { ChildrenProps } from "~/types/prop-types";
import { CardFooter } from "~/components/ui/card";

export default function SignInCardFooter({
  children,
}: ChildrenProps): JSX.Element {
  return <CardFooter>{children}</CardFooter>;
}
