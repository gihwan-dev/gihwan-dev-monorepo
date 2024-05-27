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
