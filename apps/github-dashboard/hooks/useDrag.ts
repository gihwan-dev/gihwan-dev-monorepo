import type React from "react";
import { useCallback } from "react";
import _ from "lodash";
import { useDragStore } from "~/stores/useDragStore";

export default function useDrag() {
  const { setIsDragging, setOffset, resetDragState, setWidgetSize } =
    useDragStore();

  const onDragStart = (
    e: React.DragEvent,
    size: { width: number; height: number },
  ) => {
    setIsDragging(true);
    setOffset(e.clientX, e.clientY);
    setWidgetSize(size.width, size.height);
  };

  const onDrag = (e: React.DragEvent) => {
    setOffset(e.clientX, e.clientY);
  };

  const onDragEnd = () => {
    resetDragState();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps -- for performance optimization
  const throttledOnDrag = useCallback(_.throttle(onDrag, 100), []);

  return {
    onDragStart,
    onDrag: throttledOnDrag,
    onDragEnd,
  };
}
