import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHero } from "./PageHero-BP1pgTfq.js";
import "@tanstack/react-router";
import "lucide-react";
const events = [{
  year: "2023",
  month: "1月",
  text: "神奈川県横浜市戸塚区にて LimeNote株式会社を設立。"
}, {
  year: "2023",
  month: "春",
  text: "SNS『LimeNote』のクローズドベータ版を公開。"
}, {
  year: "2023",
  month: "夏",
  text: "『LimeNote』正式版をリリース。"
}, {
  year: "2024",
  month: "秋",
  text: "利用規約を改定し、コミュニティガイドラインを整備。"
}, {
  year: "2025",
  month: "春",
  text: "累計投稿数が新たな節目を迎える。"
}];
function History() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "History", title: "沿革", description: "LimeNote株式会社のこれまでのあゆみ。", crumbs: [{
      to: "/company",
      label: "会社情報"
    }, {
      label: "沿革"
    }] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("ol", { className: "relative space-y-8 border-l-2 border-primary-soft pl-8", children: events.map((e, i) => /* @__PURE__ */ jsxs("li", { className: "relative", children: [
      /* @__PURE__ */ jsx("span", { className: "absolute -left-[2.4rem] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-primary shadow-soft" }),
      /* @__PURE__ */ jsxs("p", { className: "font-display text-sm font-bold text-accent", children: [
        e.year,
        " ",
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-muted-foreground", children: e.month })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-base text-foreground", children: e.text })
    ] }, i)) }) })
  ] });
}
export {
  History as component
};
