import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHero } from "./PageHero-BP1pgTfq.js";
import "@tanstack/react-router";
import "lucide-react";
const rows = [["商号", "LimeNote株式会社 (LimeNote, Inc.)"], ["設立", "2023年1月"], ["代表者", "代表取締役CEO ねこ"], ["本社所在地", "神奈川県横浜市戸塚区"], ["事業内容", "SNS『LimeNote』の企画・開発・運営"], ["お問い合わせ", "Googleフォームより承っております"]];
function Profile() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Profile", title: "会社概要", description: "LimeNote株式会社の基本情報をご案内します。", crumbs: [{
      to: "/company",
      label: "会社情報"
    }, {
      label: "会社概要"
    }] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl border border-border bg-card shadow-soft", children: /* @__PURE__ */ jsx("dl", { className: "divide-y divide-border", children: rows.map(([k, v]) => /* @__PURE__ */ jsxs("div", { className: "grid gap-1 px-6 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6 sm:px-8 sm:py-6", children: [
      /* @__PURE__ */ jsx("dt", { className: "font-display text-sm font-bold text-accent", children: k }),
      /* @__PURE__ */ jsx("dd", { className: "text-sm text-foreground sm:text-base", children: v })
    ] }, k)) }) }) })
  ] });
}
export {
  Profile as component
};
