import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { CompanyUserContext } from "@/hooks/companyUserContext";
import type { CompanyUser } from "@/hooks/useCompanyAuth";
import { LIME_SNS_URL } from "@/lib/limeIntegration";
import { AccountIcon } from "./AccountIcon";
afterEach(cleanup);
const account = (name: string, username: string) =>
  ({ id: username, displayName: name, username }) as CompanyUser;
it("shows the signed-in account and opens that account's SNS profile", () => {
  render(
    <CompanyUserContext.Provider value={account("テストユーザー", "test_user")}>
      <AccountIcon />
    </CompanyUserContext.Provider>,
  );
  expect(
    screen.getByRole("link", {
      name: "ログイン中のアカウント: テストユーザー",
    }),
  ).toHaveAttribute("href", `${LIME_SNS_URL}u/test_user`);
  // A missing profile image still has a visible fallback.
  expect(document.querySelector("svg")).not.toBeNull();
});
it("replaces the previous account identity when switching", () => {
  const { rerender } = render(
    <CompanyUserContext.Provider value={account("ユーザーA", "a")}>
      <AccountIcon />
    </CompanyUserContext.Provider>,
  );
  rerender(
    <CompanyUserContext.Provider value={account("ユーザーB", "b")}>
      <AccountIcon />
    </CompanyUserContext.Provider>,
  );
  expect(
    screen.queryByRole("link", { name: "ログイン中のアカウント: ユーザーA" }),
  ).toBeNull();
  expect(
    screen.getByRole("link", { name: "ログイン中のアカウント: ユーザーB" }),
  ).toHaveAttribute("href", `${LIME_SNS_URL}u/b`);
});
it("does not show a stale account icon after logout", () => {
  const { rerender } = render(
    <CompanyUserContext.Provider value={account("ユーザーA", "a")}>
      <AccountIcon />
    </CompanyUserContext.Provider>,
  );
  rerender(
    <CompanyUserContext.Provider value={null}>
      <AccountIcon />
    </CompanyUserContext.Provider>,
  );
  expect(screen.queryByRole("link")).toBeNull();
});
