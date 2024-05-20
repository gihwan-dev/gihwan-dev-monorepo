import { CardHeader } from "~/components/ui/card";
import type { ChildrenProps } from "~/types/prop-types";

export default function SignInCardHeader({ children }: ChildrenProps) {
  return <CardHeader>{children}</CardHeader>;
}
