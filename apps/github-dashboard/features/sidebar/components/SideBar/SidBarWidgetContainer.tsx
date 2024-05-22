import type { ChildrenProps } from "~/types/prop-types";

export default function SideBarWidgetContainer({ children }: ChildrenProps) {
  return (
    <ul className="flex-1 px-8 py-6 transition-all w-full flex flex-row flex-wrap">
      {children}
    </ul>
  );
}
