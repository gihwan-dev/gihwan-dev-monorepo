import { describe, expect, it } from "vitest";
import { getArea } from "~/features/panel/utils/panel-drag-util";

describe("panel-util-test", () => {
  it("getArea test", () => {
    // Given
    const elementWidth = 100;
    const elementHeight = 100;
    const offsetX = 75;
    const offsetY = 75;
    const size = {
      width: 3,
      height: 3,
    };

    // When
    const result = getArea({
      elementWidth,
      elementHeight,
      offsetX,
      offsetY,
      size,
    });

    // Then
    expect(result).toEqual({
      areaLeft: -75,
      areaRight: 225,
      areaTop: -75,
      areaBottom: 225,
    });
  });
});
