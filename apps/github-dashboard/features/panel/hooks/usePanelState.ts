import { useEffect, useRef } from "react";
import { useDragStore } from "~/stores/useDragStore";
import { isElementInArea } from "~/features/panel/utils";

const basicClassName = "border transition-all duration-200";

export default function usePanelState() {
  const { offsetX, offsetY, widgetSize } = useDragStore();
  const gridItemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (gridItemRef.current) {
      const rect = gridItemRef.current.getBoundingClientRect();
      const elementInArea = isElementInArea({
        offsetX,
        offsetY,
        elementLeft: rect.left,
        elementTop: rect.top,
        elementWidth: rect.width,
        elementHeight: rect.height,
        size: widgetSize,
      });

      if (elementInArea) {
        gridItemRef.current.className = `${basicClassName} bg-blue-200`;
      } else {
        gridItemRef.current.className = `${basicClassName} border transition-all`;
      }
    }
  }, [offsetX, offsetY, widgetSize]);

  return {
    ref: gridItemRef,
  };
}
