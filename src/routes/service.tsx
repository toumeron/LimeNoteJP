import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, FileText, Heart, MessageCircle, Sparkles } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/service")({
  head: () => ({
    meta: [
      { title: "サービス | LimeNote株式会社" },
      { name: "description", content: "LimeNote株式会社が運営するSNS『LimeNote』のご紹介。短いノートでつながる、やさしいSNSです。" },
      { property: "og:title", content: "サービス | LimeNote株式会社" },
      { property: "og:description", content: "SNS『LimeNote』のご紹介。" },
      { property: "og:url", content: "/service" },
    ],
    links: [{ rel: "canonical", href: "/service" }],
  }),
  component: Service,
});

const features = [
  { icon: Sparkles, title: "短いノート", desc: "長文じゃなくていい。一言から、はじめられます。" },
  { icon: Heart, title: "やさしい反応", desc: "ハートをそっと添えて、気持ちを伝えられます。" },
  { icon: MessageCircle, title: "ゆるやかなつながり", desc: "肩肘張らずに、誰かと言葉を交わせる場所。" },
];

function Service() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="SNS『LimeNote』"
        description="書くことの、ちいさな自由を。短いノートでつながるSNSです。"
        crumbs={[{ label: "サービス" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft">
                <f.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="https://toumeron.github.io/RaimuNoteSNS.github.io/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-pop transition-transform hover:scale-[1.01]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">App</p>
              <p className="mt-2 font-display text-2xl font-bold">LimeNote を開く</p>
              <p className="mt-1 text-sm opacity-90">SNS本体のページへ</p>
            </div>
            <ExternalLink className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://toumeron.github.io/RaimuNoteSNS.github.io/terms"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-3xl border border-border bg-card p-8 shadow-soft transition-transform hover:scale-[1.01]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Terms</p>
              <p className="mt-2 font-display text-2xl font-bold">利用規約</p>
              <p className="mt-1 text-sm text-muted-foreground">ご利用前にお読みください</p>
            </div>
            <FileText className="h-6 w-6 text-accent transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </>
  );
}
