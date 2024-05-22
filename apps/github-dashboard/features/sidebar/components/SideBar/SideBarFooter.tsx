import type { ChildrenProps } from "~/types/prop-types";

export default function SideBarFooter({ children }: ChildrenProps) {
  return (
    <footer className="py-6 px-8 bg-muted/40 border-t flex flex-row items-center justify-end">
      {children}
    </footer>
  );
}
