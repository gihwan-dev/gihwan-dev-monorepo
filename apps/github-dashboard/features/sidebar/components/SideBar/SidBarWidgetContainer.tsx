import type { JSX } from "react";
import type { ChildrenProps } from "~/types/prop-types";

export default function SideBarWidgetContainer({
  children,
}: ChildrenProps): JSX.Element {
  return (
    <div className="h-full overflow-y-auto flex flex-col gap-2 px-8 py-6 transition-all w-full">
      <h4 className="scroll-m-20 text-sm text-muted-foreground font-semibold tracking-tight">
        Widget list
      </h4>
      {children}
    </div>
  );
}
