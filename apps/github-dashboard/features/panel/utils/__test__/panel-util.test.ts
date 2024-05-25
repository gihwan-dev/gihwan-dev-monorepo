import { describe, expect, it } from "vitest";
import { getArea, isElementInArea } from "~/features/panel/utils";

describe("panel-util-test", () => {
  it("isElementInArea valid case test", () => {
    // Given
    const elementLeft = 0;
    const elementTop = 0;
    const elementWidth = 100;
    const elementHeight = 100;
    const offsetX = 50;
    const offsetY = 50;
    const size = {
      width: 3,
      height: 3,
    };

    // When
    const result = isElementInArea({
      elementLeft,
      elementTop,
      elementWidth,
      elementHeight,
      offsetX,
      offsetY,
      size,
    });

    // Then
    expect(result).toBe(true);
  });

  it("isElementInArea invalid case test", () => {
    // Given
    const elementLeft = 0;
    const elementTop = 0;
    const elementWidth = 50;
    const elementHeight = 50;
    const offsetX = 150;
    const offsetY = 150;
    const size = {
      width: 3,
      height: 3,
    };

    // When
    const result = isElementInArea({
      elementLeft,
      elementTop,
      elementWidth,
      elementHeight,
      offsetX,
      offsetY,
      size,
    });

    // Then
    expect(result).toBe(false);
  });

  it("getArea test", () => {
    // Given
    const elementWidth = 100;
    const elementHeight = 100;
    const elementLeft = 50;
    const elementTop = 50;
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
      elementLeft,
      elementTop,
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
