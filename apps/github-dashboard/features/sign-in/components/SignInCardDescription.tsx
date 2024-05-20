import type { ChildrenProps } from "~/types/prop-types";
import { CardDescription } from "~/components/ui/card";

export default function SignInCardDescription({ children }: ChildrenProps) {
  return <CardDescription>{children}</CardDescription>;
}
