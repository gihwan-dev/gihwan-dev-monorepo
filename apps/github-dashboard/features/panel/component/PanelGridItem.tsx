"use client";

import { useEffect } from "react";
import usePanelState from "../hooks/usePanelState";

interface PanelGridItemProps {
  index: number;
}

export default function PanelGridItem({ index }: PanelGridItemProps) {
  const { ref, setCurrentIndex } = usePanelState();

  useEffect(() => {
    setCurrentIndex(index);
  }, [setCurrentIndex, index]);

  return <li id={`grid-item-${index}`} ref={ref} />;
}
