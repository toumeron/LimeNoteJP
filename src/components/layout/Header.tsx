import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ExternalLink, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

const nav = [
  { to: "/company", label: "会社情報" },
  { to: "/service", label: "サービス" },
  { to: "/news", label: "ニュース" },
  { to: "/recruit", label: "採用情報" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-stretch justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Left: Logo + main nav */}
        <div className="flex items-stretch gap-2 lg:gap-10">
          <div className="flex items-center">
            <Logo size="md" />
          </div>
          <nav className="hidden items-stretch lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="group relative flex items-center px-5 text-[15px] font-bold text-foreground/85 transition-colors hover:text-accent"
                activeProps={{ className: "text-accent" }}
              >
                {({ isActive }) => (
                  <>
                    <span>{n.label}</span>
                    <span
                      className={`absolute inset-x-4 bottom-3 h-[3px] rounded-full bg-accent transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                      }`}
                    />
                  </>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: utility links */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://toumeron.github.io/RaimuNoteSNS.github.io/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-4 text-xs font-bold text-foreground hover:border-accent hover:text-accent"
          >
            LimeNote を開く <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Link
            to="/recruit"
            className="inline-flex h-9 items-center px-3 text-xs font-bold text-foreground/70 hover:text-accent"
          >
            採用サイト
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-gradient-primary px-4 text-xs font-bold text-primary-foreground shadow-soft hover:scale-[1.02]"
          >
            <Mail className="h-3.5 w-3.5" /> お問い合わせ
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="inline-flex items-center justify-center self-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="メニュー"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-base font-bold"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-gradient-primary px-5 text-sm font-bold text-primary-foreground"
            >
              <Mail className="h-4 w-4" /> お問い合わせ
            </Link>
            <a
              href="https://toumeron.github.io/RaimuNoteSNS.github.io/"
              target="_blank"
              rel="noreferrer"
              className="mb-3 inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-border px-5 text-sm font-bold"
            >
              LimeNote を開く <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
