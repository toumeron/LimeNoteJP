import { describe, expect, it } from "vitest";
import { contactFormUrl } from "./site";

describe("existing contact form handoff", () => {
  it("uses the verified form and its supported topic and description fields", () => {
    const url = new URL(contactFormUrl("business"));
    expect(url.origin).toBe("https://docs.google.com");
    expect(url.pathname).toBe(
      "/forms/d/e/1FAIpQLSciNRQhXXEoQLGGPFtam_IAtp8wm9lFJ2RM175Fb2kvtSXmTA/viewform",
    );
    expect(url.searchParams.get("entry.953868606")).toBe("その他");
    expect(url.searchParams.get("entry.1622594263")).toContain(
      "事業・協業のご相談",
    );
    expect(url.searchParams.has("entry.330679253")).toBe(false);
  });

  it("carries a recruitment category and the account handle without duplicate @", () => {
    const url = new URL(
      contactFormUrl("recruit", "インターン・アルバイト", "@test_user"),
    );
    expect(url.searchParams.get("entry.1622594263")).toContain(
      "希望区分：インターン・アルバイト",
    );
    expect(url.searchParams.get("entry.330679253")).toBe("@test_user");
    expect(url.searchParams.get("entry.1622594263")).toContain(
      "氏名・履歴書・住所・電話番号は送らず",
    );
  });

  it("keeps punctuation in values instead of creating extra query parameters", () => {
    const url = new URL(
      contactFormUrl("recruit", "制作&相談=特別", "someone&x=1"),
    );
    expect(url.searchParams.get("entry.1622594263")).toContain(
      "希望区分：制作&相談=特別",
    );
    expect(url.searchParams.get("entry.330679253")).toBe("@someone&x=1");
    expect(url.searchParams.has("x")).toBe(false);
  });

  it.each(["press", "support"] as const)(
    "keeps the selected %s context",
    (topic) => {
      const description = new URL(contactFormUrl(topic)).searchParams.get(
        "entry.1622594263",
      );
      expect(description).toContain(
        topic === "press" ? "取材・広報" : "サービスのサポート",
      );
    },
  );
});
