import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SignInCard from "~/features/sign-in/components/SignInCard";

describe("Longin form test", () => {
  it("should render sign-in form", () => {
    // Arrange
    render(<SignInCard />);

    // Assert
    const signInWithGithubButton = screen.getByRole("button", {
      name: /github/gi,
    });

    expect(signInWithGithubButton).toBeDefined();
  });
});
