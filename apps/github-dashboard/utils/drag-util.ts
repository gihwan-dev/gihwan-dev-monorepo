import {
  addStyleToDomNode,
  getElementWidthAndHeight,
} from "@repo/utils/src/dom-utils";
import { getMousePosition } from "@repo/utils/src/mouse-event-utils";

interface GetDragWidgetContainerState {
  gridItemWidth: number;
  gridItemHeight: number;
  widgetSize: {
    width: number;
    height: number;
  };
}

export const getDragWidgetContainer = ({
  gridItemWidth,
  gridItemHeight,
  widgetSize,
}: GetDragWidgetContainerState) => {
  const dragWidgetContainer = document.createElement("div");

  const width = gridItemWidth * widgetSize.width;
  const height = gridItemHeight * widgetSize.height;

  addStyleToDomNode({
    target: dragWidgetContainer,
    style: {
      width: `${width}px`,
      height: `${height}px`,
    },
  });

  return dragWidgetContainer;
};

interface AddStyleForDragContainerState {
  offsetX: number;
  offsetY: number;
  containerWidget: HTMLDivElement;
}

export const addStyleForDragContainer = ({
  offsetX,
  offsetY,
  containerWidget,
}: AddStyleForDragContainerState) => {
  const { width, height } = getElementWidthAndHeight(containerWidget);

  addStyleToDomNode({
    target: containerWidget,
    style: {
      position: "fixed",
      zIndex: "1000",
      left: `${offsetX - width / 2}px`,
      top: `${offsetY - height / 2}px`,
      opacity: "0.7",
    },
  });
};

export const getDragLayerElement = () => {
  return document.getElementById("drag") as HTMLDivElement;
};

interface AddMouseMoveEventState {
  widgetContainer: HTMLDivElement;
  setOffset: (x: number, y: number) => void;
}

export const addMouseMoveEvent = ({
  widgetContainer,
  setOffset,
}: AddMouseMoveEventState) => {
  widgetContainer.addEventListener("mousemove", (e) => {
    const { x: clientX, y: clientY } = getMousePosition(e);

    const { width, height } = getElementWidthAndHeight(widgetContainer);

    addStyleToDomNode({
      target: widgetContainer,
      style: {
        left: `${clientX - width / 2}px`,
        top: `${clientY - height / 2}px`,
      },
    });

    setOffset(clientX, clientY);
  });
};

interface AddMouseUpEventState {
  widgetContainer: HTMLDivElement;
  resetDragState: () => void;
  resetPanelState: () => void;
  size: {
    width: number;
    height: number;
  };
}

export const addMouseUpEvent = ({
  widgetContainer,
  resetDragState,
  resetPanelState,
  size,
}: AddMouseUpEventState) => {
  widgetContainer.addEventListener("mouseup", () => {
    const activeGridItem = getActiveGridItem();

    if (!activeGridItem) {
      // TODO: 에러 처리
      return;
    }

    const startIndex = Number(activeGridItem.id.split("-")[2]);

    const { gridArea } = getGridAreaFromStartIndex({
      startIndex,
      size,
    });

    const virtualGrid = getVirtualGrid();

    const newContainer = document.createElement("div");

    const children = widgetContainer.childNodes[0];

    addStyleToDomNode({
      target: newContainer,
      style: {
        gridArea,
        position: "relative",
        zIndex: "0",
        left: "0",
        top: "0",
      },
    });

    if (children) {
      newContainer.appendChild(children);
    }

    virtualGrid.appendChild(newContainer);

    widgetContainer.remove();
    resetDragState();
    resetPanelState();
  });
};

const getActiveGridItem = () => {
  return document.querySelector(".grid-active-item");
};

const getVirtualGrid = () => {
  return document.getElementById("virtual-grid") as HTMLUListElement;
};

interface GridAreaState {
  startIndex: number;
  size: {
    width: number;
    height: number;
  };
}

export const getGridAreaFromStartIndex = ({
  startIndex,
  size,
}: GridAreaState) => {
  const columnStart = getColumnStart({ startIndex, width: size.width });
  const rowStart = getRowStart({ startIndex, height: size.height });

  return {
    gridArea: `${rowStart} / ${columnStart} / ${rowStart + size.height} / ${columnStart + size.width}`,
  };
};

interface GetColumnStartState {
  startIndex: number;
  width: number;
}

const getColumnStart = ({ startIndex, width }: GetColumnStartState) => {
  if ((startIndex % 12) + width > 12) {
    return 12 - width + 1;
  }

  return (startIndex % 12) + 1;
};

interface GetRowStartState {
  startIndex: number;
  height: number;
}

const getRowStart = ({ startIndex, height }: GetRowStartState) => {
  const rowStart = Math.floor(startIndex / 12) + 1;
  if (Math.floor(startIndex / 12) + height > 12) {
    return 12 - height + 1;
  }

  return rowStart;
};
