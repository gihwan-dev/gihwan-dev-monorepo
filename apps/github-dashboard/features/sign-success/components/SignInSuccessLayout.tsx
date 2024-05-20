import type { ChildrenProps } from "~/types/prop-types";

export default function SignInSuccessLayout({ children }: ChildrenProps) {
  return (
    <main className="w-screen h-screen flex items-center justify-center flex-col gap-8">
      {children}
    </main>
  );
}
