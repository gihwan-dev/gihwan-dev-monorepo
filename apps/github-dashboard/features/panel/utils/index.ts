interface DragInfoState {
  offsetX: number;
  offsetY: number;

  elementLeft: number;
  elementTop: number;
  elementWidth: number;
  elementHeight: number;
  size: {
    width: number;
    height: number;
  };
}

export function isElementInArea(dragInfo: DragInfoState) {
  const { areaLeft, areaTop, areaRight, areaBottom } = getArea(dragInfo);

  const { elementHeight, elementTop, elementWidth, elementLeft } = dragInfo;

  const elementCenterX = elementLeft + elementWidth / 2;

  const elementCenterY = elementTop + elementHeight / 2;

  return (
    elementCenterX >= areaLeft &&
    elementCenterX <= areaRight &&
    elementCenterY >= areaTop &&
    elementCenterY <= areaBottom
  );
}

export const getArea = ({
  elementWidth,
  elementHeight,
  offsetX,
  offsetY,
  size,
}: DragInfoState) => {
  return {
    areaLeft: offsetX - (size.width / 2) * elementWidth,
    areaRight: offsetX + (size.width / 2) * elementWidth,
    areaTop: offsetY - (size.height / 2) * elementHeight,
    areaBottom: offsetY + (size.height / 2) * elementHeight,
  };
};
