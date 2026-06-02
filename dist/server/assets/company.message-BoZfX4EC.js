import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHero } from "./PageHero-BP1pgTfq.js";
import "@tanstack/react-router";
import "lucide-react";
function Message() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Message", title: "代表メッセージ", description: "LimeNoteは、書くことのよろこびに寄りそう場所でありたいと思っています。", crumbs: [{
      to: "/company",
      label: "会社情報"
    }, {
      label: "代表メッセージ"
    }] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 border-b border-border pb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary font-display text-2xl font-black text-primary-foreground shadow-soft", children: "N" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-accent", children: "CEO" }),
          /* @__PURE__ */ jsx("p", { className: "font-display text-lg font-bold", children: "ねこ" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-5 text-base leading-loose text-foreground/90", children: [
        /* @__PURE__ */ jsx("p", { children: "ことばは、誰かのきょうをすこしだけ明るくしたり、自分のきもちを整えてくれたりします。 LimeNote は、そんな小さな「書く」を、もっと気軽に、もっと自由に楽しめる場所でありたいと考えています。" }),
        /* @__PURE__ */ jsx("p", { children: "2023年1月、わたしたちは「短いノートでつながるSNS」というアイデアから歩み出しました。 長い文章を書かなければ伝わらないわけではないし、毎日きらきらしていなくてもいい。 ぽつりとつぶやいた一言が、ちゃんと誰かの目にとまる。そんな場所をつくりたかったのです。" }),
        /* @__PURE__ */ jsx("p", { children: "これからも LimeNote は、利用してくださるみなさんの声に耳を澄ませながら、 ゆっくり、ていねいに育てていきます。よろしくお願いいたします。" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-10 text-right font-display text-sm text-muted-foreground", children: [
        "LimeNote株式会社",
        /* @__PURE__ */ jsx("br", {}),
        "代表取締役CEO ねこ"
      ] })
    ] }) })
  ] });
}
export {
  Message as component
};
