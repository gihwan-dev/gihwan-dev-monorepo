import type { ChildrenProps } from "~/types/prop-types";

export default function SideBarWidgetContainer({ children }: ChildrenProps) {
  return (
    <div className="h-full overflow-y-auto px-8 py-6 transition-all w-full">
      {children}
    </div>
  );
}
