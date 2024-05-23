interface Index {
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

export function isElementInArea({
  elementLeft,
  elementTop,
  elementWidth,
  elementHeight,
  offsetX,
  offsetY,
  size,
}: Index) {
  const areaLeft = offsetX - (size.width / 2) * elementWidth;
  const areaRight = offsetX + (size.width / 2) * elementWidth;
  const areaTop = offsetY - (size.height / 2) * elementHeight;
  const areaBottom = offsetY + (size.height / 2) * elementHeight;

  const elementCenterX = elementLeft + elementWidth / 2;

  const elementCenterY = elementTop + elementHeight / 2;

  return (
    elementCenterX >= areaLeft &&
    elementCenterX <= areaRight &&
    elementCenterY >= areaTop &&
    elementCenterY <= areaBottom
  );
}
