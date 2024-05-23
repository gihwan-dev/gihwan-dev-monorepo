import { useEffect, useRef } from "react";
import { useDragStore } from "~/stores/useDragStore";
import { isElementInArea } from "~/features/panel/utils";

export default function usePanelState() {
  const { offsetX, offsetY, widgetSize } = useDragStore();
  const gridItemRef = useRef<HTMLLIElement>(null);

  // TODO: 커서 위치에 기반해서 어떤 요소가 선택되었는지 확인하는 로직 작성
  // size 는 3 * 3 형식의 드래그 되는 위젯이 차지하는 그리드 아이템의 갯수다.
  // offsetX, offsetY 는 현재 마우스 커서의 위치를 나타낸다.
  // 이를 통해 현재 마우스 커서가 있는 위치에서 어떤 그리드 아이템이 선택되었는지 확인한다.
  useEffect(() => {
    if (gridItemRef.current) {
      const rect = gridItemRef.current.getBoundingClientRect();
      const isActive = isElementInArea({
        offsetX,
        offsetY,
        elementLeft: rect.left,
        elementTop: rect.top,
        elementWidth: rect.width,
        elementHeight: rect.height,
        size: widgetSize,
      });

      if (isActive) {
        gridItemRef.current.className = "border border-muted bg-gray-200";
      } else {
        gridItemRef.current.className = "border border-muted";
      }
    }
  }, [offsetX, offsetY, widgetSize]);

  return {
    ref: gridItemRef,
  };
}
