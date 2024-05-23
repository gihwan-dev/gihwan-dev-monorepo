import { describe, expect, it } from "vitest";
import { isElementInArea } from "~/features/panel/utils";

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
});
