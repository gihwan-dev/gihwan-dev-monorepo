import type { ChildrenProps } from "~/types/prop-types";
import { CardFooter } from "~/components/ui/card";

export default function SignInCardFooter({ children }: ChildrenProps) {
  return <CardFooter>{children}</CardFooter>;
}
