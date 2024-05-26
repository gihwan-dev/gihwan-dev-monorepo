interface DragInfoState {
  elementLeft: number;
  elementTop: number;
  elementWidth: number;
  elementHeight: number;

  areaLeft: number;
  areaRight: number;
  areaTop: number;
  areaBottom: number;
}

export function isElementInArea(dragInfo: DragInfoState) {
  const {
    elementHeight,
    elementTop,
    elementWidth,
    elementLeft,
    areaTop,
    areaRight,
    areaBottom,
    areaLeft,
  } = dragInfo;

  const elementCenterX = elementLeft + elementWidth / 2;

  const elementCenterY = elementTop + elementHeight / 2;

  return (
    elementCenterX >= areaLeft &&
    elementCenterX <= areaRight &&
    elementCenterY >= areaTop &&
    elementCenterY <= areaBottom
  );
}

interface GetAreaState {
  elementWidth: number;
  elementHeight: number;
  offsetX: number;
  offsetY: number;
  size: { width: number; height: number };
}

export const getArea = ({
  elementWidth,
  elementHeight,
  offsetX,
  offsetY,
  size,
}: GetAreaState) => {
  return {
    areaLeft: offsetX - (size.width / 2) * elementWidth,
    areaRight: offsetX + (size.width / 2) * elementWidth,
    areaTop: offsetY - (size.height / 2) * elementHeight,
    areaBottom: offsetY + (size.height / 2) * elementHeight,
  };
};

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
  dragWidgetContainer.style.width = `${width}px`;
  dragWidgetContainer.style.height = `${height}px`;
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
  const width = containerWidget.offsetWidth;
  const height = containerWidget.offsetHeight;

  containerWidget.style.position = "fixed";
  containerWidget.style.zIndex = "1000";
  containerWidget.style.left = `${offsetX - width / 2}px`;
  containerWidget.style.top = `${offsetY - height / 2}px`;
  containerWidget.style.opacity = "0.7";
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
    const clientX = e.clientX;
    const clientY = e.clientY;
    setOffset(clientX, clientY);
    const width = widgetContainer.offsetWidth;
    const height = widgetContainer.offsetHeight;
    widgetContainer.style.left = `${clientX - width / 2}px`;
    widgetContainer.style.top = `${clientY - height / 2}px`;
  });
};

interface GridAreaState {
  startIndex: number;
  size: {
    width: number;
    height: number;
  };
}

// 그리드 시작 x,y 값 각 그리드 아이템 너비 높이, 에어리어 시작 x, y값 을 토대로 grid-area 값을 생성해 내는 함수
const getGridArea = ({ startIndex, size }: GridAreaState) => {
  const startElementIndex = startIndex;
  const columnStart = Math.floor(startElementIndex % 12) + 1;
  const rowStart = Math.floor(startElementIndex / 12) + 1;

  return {
    gridArea: `${rowStart} / ${columnStart} / ${rowStart + size.height} / ${columnStart + size.width}`,
  };
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

    const { gridArea } = getGridArea({
      startIndex,
      size,
    });

    const virtualGrid = getVirtualGrid();

    const newContainer = document.createElement("div");
    const children = widgetContainer.childNodes[0];

    newContainer.style.gridArea = gridArea;

    newContainer.style.position = "relative";
    newContainer.style.zIndex = "0";
    newContainer.style.left = "0";
    newContainer.style.top = "0";

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
