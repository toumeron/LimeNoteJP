import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/company/message")({
  head: () => ({
    meta: [
      { title: "代表メッセージ | LimeNote株式会社" },
      { name: "description", content: "LimeNote株式会社 代表取締役CEO ねこ からのメッセージをご紹介します。" },
      { property: "og:title", content: "代表メッセージ | LimeNote株式会社" },
      { property: "og:description", content: "代表取締役CEO ねこ からのメッセージ。" },
      { property: "og:url", content: "/company/message" },
    ],
    links: [{ rel: "canonical", href: "/company/message" }],
  }),
  component: Message,
});

function Message() {
  return (
    <>
      <PageHero
        eyebrow="Message"
        title="代表メッセージ"
        description="LimeNoteは、書くことのよろこびに寄りそう場所でありたいと思っています。"
        crumbs={[{ to: "/company", label: "会社情報" }, { label: "代表メッセージ" }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
          <div className="flex items-center gap-4 border-b border-border pb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary font-display text-2xl font-black text-primary-foreground shadow-soft">
              N
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent">CEO</p>
              <p className="font-display text-lg font-bold">ねこ</p>
            </div>
          </div>

          <div className="mt-8 space-y-5 text-base leading-loose text-foreground/90">
            <p>
              ことばは、誰かのきょうをすこしだけ明るくしたり、自分のきもちを整えてくれたりします。
              LimeNote は、そんな小さな「書く」を、もっと気軽に、もっと自由に楽しめる場所でありたいと考えています。
            </p>
            <p>
              2023年1月、わたしたちは「短いノートでつながるSNS」というアイデアから歩み出しました。
              長い文章を書かなければ伝わらないわけではないし、毎日きらきらしていなくてもいい。
              ぽつりとつぶやいた一言が、ちゃんと誰かの目にとまる。そんな場所をつくりたかったのです。
            </p>
            <p>
              これからも LimeNote は、利用してくださるみなさんの声に耳を澄ませながら、
              ゆっくり、ていねいに育てていきます。よろしくお願いいたします。
            </p>
          </div>

          <p className="mt-10 text-right font-display text-sm text-muted-foreground">
            LimeNote株式会社<br />
            代表取締役CEO ねこ
          </p>
        </div>
      </section>
    </>
  );
}
