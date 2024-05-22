import type { ChildrenProps } from "~/types/prop-types";
import { ResizablePanel } from "~/components/ui/resizable";

export default function SideBarLayout({ children }: ChildrenProps) {
  return (
    <ResizablePanel
      className="h-screen bg-background flex flex-col border-r w-80"
      defaultSize={30}
      minSize={15}
    >
      {children}
    </ResizablePanel>
  );
}
