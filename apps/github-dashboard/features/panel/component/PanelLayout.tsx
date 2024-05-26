import { ResizablePanel } from "~/components/ui/resizable";
import type { ChildrenProps } from "~/types/prop-types";

export default function PanelLayout({ children }: ChildrenProps) {
  return (
    <ResizablePanel className="flex-1 h-screen relative" defaultSize={70}>
      {children}
    </ResizablePanel>
  );
}
