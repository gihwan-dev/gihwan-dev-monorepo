import type { JSX } from "react";
import type { ChildrenProps } from "~/types/prop-types";

export default function SideBarHeader({
  children,
}: ChildrenProps): JSX.Element {
  return (
    <header className="w-full py-6 px-8 border-b flex flex-row items-center gap-4">
      {children}
    </header>
  );
}
