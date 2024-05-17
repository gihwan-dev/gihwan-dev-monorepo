import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function SignInSuccessPage() {
  return (
    <main className="w-screen h-screen flex items-center justify-center flex-col gap-8">
      <h1 className="text-center">Sign in success</h1>
      <Button asChild>
        <Link href="/">Go to dashboard</Link>
      </Button>
    </main>
  );
}
