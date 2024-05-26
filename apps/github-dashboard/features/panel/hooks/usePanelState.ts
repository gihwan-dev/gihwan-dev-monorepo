"use client";

import { useEffect, useRef, useState } from "react";
import { useDragStore } from "~/stores/useDragStore";
import {
  getArea,
  isElementInArea,
} from "~/features/panel/utils/panel-drag-util";
import usePanelStore from "../store/usePanelStore";

const basicClassName = "border transition-all duration-200";

export default function usePanelState() {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const gridItemRef = useRef<HTMLLIElement>(null);

  const { offsetX, offsetY, widgetSize } = useDragStore();
  const { gridItemWidth, setArea, setGridItemSize, setGridOffset } =
    usePanelStore();

  useEffect(() => {
    if (gridItemRef.current) {
      const rect = gridItemRef.current.getBoundingClientRect();
      const area = getArea({
        offsetX,
        offsetY,
        elementWidth: rect.width,
        elementHeight: rect.height,
        size: widgetSize,
      });
      setArea(area);
      const elementInArea = isElementInArea({
        elementLeft: rect.left,
        elementTop: rect.top,
        elementWidth: rect.width,
        elementHeight: rect.height,
        ...area,
      });

      if (elementInArea) {
        gridItemRef.current.className = `${basicClassName} bg-gray-200 grid-active-item`;
      } else {
        gridItemRef.current.className = basicClassName;
      }
    }
  }, [offsetX, offsetY, widgetSize, currentIndex, setArea]);

  useEffect(() => {
    if (gridItemRef.current && !gridItemWidth) {
      const rect = gridItemRef.current.getBoundingClientRect();
      setGridItemSize({
        gridItemWidth: rect.width,
        gridItemHeight: rect.height,
      });
    }
  }, [gridItemWidth, setGridItemSize]);

  useEffect(() => {
    if (currentIndex === 0 && gridItemRef.current) {
      const rect = gridItemRef.current.getBoundingClientRect();
      setGridOffset({
        gridStartLeft: rect.left,
        gridStartTop: rect.top,
      });
    }
  }, [currentIndex, setGridOffset]);

  return {
    ref: gridItemRef,
    setCurrentIndex,
  };
}
