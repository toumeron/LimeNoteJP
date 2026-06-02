import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Mail } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

const FORM_URL = "https://forms.gle/1FUHzrWL38iVbUju5";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "お問い合わせ | LimeNote株式会社" },
      { name: "description", content: "LimeNote株式会社へのお問い合わせは、Googleフォームより受け付けております。" },
      { property: "og:title", content: "お問い合わせ | LimeNote株式会社" },
      { property: "og:description", content: "LimeNote株式会社へのお問い合わせ窓口。" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="お問い合わせ"
        description="サービスや会社に関するご質問は、Googleフォームより承っております。"
        crumbs={[{ label: "お問い合わせ" }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft">
            <Mail className="h-7 w-7 text-accent" />
          </div>
          <h2 className="mt-6 font-display text-2xl font-bold">お問い合わせフォーム</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            下記ボタンより Googleフォーム を開き、必要事項をご記入のうえ送信してください。
            内容を確認のうえ、担当者よりご連絡いたします。
          </p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-gradient-primary px-7 text-sm font-bold text-primary-foreground shadow-pop transition-transform hover:scale-[1.02]"
          >
            フォームを開く <ExternalLink className="h-4 w-4" />
          </a>

          <div className="mt-10 rounded-2xl bg-muted p-5 text-sm leading-relaxed text-muted-foreground">
            <p className="font-bold text-foreground">ご注意</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>内容によってはご返信までお時間をいただく場合がございます。</li>
              <li>サービスの不具合に関するご報告も、こちらのフォームより承ります。</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
