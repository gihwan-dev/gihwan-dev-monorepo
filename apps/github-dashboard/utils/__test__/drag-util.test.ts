import { describe, expect, it } from "vitest";
import {
  addStyleForDragContainer,
  getDragLayerElement,
  getDragWidgetContainer,
  getGridAreaFromStartIndex,
} from "~/utils/drag-util";

describe("Drag and drop test", () => {
  it("getDragWidgetContainer function test", () => {
    // Given
    const gridItemWidth = 100;
    const gridItemHeight = 100;
    const widgetSize = {
      width: 3,
      height: 3,
    };

    // When
    const result = getDragWidgetContainer({
      gridItemWidth,
      gridItemHeight,
      widgetSize,
    });

    // Then
    expect(result.style.width).toBe("300px");
    expect(result.style.height).toBe("300px");
  });

  it("addStyleForDragContainer function test", () => {
    // Given
    const offsetX = 75;
    const offsetY = 75;
    const containerWidget = document.createElement("div");

    // When
    addStyleForDragContainer({
      offsetX,
      offsetY,
      containerWidget,
    });

    // Then
    expect(containerWidget.style.position).toBe("fixed");
    expect(containerWidget.style.zIndex).toBe("1000");
    expect(containerWidget.style.left).toBe("75px");
    expect(containerWidget.style.top).toBe("75px");
    expect(containerWidget.style.opacity).toBe("0.7");
  });

  it("getDragLayerElement function test", () => {
    const layer = document.createElement("div");
    layer.id = "drag";
    document.body.appendChild(layer);

    const element = getDragLayerElement();

    expect(element.id).toBe("drag");
  });

  it("getGridAreaFromStartIndex function test", () => {
    // Given
    const startIndex = 0;
    const widgetSize = {
      width: 3,
      height: 3,
    };

    // When
    const result = getGridAreaFromStartIndex({
      startIndex,
      size: widgetSize,
    });

    // Then
    expect(result).toEqual({
      gridArea: "1 / 1 / 4 / 4",
    });
  });

  it("getGridAreaFromStartIndex function test: overflow x", () => {
    // Given
    const startIndex = 11;
    const widgetSize = {
      width: 3,
      height: 3,
    };

    // When
    const result = getGridAreaFromStartIndex({
      startIndex,
      size: widgetSize,
    });

    // Then
    expect(result).toEqual({
      gridArea: "1 / 10 / 4 / 13",
    });
  });

  it("getGridAreaFromStartIndex function test: overflow y", () => {
    // Given
    const startIndex = 132;
    const widgetSize = {
      width: 3,
      height: 3,
    };

    // When
    const result = getGridAreaFromStartIndex({
      startIndex,
      size: widgetSize,
    });

    // Then
    expect(result).toEqual({
      gridArea: "10 / 1 / 13 / 4",
    });
  });
});
