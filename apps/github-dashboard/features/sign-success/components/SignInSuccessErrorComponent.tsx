import { Button } from "~/components/ui/button";
import type { ErrorBoundaryProps } from "~/types/prop-types";

export default function SignInSuccessErrorComponent({
  error,
  reset,
}: ErrorBoundaryProps) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="space-y-3">Error...</h1>
      <p className="space-y-1">{error.message}</p>
      <Button
        className="space-y-1"
        onClick={reset}
        type="button"
        variant="destructive"
      >
        Reset
      </Button>
    </div>
  );
}
