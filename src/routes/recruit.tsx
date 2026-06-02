import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Heart, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/recruit")({
  head: () => ({
    meta: [
      { title: "採用情報 | LimeNote株式会社" },
      { name: "description", content: "LimeNote株式会社の採用情報。ともにLimeNoteを育てる仲間を募集しています。" },
      { property: "og:title", content: "採用情報 | LimeNote株式会社" },
      { property: "og:description", content: "LimeNote株式会社の採用情報。" },
      { property: "og:url", content: "/recruit" },
    ],
    links: [{ rel: "canonical", href: "/recruit" }],
  }),
  component: Recruit,
});

const values = [
  { icon: Heart, title: "やさしさを設計する", desc: "ユーザーのきもちに立って、機能・文言・体験を一つひとつ丁寧に設計します。" },
  { icon: Sparkles, title: "ちいさな改善を重ねる", desc: "大きな施策よりも、毎日のちいさな改善の積み重ねを大切にしています。" },
  { icon: Users, title: "声に耳を澄ませる", desc: "ユーザーの声を真ん中に置き、チーム全員で読み、考え、反映します。" },
];

function Recruit() {
  return (
    <>
      <PageHero
        eyebrow="Recruit"
        title="採用情報"
        description="LimeNoteを、ともに育てていく仲間を探しています。"
        crumbs={[{ label: "採用情報" }]}
      />

      {/* Values */}
      <section className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-black sm:text-3xl">
          私たちが大切にしている3つのこと
        </h2>
        <div className="mt-3 h-[3px] w-12 rounded-full bg-accent" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                <v.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open positions */}
      <section className="mx-auto max-w-[1100px] px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-black sm:text-3xl">募集中のポジション</h2>
        <div className="mt-3 h-[3px] w-12 rounded-full bg-accent" />

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <div className="grid items-center gap-4 border-b border-border bg-gradient-cream px-6 py-5 sm:grid-cols-[1fr_auto]">
            <p className="font-display text-base font-bold text-foreground">
              現在、公募中のポジションはございません
            </p>
            <span className="inline-flex h-7 w-fit items-center rounded-full border border-border bg-card px-3 text-xs font-bold text-muted-foreground">
              Not Open
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <p className="leading-relaxed text-foreground/85">
              LimeNote株式会社は少人数で運営している会社です。現時点では公募中のポジションはございませんが、
              下記の領域に強い関心と経験をお持ちで、わたしたちの考えに共感いただける方は、
              いつでもお問い合わせフォームよりご連絡ください。
            </p>
            <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
              {[
                "フロントエンドエンジニア（React / TypeScript）",
                "プロダクトデザイナー（UI / UX）",
                "コミュニティ運営・カスタマーサポート",
                "コンテンツライティング・編集",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 rounded-lg bg-muted/60 px-4 py-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-bold text-accent-foreground shadow-soft hover:opacity-90"
            >
              お問い合わせフォームへ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
