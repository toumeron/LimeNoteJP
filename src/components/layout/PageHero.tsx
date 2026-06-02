import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface Crumb {
  to?: string;
  label: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  crumbs?: Crumb[];
}) {
  return (
    <>
      {/* Breadcrumb bar — JR East style: thin, separate from title */}
      {crumbs && (
        <nav
          aria-label="パンくず"
          className="border-b border-border bg-card"
        >
          <ol className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-1 px-4 py-3 text-xs text-muted-foreground sm:px-6 lg:px-8">
            <li>
              <Link to="/" className="hover:text-accent">ホーム</Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-accent">{c.label}</Link>
                ) : (
                  <span className="text-foreground">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Title bar */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-cream">
        <div className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full bg-gradient-primary opacity-15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-gradient-accent opacity-10 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <div className="mt-5 h-[3px] w-12 rounded-full bg-accent" />
          {description && (
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
