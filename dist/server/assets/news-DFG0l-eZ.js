import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { P as PageHero } from "./PageHero-BP1pgTfq.js";
import "@tanstack/react-router";
const items = [{
  date: "2025-04-01",
  category: "プレスリリース",
  title: "SNS『LimeNote』の累計投稿数が新たな節目を迎えました",
  body: "日頃よりLimeNoteをご利用いただきありがとうございます。みなさまのちいさな「書く」が積み重なり、新たな節目を迎えることができました。"
}, {
  date: "2024-10-15",
  category: "お知らせ",
  title: "LimeNote 利用規約改定のお知らせ",
  body: "コミュニティガイドラインの整備にともない、利用規約を改定いたしました。詳細は利用規約ページよりご確認ください。"
}, {
  date: "2024-04-20",
  category: "サービス",
  title: "通報・ブロック機能の改善を行いました",
  body: "より安心してご利用いただけるよう、通報・ブロック機能のインターフェース改善を実施しました。"
}, {
  date: "2024-01-12",
  category: "コーポレート",
  title: "本社所在地表記を更新しました",
  body: "本社所在地の表記を「神奈川県横浜市戸塚区」に統一いたしました。"
}, {
  date: "2023-12-01",
  category: "サービス",
  title: "ハッシュタグ機能を追加しました",
  body: "ノートにハッシュタグを付けて、同じテーマの投稿を見つけやすくしました。"
}, {
  date: "2023-07-01",
  category: "サービス",
  title: "SNS『LimeNote』正式版をリリース",
  body: "短いノートでつながるSNS、LimeNoteを正式公開しました。"
}, {
  date: "2023-04-10",
  category: "サービス",
  title: "クローズドベータ版を公開",
  body: "LimeNoteのクローズドベータ版を一部のユーザー向けに公開しました。"
}, {
  date: "2023-01-10",
  category: "コーポレート",
  title: "LimeNote株式会社を設立しました",
  body: "神奈川県横浜市戸塚区にてLimeNote株式会社を設立いたしました。"
}];
const filters = ["すべて", "プレスリリース", "お知らせ", "サービス", "コーポレート"];
function News() {
  const [active, setActive] = useState("すべて");
  const list = active === "すべて" ? items : items.filter((i) => i.category === active);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "News", title: "ニュース", description: "LimeNote株式会社からのお知らせ・プレスリリースを掲載しています。", crumbs: [{
      label: "ニュース"
    }] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-[1100px] px-4 py-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: filters.map((f) => /* @__PURE__ */ jsx("button", { onClick: () => setActive(f), className: `h-10 rounded-full px-5 text-sm font-bold transition-colors ${active === f ? "bg-accent text-accent-foreground" : "border border-border bg-card text-foreground hover:border-accent hover:text-accent"}`, children: f }, f)) }),
      /* @__PURE__ */ jsxs("ul", { className: "mt-10 divide-y divide-border border-y border-border", children: [
        list.map((n) => /* @__PURE__ */ jsxs("li", { className: "group grid items-start gap-2 px-2 py-6 sm:grid-cols-[8rem_8rem_1fr] sm:gap-6 sm:px-4 sm:py-7", children: [
          /* @__PURE__ */ jsx("time", { className: "text-sm font-medium text-muted-foreground", children: n.date }),
          /* @__PURE__ */ jsx("span", { className: "inline-flex h-6 w-fit items-center rounded-sm bg-primary-soft px-3 text-xs font-bold text-accent", children: n.category }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "font-display text-base font-bold text-foreground sm:text-lg", children: n.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-muted-foreground", children: n.body })
          ] })
        ] }, n.title)),
        list.length === 0 && /* @__PURE__ */ jsx("li", { className: "px-2 py-10 text-center text-sm text-muted-foreground", children: "該当するニュースはありません。" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-8 flex items-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" }),
        "掲載内容は発表時点のものです。最新の情報は各サービスページをご確認ください。"
      ] })
    ] })
  ] });
}
export {
  News as component
};
