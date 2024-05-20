import { Card } from "~/components/ui/card";
import type { ChildrenProps } from "~/types/prop-types";

export default function SignInCard({ children }: ChildrenProps): JSX.Element {
  return <Card className="mx-auto container max-w-md">{children}</Card>;
}
