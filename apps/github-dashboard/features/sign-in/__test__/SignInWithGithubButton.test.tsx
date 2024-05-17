import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import SignInWithGitHubButton from "~/features/sign-in/components/SignInWithGitHubButton";
import { router } from "~/tests/mocks/useRouterMocks";

vi.mock("next/navigation");

const clientId = "12345";

describe("Sign in with Github button test", () => {
  it("should can render sign in with github button", () => {
    render(<SignInWithGitHubButton clientId={clientId} />);

    const signInWithGithubButton = screen.getByRole("button", {
      name: /github/gi,
    });

    expect(signInWithGithubButton).toBeDefined();
  });

  it("should can sign in with github button", async () => {
    vi.mocked(useRouter).mockReturnValueOnce(router);

    const user = userEvent.setup();

    vi.mock;

    render(<SignInWithGitHubButton clientId={clientId} />);

    const signInWithGithubButton = screen.getByRole("button", {
      name: /github/gi,
    });

    await user.click(signInWithGithubButton);

    expect(signInWithGithubButton).toBeDefined();

    expect(router.push).toBeCalled();
  });
});
