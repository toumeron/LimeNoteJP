import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/company/history")({
  head: () => ({
    meta: [
      { title: "沿革 | LimeNote株式会社" },
      { name: "description", content: "LimeNote株式会社のあゆみ。2023年の設立から現在までの主な出来事をご紹介します。" },
      { property: "og:title", content: "沿革 | LimeNote株式会社" },
      { property: "og:description", content: "LimeNote株式会社のあゆみ。" },
      { property: "og:url", content: "/company/history" },
    ],
    links: [{ rel: "canonical", href: "/company/history" }],
  }),
  component: History,
});

const events = [
  { year: "2023", month: "1月", text: "神奈川県横浜市戸塚区にて LimeNote株式会社を設立。" },
  { year: "2023", month: "春", text: "SNS『LimeNote』のクローズドベータ版を公開。" },
  { year: "2023", month: "夏", text: "『LimeNote』正式版をリリース。" },
  { year: "2024", month: "秋", text: "利用規約を改定し、コミュニティガイドラインを整備。" },
  { year: "2025", month: "春", text: "累計投稿数が新たな節目を迎える。" },
];

function History() {
  return (
    <>
      <PageHero
        eyebrow="History"
        title="沿革"
        description="LimeNote株式会社のこれまでのあゆみ。"
        crumbs={[{ to: "/company", label: "会社情報" }, { label: "沿革" }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <ol className="relative space-y-8 border-l-2 border-primary-soft pl-8">
          {events.map((e, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[2.4rem] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-primary shadow-soft" />
              <p className="font-display text-sm font-bold text-accent">
                {e.year} <span className="ml-2 text-muted-foreground">{e.month}</span>
              </p>
              <p className="mt-1 text-base text-foreground">{e.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
