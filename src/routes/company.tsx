import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, MessageSquare, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "会社情報 | LimeNote株式会社" },
      { name: "description", content: "LimeNote株式会社の会社概要、代表メッセージ、沿革をご紹介します。" },
      { property: "og:title", content: "会社情報 | LimeNote株式会社" },
      { property: "og:description", content: "LimeNote株式会社の会社概要、代表メッセージ、沿革。" },
      { property: "og:url", content: "/company" },
    ],
    links: [{ rel: "canonical", href: "/company" }],
  }),
  component: CompanyIndex,
});

const cards = [
  { to: "/company/profile", icon: FileText, title: "会社概要", desc: "商号・所在地・事業内容など、当社の基本情報。" },
  { to: "/company/message", icon: MessageSquare, title: "代表メッセージ", desc: "CEO ねこ氏からのごあいさつ。" },
  { to: "/company/history", icon: Clock, title: "沿革", desc: "創業からこれまでのあゆみ。" },
] as const;

function CompanyIndex() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="会社情報"
        description="LimeNote株式会社についてご案内します。"
        crumbs={[{ label: "会社情報" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-pop"
            >
              <c.icon className="h-8 w-8 text-accent" />
              <h2 className="mt-5 font-display text-xl font-bold">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <p className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-accent">
                詳しく見る <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
