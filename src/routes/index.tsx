import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import panelService from "@/assets/panel-service.jpg";
import panelRecruit from "@/assets/panel-recruit.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LimeNote株式会社 | SNS『LimeNote』運営" },
      { name: "description", content: "LimeNote株式会社は、SNS『LimeNote』を運営する企業です。横浜市戸塚区から、書くことの自由をひろげるサービスをお届けします。" },
      { property: "og:title", content: "LimeNote株式会社" },
      { property: "og:description", content: "SNS『LimeNote』を運営するLimeNote株式会社の公式サイト。" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const heroLinks = [
  { to: "/company/message", label: "代表メッセージ" },
  { to: "/company/profile", label: "会社概要" },
  { to: "/company/history", label: "沿革" },
  { to: "/service", label: "サービス" },
] as const;

const news = [
  { date: "2025-04-01", category: "プレスリリース", title: "SNS『LimeNote』の累計投稿数が新たな節目を迎えました" },
  { date: "2024-10-15", category: "お知らせ", title: "LimeNote 利用規約改定のお知らせ" },
  { date: "2024-04-20", category: "サービス", title: "通報・ブロック機能の改善を行いました" },
  { date: "2023-07-01", category: "サービス", title: "SNS『LimeNote』正式版をリリース" },
];

function Home() {
  return (
    <>
      {/* HERO — JR East style: large image + side panels + bottom quick links */}
      <section className="bg-card">
        <div className="mx-auto grid max-w-[1280px] gap-2 px-2 pt-2 lg:grid-cols-[1fr_320px] lg:gap-3 lg:px-4 lg:pt-3">
          {/* Main hero image with overlay */}
          <div className="relative overflow-hidden rounded-md">
            <img
              src={heroImg}
              alt="ライムノートと一杯のライム"
              width={1920}
              height={1080}
              className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[560px]"
            />
            {/* Green tagline panel — JR East style */}
            <div className="absolute left-4 top-6 max-w-[88%] sm:left-10 sm:top-10 sm:max-w-[520px]">
              <div className="bg-accent px-5 py-4 shadow-pop sm:px-8 sm:py-6">
                <p className="font-display text-2xl font-black leading-[1.35] text-accent-foreground sm:text-3xl lg:text-4xl">
                  書くことを、<br />もっと自由に。
                </p>
                <div className="mt-3 h-[3px] w-24 bg-primary" />
              </div>
              <p className="mt-3 ml-1 max-w-md text-sm font-medium text-card drop-shadow-md sm:text-base">
                短いノートが、誰かのきょうに、そっと寄りそう。
              </p>
            </div>

            {/* Quick-link bar at bottom of hero */}
            <div className="absolute inset-x-2 bottom-2 sm:inset-x-6 sm:bottom-6">
              <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-md bg-card/95 backdrop-blur md:grid-cols-4">
                {heroLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="group flex h-full items-center gap-2 bg-card px-4 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-primary-soft hover:text-accent sm:px-5 sm:py-4"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <ArrowRight className="h-3 w-3" />
                      </span>
                      <span className="truncate">{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Side panels — IR/Sustainability slot */}
          <div className="grid gap-2 lg:gap-3">
            <SidePanel
              to="/service"
              img={panelService}
              alt="LimeNoteのアプリ画面"
              eyebrow="Our Service"
              title="SNS『LimeNote』"
            />
            <SidePanel
              to="/recruit"
              img={panelRecruit}
              alt="ノートに書く人の手元"
              eyebrow="Recruit"
              title="採用情報"
            />
          </div>
        </div>
      </section>

      {/* NEWS RELEASES */}
      <section className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle en="News Releases" ja="ニュース" />
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {news.map((n) => (
            <li key={n.title}>
              <Link
                to="/news"
                className="group grid items-center gap-2 px-2 py-5 hover:bg-muted/60 sm:grid-cols-[8rem_8rem_1fr_auto] sm:gap-6 sm:px-4 sm:py-6"
              >
                <time className="text-sm font-medium text-muted-foreground">{n.date}</time>
                <span className="inline-flex h-6 w-fit items-center rounded-sm bg-primary-soft px-3 text-xs font-bold text-accent">
                  {n.category}
                </span>
                <p className="text-sm text-foreground group-hover:text-accent sm:text-[15px]">
                  {n.title}
                </p>
                <ArrowRight className="hidden h-4 w-4 text-accent transition-transform group-hover:translate-x-1 sm:block" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Link
            to="/news"
            className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-accent px-8 text-sm font-bold text-accent hover:bg-accent hover:text-accent-foreground"
          >
            ニュース一覧 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* COMPANY OVERVIEW STRIP */}
      <section className="bg-gradient-cream py-20 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <SectionTitle en="About Us" ja="LimeNoteについて" />
          <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <p className="font-display text-xl font-bold leading-relaxed text-foreground sm:text-2xl">
                小さな「書く」を、<br />
                <span className="text-accent">大切にする会社です。</span>
              </p>
              <p className="mt-6 leading-loose text-foreground/80">
                LimeNote株式会社は、2023年1月に神奈川県横浜市戸塚区にて設立。
                短いノートでつながるSNS『LimeNote』を企画・開発・運営しています。
                毎日のなかにある小さな気づきや、ぽつりとした一言を、
                やさしく受けとめる場所をつくりつづけています。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/company/profile"
                  className="inline-flex h-11 items-center gap-1.5 rounded-full bg-accent px-6 text-sm font-bold text-accent-foreground hover:opacity-90"
                >
                  <ArrowDot /> 会社概要
                </Link>
                <Link
                  to="/company/message"
                  className="inline-flex h-11 items-center gap-1.5 rounded-full border border-accent bg-card px-6 text-sm font-bold text-accent hover:bg-accent/5"
                >
                  <ArrowDot /> 代表メッセージ
                </Link>
                <Link
                  to="/company/history"
                  className="inline-flex h-11 items-center gap-1.5 rounded-full border border-accent bg-card px-6 text-sm font-bold text-accent hover:bg-accent/5"
                >
                  <ArrowDot /> 沿革
                </Link>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-soft">
              <Stat k="設立" v="2023.01" />
              <Stat k="本社" v="横浜市戸塚区" />
              <Stat k="代表者" v="ねこ" />
              <Stat k="事業" v="SNS運営" />
            </dl>
          </div>
        </div>
      </section>

      {/* SERVICE CTA */}
      <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="overflow-hidden rounded-3xl bg-gradient-primary p-10 shadow-pop sm:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground/80">
            Our Service
          </p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            SNS『LimeNote』を、<br />ひらいてみる。
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-primary-foreground/95">
            短いノートを通して、誰かのきょうにそっと寄りそう。
            やさしく、ゆるやかにつながるSNSです。今すぐ無料でお試しいただけます。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://toumeron.github.io/RaimuNoteSNS.github.io/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-card px-7 text-sm font-bold text-foreground shadow-soft hover:bg-background"
            >
              LimeNote を開く <ExternalLink className="h-4 w-4" />
            </a>
            <Link
              to="/service"
              className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-primary-foreground/50 px-7 text-sm font-bold text-primary-foreground hover:bg-primary-foreground/10"
            >
              サービス詳細 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SidePanel({
  to,
  img,
  alt,
  eyebrow,
  title,
}: {
  to: string;
  img: string;
  alt: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden rounded-md"
    >
      <img
        src={img}
        alt={alt}
        loading="lazy"
        width={1024}
        height={768}
        className="h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[220px] lg:h-[276px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
        <div className="mt-1 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
          <p className="font-display text-lg font-bold text-card sm:text-xl">{title}</p>
        </div>
      </div>
    </Link>
  );
}

function SectionTitle({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
        {ja}
      </h2>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">{en}</p>
      <div className="mt-5 h-[3px] w-12 rounded-full bg-accent" />
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-card p-6 text-center">
      <dt className="text-xs font-bold uppercase tracking-wider text-accent">{k}</dt>
      <dd className="mt-2 font-display text-xl font-black text-foreground sm:text-2xl">{v}</dd>
    </div>
  );
}

function ArrowDot() {
  return (
    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-current/15">
      <ArrowRight className="h-2.5 w-2.5" />
    </span>
  );
}
