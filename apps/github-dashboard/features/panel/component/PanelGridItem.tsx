"use client";

import usePanelState from "~/features/panel/hooks/usePanelState";

export default function PanelGridItem() {
  const { ref } = usePanelState();
  return <li className="border border-muted transition-opacity" ref={ref} />;
}
