import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "~/app/page";

describe("Drag and drop test", () => {
  it("should can see sidebar and widget list", () => {
    render(<Page />);

    const sideBarTitle = screen.getByText("Widget list");

    const widgetList = screen.getAllByRole("listitem");

    expect(sideBarTitle).toBeDefined();
    expect(widgetList).toBeDefined();
  });
});
