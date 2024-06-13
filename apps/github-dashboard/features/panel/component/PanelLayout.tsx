import type { JSX } from "react";
import { ResizablePanel } from "~/components/ui/resizable";
import type { ChildrenProps } from "~/types/prop-types";

export default function PanelLayout({ children }: ChildrenProps): JSX.Element {
  return (
    // @ts-expect-error - type issue with ResizablePanel
    <ResizablePanel className="flex-1 h-screen relative" defaultSize={70}>
      {children}
    </ResizablePanel>
  );
}
