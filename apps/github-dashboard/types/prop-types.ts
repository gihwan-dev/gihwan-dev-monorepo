import type { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface ErrorBoundaryProps {
  reset: () => void;
  error: Error;
}
