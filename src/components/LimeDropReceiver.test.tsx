import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
const mock = vi.hoisted(() => ({
  rows: [] as Record<string, unknown>[],
  query: vi.fn(),
  eq: vi.fn(),
  update: vi.fn(),
  save: vi.fn(),
  callback: null as null | (() => void),
  remove: vi.fn(),
  navigate: vi.fn(),
}));
vi.mock("@/lib/limeIntegration", async (original) => ({
  ...(await original<object>()),
  openLimeDropDestination: mock.navigate,
}));
vi.mock("@/lib/supabase", () => ({
  supabase: {
    from: (table: string) => {
      const read = { eq: mock.eq, order: () => read, limit: mock.query };
      mock.eq.mockImplementation(() => read);
      const update = {
        eq: vi.fn(() => update),
        select: () => ({ maybeSingle: mock.save }),
      };
      return {
        select: () =>
          table === "profiles"
            ? {
                in: async () => ({
                  data: [{ id: "sender", display_name: "送信者" }],
                  error: null,
                }),
              }
            : read,
        update: (value: unknown) => {
          mock.update(value);
          return update;
        },
      };
    },
    channel: () => {
      const channel = {
        on: (_name: string, _filter: unknown, fn: () => void) => {
          mock.callback = fn;
          return channel;
        },
        subscribe: () => channel,
      };
      return channel;
    },
    removeChannel: mock.remove,
  },
}));
import { LimeDropReceiver } from "./LimeDropReceiver";
import { LIME_SNS_URL } from "@/lib/limeIntegration";
beforeEach(() => {
  vi.clearAllMocks();
  mock.rows = [
    {
      id: "drop",
      recipient_id: "me",
      sender_id: "sender",
      post_id: "post1",
      post_url: "",
      post_text: "届いた投稿",
    },
  ];
  mock.query.mockImplementation(async () => ({ data: mock.rows, error: null }));
  mock.save.mockResolvedValue({ data: { id: "drop" }, error: null });
});
afterEach(cleanup);
it("loads only the signed-in recipient's pending drops", async () => {
  render(<LimeDropReceiver userId="me" />);
  await screen.findByText("届いた投稿");
  expect(mock.eq).toHaveBeenCalledWith("recipient_id", "me");
  expect(mock.eq).toHaveBeenCalledWith("status", "pending");
  expect(
    screen.getByText("送信者さんから投稿が届きました"),
  ).toBeInTheDocument();
});
it("accepts the drop before navigating to the SNS post", async () => {
  render(<LimeDropReceiver userId="me" />);
  fireEvent.click(await screen.findByText("受け入れる"));
  await waitFor(() =>
    expect(mock.navigate).toHaveBeenCalledWith(`${LIME_SNS_URL}post/post1`),
  );
  expect(mock.update).toHaveBeenCalledWith({ status: "accepted" });
});
it("declines without opening a post", async () => {
  render(<LimeDropReceiver userId="me" />);
  mock.save.mockImplementation(async () => {
    mock.rows = [];
    return { data: { id: "drop" }, error: null };
  });
  fireEvent.click(await screen.findByText("辞退"));
  await waitFor(() =>
    expect(screen.queryByText("届いた投稿")).not.toBeInTheDocument(),
  );
  expect(mock.update).toHaveBeenCalledWith({ status: "declined" });
  expect(mock.navigate).not.toHaveBeenCalled();
});
it("removes drops handled in the SNS tab after a realtime event", async () => {
  render(<LimeDropReceiver userId="me" />);
  await screen.findByText("届いた投稿");
  mock.rows = [];
  act(() => mock.callback!());
  await waitFor(() =>
    expect(screen.queryByText("届いた投稿")).not.toBeInTheDocument(),
  );
});
it("does not navigate if another tab handled the drop first", async () => {
  mock.save.mockResolvedValue({ data: null, error: null });
  render(<LimeDropReceiver userId="me" />);
  fireEvent.click(await screen.findByText("受け入れる"));
  await screen.findByText("このLimeDropは別の画面で処理済みです。");
  expect(mock.navigate).not.toHaveBeenCalled();
});
it("preserves the pending drop when the update fails", async () => {
  mock.save.mockResolvedValue({ data: null, error: new Error("offline") });
  render(<LimeDropReceiver userId="me" />);
  fireEvent.click(await screen.findByText("受け入れる"));
  await screen.findByText(
    "LimeDropの処理に失敗しました。もう一度お試しください。",
  );
  expect(screen.getByText("届いた投稿")).toBeInTheDocument();
  expect(mock.navigate).not.toHaveBeenCalled();
});
it("does not consume a drop with an unsafe link", async () => {
  mock.rows[0].post_id = null;
  mock.rows[0].post_url = "javascript:alert(1)";
  render(<LimeDropReceiver userId="me" />);
  fireEvent.click(await screen.findByText("受け入れる"));
  await screen.findByText("この投稿のリンクは開けません。");
  expect(mock.update).not.toHaveBeenCalled();
});
it("unsubscribes on logout/unmount", async () => {
  const { unmount } = render(<LimeDropReceiver userId="me" />);
  await screen.findByText("届いた投稿");
  unmount();
  expect(mock.remove).toHaveBeenCalledOnce();
});
