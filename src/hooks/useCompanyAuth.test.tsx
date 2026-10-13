import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Session } from "@supabase/supabase-js";
const mock = vi.hoisted(() => ({
  listener: null as null | ((event: string, session: unknown) => void),
  getUser: vi.fn(),
  single: vi.fn(),
  unsubscribe: vi.fn(),
  getSession: vi.fn(),
}));
vi.mock("@/lib/supabase", () => ({
  supabase: {
    auth: {
      onAuthStateChange: (fn: typeof mock.listener) => {
        mock.listener = fn;
        return { data: { subscription: { unsubscribe: mock.unsubscribe } } };
      },
      getUser: mock.getUser,
      getSession: mock.getSession,
    },
    from: () => ({ select: () => ({ eq: () => ({ single: mock.single }) }) }),
  },
}));
import { useCompanyAuth } from "./useCompanyAuth";
const session = (id = "a") =>
  ({ user: { id }, access_token: `token-${id}` }) as Session;
const emit = (value: Session | null, event = "INITIAL_SESSION") =>
  act(() => mock.listener!(event, value));
beforeEach(() => {
  vi.clearAllMocks();
  mock.getUser.mockResolvedValue({ data: { user: { id: "a" } }, error: null });
  mock.single.mockResolvedValue({
    data: { Account_suspension: false },
    error: null,
  });
});
afterEach(cleanup);
describe("shared company authentication", () => {
  it("keeps checking until the shared session is known, then requires login when absent", async () => {
    const { result } = renderHook(useCompanyAuth);
    expect(result.current.status).toBe("checking");
    emit(null);
    await waitFor(() => expect(result.current.status).toBe("signed-out"));
    expect(mock.getUser).not.toHaveBeenCalled();
  });
  it("restores and validates the SNS session without asking for credentials", async () => {
    const { result } = renderHook(useCompanyAuth);
    emit(session());
    await waitFor(() => expect(result.current.user?.id).toBe("a"));
    expect(result.current.status).toBe("authenticated");
    expect(mock.getUser).toHaveBeenCalledWith("token-a");
  });
  it("revokes access when the SNS tab signs out", async () => {
    const { result } = renderHook(useCompanyAuth);
    emit(session());
    await waitFor(() => expect(result.current.status).toBe("authenticated"));
    emit(null, "SIGNED_OUT");
    expect(result.current.user).toBeNull();
    await waitFor(() => expect(result.current.status).toBe("signed-out"));
  });
  it("does not restore a previous user's slow verification after an account switch", async () => {
    let resolveOld!: (value: unknown) => void;
    mock.getUser.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveOld = resolve;
        }),
    );
    const { result } = renderHook(useCompanyAuth);
    emit(session());
    await waitFor(() => expect(mock.getUser).toHaveBeenCalled());
    mock.getUser.mockResolvedValue({
      data: { user: { id: "b" } },
      error: null,
    });
    emit(session("b"), "SIGNED_IN");
    await waitFor(() => expect(result.current.user?.id).toBe("b"));
    await act(async () =>
      resolveOld({ data: { user: { id: "a" } }, error: null }),
    );
    expect(result.current.user?.id).toBe("b");
  });
  it("rejects invalid cached tokens", async () => {
    mock.getUser.mockResolvedValue({
      data: { user: null },
      error: { status: 401 },
    });
    const { result } = renderHook(useCompanyAuth);
    emit(session());
    await waitFor(() => expect(result.current.status).toBe("signed-out"));
  });
  it("blocks suspended users", async () => {
    mock.single.mockResolvedValue({
      data: { Account_suspension: true },
      error: null,
    });
    const { result } = renderHook(useCompanyAuth);
    emit(session());
    await waitFor(() => expect(result.current.status).toBe("suspended"));
    expect(result.current.user).toBeNull();
  });
  it("fails closed on network errors", async () => {
    mock.getUser.mockRejectedValue(new Error("offline"));
    const { result } = renderHook(useCompanyAuth);
    emit(session());
    await waitFor(() => expect(result.current.status).toBe("error"));
    expect(result.current.user).toBeNull();
  });
  it("unsubscribes when unmounted", () => {
    const { unmount } = renderHook(useCompanyAuth);
    unmount();
    expect(mock.unsubscribe).toHaveBeenCalledOnce();
  });
  it("keeps the validated account visible during a repeated sign-in or token refresh", async () => {
    const { result } = renderHook(useCompanyAuth);
    emit(session());
    await waitFor(() => expect(result.current.status).toBe("authenticated"));
    mock.getUser.mockImplementation(() => new Promise(() => {}));
    emit(session(), "SIGNED_IN");
    expect(result.current.status).toBe("authenticated");
    expect(result.current.user?.id).toBe("a");
    emit(session(), "TOKEN_REFRESHED");
    expect(result.current.status).toBe("authenticated");
  });
  it("keeps the site visible while checking a tab return in the background", async () => {
    const { result } = renderHook(useCompanyAuth);
    emit(session());
    await waitFor(() => expect(result.current.status).toBe("authenticated"));
    mock.getSession.mockResolvedValue({
      data: { session: session() },
      error: null,
    });
    mock.getUser.mockImplementation(() => new Promise(() => {}));
    await act(async () =>
      document.dispatchEvent(new Event("visibilitychange")),
    );
    expect(result.current.status).toBe("authenticated");
    expect(result.current.user?.id).toBe("a");
  });
  it("hides the old account immediately during a switch", async () => {
    const { result } = renderHook(useCompanyAuth);
    emit(session());
    await waitFor(() => expect(result.current.status).toBe("authenticated"));
    mock.getUser.mockImplementation(() => new Promise(() => {}));
    emit(session("b"), "SIGNED_IN");
    expect(result.current.status).toBe("checking");
    expect(result.current.user).toBeNull();
  });
  it("provides the current profile avatar for the header", async () => {
    mock.single.mockResolvedValue({
      data: {
        Account_suspension: false,
        display_name: "テスト",
        username: "tester",
        avatar_url: "https://example.com/avatar.png",
      },
      error: null,
    });
    const { result } = renderHook(useCompanyAuth);
    emit(session());
    await waitFor(() =>
      expect(result.current.user?.avatarUrl).toBe(
        "https://example.com/avatar.png",
      ),
    );
    expect(result.current.user?.displayName).toBe("テスト");
    expect(result.current.user?.username).toBe("tester");
  });
});
