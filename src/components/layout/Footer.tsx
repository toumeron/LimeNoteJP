import { Link } from "@tanstack/react-router";
import { ExternalLink, ArrowUp } from "lucide-react";
import { Logo } from "@/components/Logo";

const groups = [
  {
    title: "会社情報",
    links: [
      { to: "/company", label: "会社情報トップ" },
      { to: "/company/profile", label: "会社概要" },
      { to: "/company/message", label: "代表メッセージ" },
      { to: "/company/history", label: "沿革" },
    ],
  },
  {
    title: "サービス",
    links: [
      { to: "/service", label: "LimeNote について" },
      { href: "https://toumeron.github.io/RaimuNoteSNS.github.io/", label: "LimeNote を開く" },
      { href: "https://toumeron.github.io/RaimuNoteSNS.github.io/terms", label: "利用規約" },
    ],
  },
  {
    title: "その他",
    links: [
      { to: "/news", label: "ニュース" },
      { to: "/recruit", label: "採用情報" },
      { to: "/contact", label: "お問い合わせ" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      {/* Back to top */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-[1280px] justify-end px-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 py-4 text-xs font-bold text-muted-foreground hover:text-accent"
          >
            <ArrowUp className="h-3.5 w-3.5" /> ページの先頭へ
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo size="md" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              「書くこと」を、もっと自由に。<br />
              短いノートでつながるSNS「LimeNote」を運営しています。
            </p>
            <address className="mt-5 text-xs not-italic leading-relaxed text-muted-foreground">
              〒244-0000<br />
              神奈川県横浜市戸塚区<br />
              LimeNote株式会社
            </address>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-display text-sm font-black tracking-wider text-foreground">
                <span className="mr-2 inline-block h-3 w-[3px] translate-y-0.5 bg-accent" />
                {g.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {g.links.map((l) =>
                  "href" in l ? (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-accent"
                      >
                        {l.label} <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                  ) : (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="text-muted-foreground transition-colors hover:text-accent"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} LimeNote, Inc. All rights reserved.</p>
          <p className="font-medium">Connecting small notes to everyday life.</p>
        </div>
      </div>
    </footer>
  );
}
