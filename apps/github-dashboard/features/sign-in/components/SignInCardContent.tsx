import { CardContent } from "~/components/ui/card";
import type { ChildrenProps } from "~/types/prop-types";

export default function SignInCardContent({ children }: ChildrenProps) {
  return (
    <CardContent className="w-full flex items-center justify-center">
      {children}
    </CardContent>
  );
}
