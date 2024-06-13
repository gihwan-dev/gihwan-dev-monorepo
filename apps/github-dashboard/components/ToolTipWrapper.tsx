import type { JSX } from "react";
import type { ChildrenProps } from "~/types/prop-types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ToolTipWrapperProps extends ChildrenProps {
  description: string;
}

export default function ToolTipWrapper({
  children,
  description,
}: ToolTipWrapperProps): JSX.Element {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
