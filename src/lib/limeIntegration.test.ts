import { describe, expect, it } from "vitest";
import { limeDropDestination, LIME_SNS_URL } from "./limeIntegration";
describe("LimeDrop destinations", () => {
  it("opens internal posts on the SNS rather than the company router", () => {
    expect(
      limeDropDestination({ post_id: "abc", post_url: "javascript:alert(1)" }),
    ).toBe(`${LIME_SNS_URL}post/abc`);
  });
  it("opens external HTTPS posts", () => {
    expect(
      limeDropDestination({
        post_id: null,
        post_url: "https://bsky.app/profile/test/post/1",
      }),
    ).toBe("https://bsky.app/profile/test/post/1");
  });
  it.each([
    "javascript:alert(1)",
    "data:text/html,test",
    "http://example.com",
    "invalid",
  ])("rejects unsafe destination %s", (url) => {
    expect(limeDropDestination({ post_id: null, post_url: url })).toBeNull();
  });
});
