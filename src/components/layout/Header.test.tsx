import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { ReactNode } from "react";
import { Header } from "./Header";
const state = vi.hoisted(() => ({
  location: { pathname: "/service", href: "/service" },
}));
vi.mock("@tanstack/react-router", () => ({
  useLocation: () => state.location,
  Link: ({ to, children, ...props }: { to: string; children: ReactNode }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));
vi.mock("./AccountIcon", () => ({
  AccountIcon: () => <a href="/account">アカウント</a>,
}));
let resize: (() => void) | undefined;
beforeEach(() => {
  state.location = { pathname: "/service", href: "/service" };
  vi.stubGlobal("matchMedia", () => ({
    matches: true,
    addEventListener: (_: string, listener: () => void) => {
      resize = listener;
    },
    removeEventListener: vi.fn(),
  }));
  HTMLDialogElement.prototype.showModal = function () {
    this.open = true;
  };
  HTMLDialogElement.prototype.close = function () {
    if (!this.open) return;
    this.open = false;
    this.dispatchEvent(new Event("close"));
  };
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  document.body.style.overflow = "";
});
describe("global navigation", () => {
  it("restores scrolling and expanded state when the menu closes", () => {
    document.body.style.overflow = "auto";
    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: "メニューを開く" }));
    expect(screen.getByRole("dialog")).toBeVisible();
    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.click(screen.getByRole("button", { name: "メニューを閉じる" }));
    expect(document.body.style.overflow).toBe("auto");
    expect(
      screen.getByRole("button", { name: "メニューを開く" }),
    ).toHaveAttribute("aria-expanded", "false");
  });
  it("closes the overlay when resizing to desktop, without leaving scrolling locked", () => {
    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: "メニューを開く" }));
    act(() => resize?.());
    expect(document.querySelector("dialog")).not.toHaveAttribute("open");
    expect(document.body.style.overflow).toBe("");
  });
  it("closes a menu after a route change and marks the new current page", () => {
    const { rerender } = render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: "メニューを開く" }));
    state.location = { pathname: "/company", href: "/company" };
    rerender(<Header />);
    expect(document.querySelector("dialog")).not.toHaveAttribute("open");
    expect(
      screen
        .getByRole("navigation", { name: "メインナビゲーション" })
        .querySelector('[aria-current="page"]'),
    ).toHaveTextContent("企業情報");
    expect(document.body.style.overflow).toBe("");
  });
});
