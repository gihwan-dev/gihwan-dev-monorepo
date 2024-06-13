"use client";

import type { JSX } from "react";
import { useEffect } from "react";
import usePanelState from "../hooks/usePanelState";

interface PanelGridItemProps {
  index: number;
}

export default function PanelGridItem({
  index,
}: PanelGridItemProps): JSX.Element {
  const { ref, setCurrentIndex } = usePanelState();

  useEffect(() => {
    setCurrentIndex(index);
  }, [setCurrentIndex, index]);

  return (
    <li
      data-testid={`grid-item-${index}`}
      id={`grid-item-${index}`}
      ref={ref}
    />
  );
}
