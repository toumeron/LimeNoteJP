import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
const mock = vi.hoisted(() => ({
  navigate: vi.fn(),
  status: "signed-out",
  user: null as null | { id: string },
}));
vi.mock("@/hooks/useCompanyAuth", () => ({ useCompanyAuth: () => mock }));
vi.mock("@/lib/supabase", () => ({ supabase: { auth: {} } }));
vi.mock("@/lib/limeIntegration", async (original) => ({
  ...(await original<object>()),
  openLimeDropDestination: mock.navigate,
}));
vi.mock("./LimeDropReceiver", () => ({
  LimeDropReceiver: () => <div>LimeDrop受信中</div>,
}));
import { CompanyAccess } from "./CompanyAccess";
afterEach(cleanup);
it.each(["checking", "signed-out", "error", "suspended"])(
  "does not mount company content or receiver while %s",
  (status) => {
    mock.status = status;
    mock.user = null;
    render(
      <CompanyAccess>
        <div>企業サイトの内容</div>
      </CompanyAccess>,
    );
    expect(screen.queryByText("企業サイトの内容")).not.toBeInTheDocument();
    expect(screen.queryByText("LimeDrop受信中")).not.toBeInTheDocument();
  },
);
it("mounts company content and receiver after shared login validation", () => {
  mock.status = "authenticated";
  mock.user = { id: "me" };
  render(
    <CompanyAccess>
      <div>企業サイトの内容</div>
    </CompanyAccess>,
  );
  expect(screen.getByText("企業サイトの内容")).toBeInTheDocument();
  expect(screen.getByText("LimeDrop受信中")).toBeInTheDocument();
});
it("uses the SNS login page without rendering a separate credential form", () => {
  mock.status = "signed-out";
  mock.user = null;
  mock.navigate.mockClear();
  render(
    <CompanyAccess>
      <div>企業サイトの内容</div>
    </CompanyAccess>,
  );
  expect(screen.queryByLabelText("パスワード")).not.toBeInTheDocument();
  const url = new URL(mock.navigate.mock.calls[0][0]);
  expect(url.pathname).toBe("/RaimuNoteSNS.github.io/auth");
  expect(url.searchParams.get("returnTo")).toBe(
    window.location.pathname + window.location.search + window.location.hash,
  );
});
