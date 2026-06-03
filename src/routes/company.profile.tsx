import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/company/profile")({
  head: () => ({
    meta: [
      { title: "会社概要 | LimeNote株式会社" },
      { name: "description", content: "LimeNote株式会社の商号、設立、代表者、所在地、事業内容など、会社概要をご案内します。" },
      { property: "og:title", content: "会社概要 | LimeNote株式会社" },
      { property: "og:description", content: "LimeNote株式会社の基本情報。" },
      { property: "og:url", content: "/company/profile" },
    ],
    links: [{ rel: "canonical", href: "/company/profile" }],
  }),
  component: Profile,
});

const rows: [string, React.ReactNode][] = [
  ["商号", "LimeNote株式会社 (LimeNote, Inc.)"],
  ["設立", "2023年1月"],
  ["代表者", "代表取締役CEO ねこ"],
  ["本社所在地", "神奈川県横浜市戸塚区"],
  ["事業内容", "LimeNoteの企画・開発・運営"],
  ["お問い合わせ", "Googleフォームより承っております"],
];

function Profile() {
  return (
    <>
      <PageHero
        eyebrow="Profile"
        title="会社概要"
        description="LimeNote株式会社の基本情報をご案内します。"
        crumbs={[{ to: "/company", label: "会社情報" }, { label: "会社概要" }]}
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <dl className="divide-y divide-border">
            {rows.map(([k, v]) => (
              <div key={k} className="grid gap-1 px-6 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6 sm:px-8 sm:py-6">
                <dt className="font-display text-sm font-bold text-accent">{k}</dt>
                <dd className="text-sm text-foreground sm:text-base">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
