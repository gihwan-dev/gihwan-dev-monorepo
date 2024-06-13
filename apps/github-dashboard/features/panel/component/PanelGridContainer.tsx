"use client";

import type { JSX } from "react";
import PanelGridItem from "./PanelGridItem";

export default function PanelGridContainer(): JSX.Element {
  const itemAmount = 12 * 12;

  return (
    <>
      <ul className="w-full h-full grid grid-cols-12 grid-rows-12">
        {Array.from({ length: itemAmount }, (v, k) => k).map((value, index) => (
          <PanelGridItem index={index} key={`panel-grid-item-${value}`} />
        ))}
      </ul>
      <ul
        className="absolute top-0 left-0 h-full w-full grid grid-cols-12 grid-rows-12 z-50"
        data-testid="virtual-grid"
        id="virtual-grid"
      />
    </>
  );
}
