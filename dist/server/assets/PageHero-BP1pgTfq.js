import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
function PageHero({
  eyebrow,
  title,
  description,
  crumbs
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    crumbs && /* @__PURE__ */ jsx(
      "nav",
      {
        "aria-label": "パンくず",
        className: "border-b border-border bg-card",
        children: /* @__PURE__ */ jsxs("ol", { className: "mx-auto flex max-w-[1280px] flex-wrap items-center gap-1 px-4 py-3 text-xs text-muted-foreground sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "ホーム" }) }),
          crumbs.map((c, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-muted-foreground/60" }),
            c.to ? /* @__PURE__ */ jsx(Link, { to: c.to, className: "hover:text-accent", children: c.label }) : /* @__PURE__ */ jsx("span", { className: "text-foreground", children: c.label })
          ] }, i))
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-border bg-gradient-cream", children: [
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full bg-gradient-primary opacity-15 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-gradient-accent opacity-10 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24", children: [
        eyebrow && /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent", children: eyebrow }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl", children: title }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 h-[3px] w-12 rounded-full bg-accent" }),
        description && /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base", children: description })
      ] })
    ] })
  ] });
}
export {
  PageHero as P
};
