import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Sparkles, Heart, MessageCircle, ExternalLink, FileText } from "lucide-react";
import { P as PageHero } from "./PageHero-BP1pgTfq.js";
import "@tanstack/react-router";
const features = [{
  icon: Sparkles,
  title: "短いノート",
  desc: "長文じゃなくていい。一言から、はじめられます。"
}, {
  icon: Heart,
  title: "やさしい反応",
  desc: "ハートをそっと添えて、気持ちを伝えられます。"
}, {
  icon: MessageCircle,
  title: "ゆるやかなつながり",
  desc: "肩肘張らずに、誰かと言葉を交わせる場所。"
}];
function Service() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Service", title: "SNS『LimeNote』", description: "書くことの、ちいさな自由を。短いノートでつながるSNSです。", crumbs: [{
      label: "サービス"
    }] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: features.map((f) => /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border bg-card p-7 shadow-soft", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft", children: /* @__PURE__ */ jsx(f.icon, { className: "h-6 w-6 text-accent" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-lg font-bold", children: f.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: f.desc })
    ] }, f.title)) }) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("a", { href: "https://toumeron.github.io/RaimuNoteSNS.github.io/", target: "_blank", rel: "noreferrer", className: "group flex items-center justify-between rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-pop transition-transform hover:scale-[1.01]", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] opacity-80", children: "App" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-2xl font-bold", children: "LimeNote を開く" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm opacity-90", children: "SNS本体のページへ" })
        ] }),
        /* @__PURE__ */ jsx(ExternalLink, { className: "h-6 w-6 transition-transform group-hover:translate-x-1" })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "https://toumeron.github.io/RaimuNoteSNS.github.io/terms", target: "_blank", rel: "noreferrer", className: "group flex items-center justify-between rounded-3xl border border-border bg-card p-8 shadow-soft transition-transform hover:scale-[1.01]", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Terms" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-2xl font-bold", children: "利用規約" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "ご利用前にお読みください" })
        ] }),
        /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-accent transition-transform group-hover:translate-x-1" })
      ] })
    ] }) })
  ] });
}
export {
  Service as component
};
