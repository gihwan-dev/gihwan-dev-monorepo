import type { JSX } from "react";
import type { ChildrenProps } from "~/types/prop-types";
import { ResizablePanel } from "~/components/ui/resizable";

export default function SideBarLayout({
  children,
}: ChildrenProps): JSX.Element {
  return (
    // @ts-expect-error - type issue with ResizablePanel
    <ResizablePanel
      className="h-screen bg-background flex flex-col border-r w-80"
      defaultSize={30}
      minSize={15}
    >
      {children}
    </ResizablePanel>
  );
}
