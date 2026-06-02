import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Mail, ExternalLink } from "lucide-react";
import { P as PageHero } from "./PageHero-BP1pgTfq.js";
import "@tanstack/react-router";
const FORM_URL = "https://forms.gle/1FUHzrWL38iVbUju5";
function Contact() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Contact", title: "お問い合わせ", description: "サービスや会社に関するご質問は、Googleフォームより承っております。", crumbs: [{
      label: "お問い合わせ"
    }] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft", children: /* @__PURE__ */ jsx(Mail, { className: "h-7 w-7 text-accent" }) }),
      /* @__PURE__ */ jsx("h2", { className: "mt-6 font-display text-2xl font-bold", children: "お問い合わせフォーム" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-muted-foreground", children: "下記ボタンより Googleフォーム を開き、必要事項をご記入のうえ送信してください。 内容を確認のうえ、担当者よりご連絡いたします。" }),
      /* @__PURE__ */ jsxs("a", { href: FORM_URL, target: "_blank", rel: "noreferrer", className: "mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-gradient-primary px-7 text-sm font-bold text-primary-foreground shadow-pop transition-transform hover:scale-[1.02]", children: [
        "フォームを開く ",
        /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-2xl bg-muted p-5 text-sm leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-foreground", children: "ご注意" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-2 list-disc space-y-1 pl-5", children: [
          /* @__PURE__ */ jsx("li", { children: "内容によってはご返信までお時間をいただく場合がございます。" }),
          /* @__PURE__ */ jsx("li", { children: "サービスの不具合に関するご報告も、こちらのフォームより承ります。" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Contact as component
};
