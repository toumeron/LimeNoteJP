import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { FileText, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { P as PageHero } from "./PageHero-BP1pgTfq.js";
const cards = [{
  to: "/company/profile",
  icon: FileText,
  title: "会社概要",
  desc: "商号・所在地・事業内容など、当社の基本情報。"
}, {
  to: "/company/message",
  icon: MessageSquare,
  title: "代表メッセージ",
  desc: "CEO ねこ氏からのごあいさつ。"
}, {
  to: "/company/history",
  icon: Clock,
  title: "沿革",
  desc: "創業からこれまでのあゆみ。"
}];
function CompanyIndex() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Company", title: "会社情報", description: "LimeNote株式会社についてご案内します。", crumbs: [{
      label: "会社情報"
    }] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: cards.map((c) => /* @__PURE__ */ jsxs(Link, { to: c.to, className: "group rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-pop", children: [
      /* @__PURE__ */ jsx(c.icon, { className: "h-8 w-8 text-accent" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-5 font-display text-xl font-bold", children: c.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: c.desc }),
      /* @__PURE__ */ jsxs("p", { className: "mt-6 inline-flex items-center gap-1 text-sm font-bold text-accent", children: [
        "詳しく見る ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
      ] })
    ] }, c.to)) }) })
  ] });
}
export {
  CompanyIndex as component
};
