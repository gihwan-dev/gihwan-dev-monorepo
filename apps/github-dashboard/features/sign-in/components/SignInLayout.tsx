import type { ChildrenProps } from "~/types/prop-types";

export default function SignInLayout({ children }: ChildrenProps) {
  return (
    <main className="h-screen overflow-hidden flex flex-col justify-center">
      {children}
    </main>
  );
}
