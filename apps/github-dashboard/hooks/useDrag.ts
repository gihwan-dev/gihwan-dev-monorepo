import type React from "react";
import { createElement, useCallback } from "react";
import { createRoot } from "react-dom/client";
import _ from "lodash";
import { useDragStore } from "~/stores/useDragStore";
import { usePanelStore } from "~/features/panel";
import {
  addMouseMoveEvent,
  addMouseUpEvent,
  addStyleForDragContainer,
  getDragLayerElement,
  getDragWidgetContainer,
} from "~/utils/drag-util";

export default function useDrag() {
  const { setOffset, resetDragState, setWidgetSize } = useDragStore();

  const {
    gridItemHeight,
    gridItemWidth,
    reset: resetPanelState,
  } = usePanelStore();

  // eslint-disable-next-line react-hooks/exhaustive-deps -- throttledSetOffset is a function
  const throttledSetOffset = useCallback(_.throttle(setOffset, 200), []);

  const onMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    size: { width: number; height: number },
    component: React.FC,
  ) => {
    e.preventDefault();
    const dragWidgetContainer = getDragWidgetContainer({
      gridItemWidth,
      gridItemHeight,
      widgetSize: size,
    });

    const widgetRoot = createRoot(dragWidgetContainer);

    const targetComponent = createElement(component);

    const dragLayerElement = getDragLayerElement();

    widgetRoot.render(targetComponent);

    dragLayerElement.appendChild(dragWidgetContainer);

    addStyleForDragContainer({
      offsetX: e.clientX,
      offsetY: e.clientY,
      containerWidget: dragWidgetContainer,
    });

    addMouseMoveEvent({
      widgetContainer: dragWidgetContainer,
      setOffset: throttledSetOffset,
    });

    addMouseUpEvent({
      widgetContainer: dragWidgetContainer,
      resetDragState,
      resetPanelState,
      size,
    });

    setOffset(e.clientX, e.clientY);
    setWidgetSize(size.width, size.height);
  };

  return {
    onMouseDown,
  };
}
