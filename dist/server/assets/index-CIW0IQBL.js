import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
const heroImg = "/assets/hero-BoirJoXg.jpg";
const panelService = "/assets/panel-service-qoUFtgHF.jpg";
const panelRecruit = "/assets/panel-recruit-DXYiMBLm.jpg";
const heroLinks = [{
  to: "/company/message",
  label: "代表メッセージ"
}, {
  to: "/company/profile",
  label: "会社概要"
}, {
  to: "/company/history",
  label: "沿革"
}, {
  to: "/service",
  label: "サービス"
}];
const news = [{
  date: "2025-04-01",
  category: "プレスリリース",
  title: "SNS『LimeNote』の累計投稿数が新たな節目を迎えました"
}, {
  date: "2024-10-15",
  category: "お知らせ",
  title: "LimeNote 利用規約改定のお知らせ"
}, {
  date: "2024-04-20",
  category: "サービス",
  title: "通報・ブロック機能の改善を行いました"
}, {
  date: "2023-07-01",
  category: "サービス",
  title: "SNS『LimeNote』正式版をリリース"
}];
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-card", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-[1280px] gap-2 px-2 pt-2 lg:grid-cols-[1fr_320px] lg:gap-3 lg:px-4 lg:pt-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-md", children: [
        /* @__PURE__ */ jsx("img", { src: heroImg, alt: "ライムノートと一杯のライム", width: 1920, height: 1080, className: "h-[360px] w-full object-cover sm:h-[460px] lg:h-[560px]" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute left-4 top-6 max-w-[88%] sm:left-10 sm:top-10 sm:max-w-[520px]", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-accent px-5 py-4 shadow-pop sm:px-8 sm:py-6", children: [
            /* @__PURE__ */ jsxs("p", { className: "font-display text-2xl font-black leading-[1.35] text-accent-foreground sm:text-3xl lg:text-4xl", children: [
              "書くことを、",
              /* @__PURE__ */ jsx("br", {}),
              "もっと自由に。"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-3 h-[3px] w-24 bg-primary" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 ml-1 max-w-md text-sm font-medium text-card drop-shadow-md sm:text-base", children: "短いノートが、誰かのきょうに、そっと寄りそう。" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-2 bottom-2 sm:inset-x-6 sm:bottom-6", children: /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-2 gap-px overflow-hidden rounded-md bg-card/95 backdrop-blur md:grid-cols-4", children: heroLinks.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: l.to, className: "group flex h-full items-center gap-2 bg-card px-4 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-primary-soft hover:text-accent sm:px-5 sm:py-4", children: [
          /* @__PURE__ */ jsx("span", { className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" }) }),
          /* @__PURE__ */ jsx("span", { className: "truncate", children: l.label })
        ] }) }, l.to)) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2 lg:gap-3", children: [
        /* @__PURE__ */ jsx(SidePanel, { to: "/service", img: panelService, alt: "LimeNoteのアプリ画面", eyebrow: "Our Service", title: "SNS『LimeNote』" }),
        /* @__PURE__ */ jsx(SidePanel, { to: "/recruit", img: panelRecruit, alt: "ノートに書く人の手元", eyebrow: "Recruit", title: "採用情報" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-[1100px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28", children: [
      /* @__PURE__ */ jsx(SectionTitle, { en: "News Releases", ja: "ニュース" }),
      /* @__PURE__ */ jsx("ul", { className: "mt-10 divide-y divide-border border-y border-border", children: news.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: "/news", className: "group grid items-center gap-2 px-2 py-5 hover:bg-muted/60 sm:grid-cols-[8rem_8rem_1fr_auto] sm:gap-6 sm:px-4 sm:py-6", children: [
        /* @__PURE__ */ jsx("time", { className: "text-sm font-medium text-muted-foreground", children: n.date }),
        /* @__PURE__ */ jsx("span", { className: "inline-flex h-6 w-fit items-center rounded-sm bg-primary-soft px-3 text-xs font-bold text-accent", children: n.category }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground group-hover:text-accent sm:text-[15px]", children: n.title }),
        /* @__PURE__ */ jsx(ArrowRight, { className: "hidden h-4 w-4 text-accent transition-transform group-hover:translate-x-1 sm:block" })
      ] }) }, n.title)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxs(Link, { to: "/news", className: "inline-flex h-12 items-center gap-2 rounded-full border-2 border-accent px-8 text-sm font-bold text-accent hover:bg-accent hover:text-accent-foreground", children: [
        "ニュース一覧 ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-cream py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionTitle, { en: "About Us", ja: "LimeNoteについて" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "font-display text-xl font-bold leading-relaxed text-foreground sm:text-2xl", children: [
            "小さな「書く」を、",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-accent", children: "大切にする会社です。" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 leading-loose text-foreground/80", children: "LimeNote株式会社は、2023年1月に神奈川県横浜市戸塚区にて設立。 短いノートでつながるSNS『LimeNote』を企画・開発・運営しています。 毎日のなかにある小さな気づきや、ぽつりとした一言を、 やさしく受けとめる場所をつくりつづけています。" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/company/profile", className: "inline-flex h-11 items-center gap-1.5 rounded-full bg-accent px-6 text-sm font-bold text-accent-foreground hover:opacity-90", children: [
              /* @__PURE__ */ jsx(ArrowDot, {}),
              " 会社概要"
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/company/message", className: "inline-flex h-11 items-center gap-1.5 rounded-full border border-accent bg-card px-6 text-sm font-bold text-accent hover:bg-accent/5", children: [
              /* @__PURE__ */ jsx(ArrowDot, {}),
              " 代表メッセージ"
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/company/history", className: "inline-flex h-11 items-center gap-1.5 rounded-full border border-accent bg-card px-6 text-sm font-bold text-accent hover:bg-accent/5", children: [
              /* @__PURE__ */ jsx(ArrowDot, {}),
              " 沿革"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("dl", { className: "grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-soft", children: [
          /* @__PURE__ */ jsx(Stat, { k: "設立", v: "2023.01" }),
          /* @__PURE__ */ jsx(Stat, { k: "本社", v: "横浜市戸塚区" }),
          /* @__PURE__ */ jsx(Stat, { k: "代表者", v: "ねこ" }),
          /* @__PURE__ */ jsx(Stat, { k: "事業", v: "SNS運営" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-3xl bg-gradient-primary p-10 shadow-pop sm:p-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground/80", children: "Our Service" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-3xl font-black leading-tight text-primary-foreground sm:text-4xl lg:text-5xl", children: [
        "SNS『LimeNote』を、",
        /* @__PURE__ */ jsx("br", {}),
        "ひらいてみる。"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl leading-relaxed text-primary-foreground/95", children: "短いノートを通して、誰かのきょうにそっと寄りそう。 やさしく、ゆるやかにつながるSNSです。今すぐ無料でお試しいただけます。" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxs("a", { href: "https://toumeron.github.io/RaimuNoteSNS.github.io/", target: "_blank", rel: "noreferrer", className: "inline-flex h-12 items-center gap-2 rounded-full bg-card px-7 text-sm font-bold text-foreground shadow-soft hover:bg-background", children: [
          "LimeNote を開く ",
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/service", className: "inline-flex h-12 items-center gap-2 rounded-full border-2 border-primary-foreground/50 px-7 text-sm font-bold text-primary-foreground hover:bg-primary-foreground/10", children: [
          "サービス詳細 ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) })
  ] });
}
function SidePanel({
  to,
  img,
  alt,
  eyebrow,
  title
}) {
  return /* @__PURE__ */ jsxs(Link, { to, className: "group relative block overflow-hidden rounded-md", children: [
    /* @__PURE__ */ jsx("img", { src: img, alt, loading: "lazy", width: 1024, height: 768, className: "h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[220px] lg:h-[276px]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-primary", children: eyebrow }),
      /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsx("p", { className: "font-display text-lg font-bold text-card sm:text-xl", children: title })
      ] })
    ] })
  ] });
}
function SectionTitle({
  en,
  ja
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl", children: ja }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs font-bold uppercase tracking-[0.3em] text-accent", children: en }),
    /* @__PURE__ */ jsx("div", { className: "mt-5 h-[3px] w-12 rounded-full bg-accent" })
  ] });
}
function Stat({
  k,
  v
}) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-card p-6 text-center", children: [
    /* @__PURE__ */ jsx("dt", { className: "text-xs font-bold uppercase tracking-wider text-accent", children: k }),
    /* @__PURE__ */ jsx("dd", { className: "mt-2 font-display text-xl font-black text-foreground sm:text-2xl", children: v })
  ] });
}
function ArrowDot() {
  return /* @__PURE__ */ jsx("span", { className: "flex h-4 w-4 items-center justify-center rounded-full bg-current/15", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-2.5 w-2.5" }) });
}
export {
  Home as component
};
