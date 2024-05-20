import type { ChildrenProps } from "~/types/prop-types";
import { CardTitle } from "~/components/ui/card";

export default function SignInCardTitle({ children }: ChildrenProps) {
  return <CardTitle>{children}</CardTitle>;
}
