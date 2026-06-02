import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ExternalLink, Mail, X, Menu, ArrowUp } from "lucide-react";
const appCss = "/assets/styles-DvwHdudV.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function Logo({ size = "md" }) {
  const sizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl"
  };
  const s = sizes[size];
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: "/",
      className: "inline-flex items-center gap-1 font-display font-black",
      "aria-label": "LimeNote株式会社",
      children: [
        /* @__PURE__ */ jsx("span", { className: `${s} bg-gradient-primary bg-clip-text text-transparent`, children: "Lime" }),
        /* @__PURE__ */ jsx("span", { className: `${s} text-accent`, children: "Note" })
      ]
    }
  );
}
const nav = [
  { to: "/company", label: "会社情報" },
  { to: "/service", label: "サービス" },
  { to: "/news", label: "ニュース" },
  { to: "/recruit", label: "採用情報" }
];
function Header() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-[72px] max-w-[1280px] items-stretch justify-between gap-6 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-stretch gap-2 lg:gap-10", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(Logo, { size: "md" }) }),
        /* @__PURE__ */ jsx("nav", { className: "hidden items-stretch lg:flex", children: nav.map((n) => /* @__PURE__ */ jsx(
          Link,
          {
            to: n.to,
            className: "group relative flex items-center px-5 text-[15px] font-bold text-foreground/85 transition-colors hover:text-accent",
            activeProps: { className: "text-accent" },
            children: ({ isActive }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { children: n.label }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `absolute inset-x-4 bottom-3 h-[3px] rounded-full bg-accent transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`
                }
              )
            ] })
          },
          n.to
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-2 lg:flex", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://toumeron.github.io/RaimuNoteSNS.github.io/",
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-4 text-xs font-bold text-foreground hover:border-accent hover:text-accent",
            children: [
              "LimeNote を開く ",
              /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/recruit",
            className: "inline-flex h-9 items-center px-3 text-xs font-bold text-foreground/70 hover:text-accent",
            children: "採用サイト"
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/contact",
            className: "inline-flex h-9 items-center gap-1.5 rounded-full bg-gradient-primary px-4 text-xs font-bold text-primary-foreground shadow-soft hover:scale-[1.02]",
            children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5" }),
              " お問い合わせ"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "inline-flex items-center justify-center self-center lg:hidden",
          onClick: () => setOpen((v) => !v),
          "aria-label": "メニュー",
          children: open ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "border-t border-border bg-card lg:hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col px-4 py-2", children: [
      nav.map((n) => /* @__PURE__ */ jsx(
        Link,
        {
          to: n.to,
          onClick: () => setOpen(false),
          className: "border-b border-border py-4 text-base font-bold",
          children: n.label
        },
        n.to
      )),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/contact",
          onClick: () => setOpen(false),
          className: "mt-4 mb-2 inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-gradient-primary px-5 text-sm font-bold text-primary-foreground",
          children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
            " お問い合わせ"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://toumeron.github.io/RaimuNoteSNS.github.io/",
          target: "_blank",
          rel: "noreferrer",
          className: "mb-3 inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-border px-5 text-sm font-bold",
          children: [
            "LimeNote を開く ",
            /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
          ]
        }
      )
    ] }) })
  ] });
}
const groups = [
  {
    title: "会社情報",
    links: [
      { to: "/company", label: "会社情報トップ" },
      { to: "/company/profile", label: "会社概要" },
      { to: "/company/message", label: "代表メッセージ" },
      { to: "/company/history", label: "沿革" }
    ]
  },
  {
    title: "サービス",
    links: [
      { to: "/service", label: "LimeNote について" },
      { href: "https://toumeron.github.io/RaimuNoteSNS.github.io/", label: "LimeNote を開く" },
      { href: "https://toumeron.github.io/RaimuNoteSNS.github.io/terms", label: "利用規約" }
    ]
  },
  {
    title: "その他",
    links: [
      { to: "/news", label: "ニュース" },
      { to: "/recruit", label: "採用情報" },
      { to: "/contact", label: "お問い合わせ" }
    ]
  }
];
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "mt-24 border-t border-border bg-card", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-[1280px] justify-end px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "#top",
        onClick: (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        className: "inline-flex items-center gap-2 py-4 text-xs font-bold text-muted-foreground hover:text-accent",
        children: [
          /* @__PURE__ */ jsx(ArrowUp, { className: "h-3.5 w-3.5" }),
          " ページの先頭へ"
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Logo, { size: "md" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: [
          "「書くこと」を、もっと自由に。",
          /* @__PURE__ */ jsx("br", {}),
          "短いノートでつながるSNS「LimeNote」を運営しています。"
        ] }),
        /* @__PURE__ */ jsxs("address", { className: "mt-5 text-xs not-italic leading-relaxed text-muted-foreground", children: [
          "〒244-0000",
          /* @__PURE__ */ jsx("br", {}),
          "神奈川県横浜市戸塚区",
          /* @__PURE__ */ jsx("br", {}),
          "LimeNote株式会社"
        ] })
      ] }),
      groups.map((g) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h3", { className: "font-display text-sm font-black tracking-wider text-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "mr-2 inline-block h-3 w-[3px] translate-y-0.5 bg-accent" }),
          g.title
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3 text-sm", children: g.links.map(
          (l) => "href" in l ? /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: l.href,
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-accent",
              children: [
                l.label,
                " ",
                /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })
              ]
            }
          ) }, l.label) : /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "text-muted-foreground transition-colors hover:text-accent",
              children: l.label
            }
          ) }, l.to)
        ) })
      ] }, g.title))
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " LimeNote, Inc. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Connecting small notes to everyday life." })
    ] }) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "LimeNote株式会社" },
      { name: "description", content: "LimeNote株式会社は、SNS『LimeNote』を運営する企業です。横浜市戸塚区に本社を構え、書くことの自由をひろげるサービスを提供しています。" },
      { name: "author", content: "LimeNote, Inc." },
      { property: "og:site_name", content: "LimeNote株式会社" },
      { property: "og:title", content: "LimeNote株式会社" },
      { property: "og:description", content: "SNS『LimeNote』を運営するLimeNote株式会社の公式サイト。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500;700;900&family=M+PLUS+Rounded+1c:wght@400;500;700;900&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "LimeNote株式会社",
          alternateName: "LimeNote, Inc.",
          foundingDate: "2023-01",
          founder: { "@type": "Person", name: "ねこ" },
          address: {
            "@type": "PostalAddress",
            addressCountry: "JP",
            addressRegion: "神奈川県",
            addressLocality: "横浜市戸塚区"
          }
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "ja", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
const $$splitComponentImporter$8 = () => import("./service-DSonSXEb.js");
const Route$8 = createFileRoute("/service")({
  head: () => ({
    meta: [{
      title: "サービス | LimeNote株式会社"
    }, {
      name: "description",
      content: "LimeNote株式会社が運営するSNS『LimeNote』のご紹介。短いノートでつながる、やさしいSNSです。"
    }, {
      property: "og:title",
      content: "サービス | LimeNote株式会社"
    }, {
      property: "og:description",
      content: "SNS『LimeNote』のご紹介。"
    }, {
      property: "og:url",
      content: "/service"
    }],
    links: [{
      rel: "canonical",
      href: "/service"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./recruit-DQWKy3eV.js");
const Route$7 = createFileRoute("/recruit")({
  head: () => ({
    meta: [{
      title: "採用情報 | LimeNote株式会社"
    }, {
      name: "description",
      content: "LimeNote株式会社の採用情報。ともにLimeNoteを育てる仲間を募集しています。"
    }, {
      property: "og:title",
      content: "採用情報 | LimeNote株式会社"
    }, {
      property: "og:description",
      content: "LimeNote株式会社の採用情報。"
    }, {
      property: "og:url",
      content: "/recruit"
    }],
    links: [{
      rel: "canonical",
      href: "/recruit"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./news-DFG0l-eZ.js");
const Route$6 = createFileRoute("/news")({
  head: () => ({
    meta: [{
      title: "ニュース | LimeNote株式会社"
    }, {
      name: "description",
      content: "LimeNote株式会社からのお知らせ・プレスリリース一覧。"
    }, {
      property: "og:title",
      content: "ニュース | LimeNote株式会社"
    }, {
      property: "og:description",
      content: "LimeNoteからのお知らせ一覧。"
    }, {
      property: "og:url",
      content: "/news"
    }],
    links: [{
      rel: "canonical",
      href: "/news"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-C-DFWWWR.js");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "お問い合わせ | LimeNote株式会社"
    }, {
      name: "description",
      content: "LimeNote株式会社へのお問い合わせは、Googleフォームより受け付けております。"
    }, {
      property: "og:title",
      content: "お問い合わせ | LimeNote株式会社"
    }, {
      property: "og:description",
      content: "LimeNote株式会社へのお問い合わせ窓口。"
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./company-BLnpv54R.js");
const Route$4 = createFileRoute("/company")({
  head: () => ({
    meta: [{
      title: "会社情報 | LimeNote株式会社"
    }, {
      name: "description",
      content: "LimeNote株式会社の会社概要、代表メッセージ、沿革をご紹介します。"
    }, {
      property: "og:title",
      content: "会社情報 | LimeNote株式会社"
    }, {
      property: "og:description",
      content: "LimeNote株式会社の会社概要、代表メッセージ、沿革。"
    }, {
      property: "og:url",
      content: "/company"
    }],
    links: [{
      rel: "canonical",
      href: "/company"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-CIW0IQBL.js");
const Route$3 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "LimeNote株式会社 | SNS『LimeNote』運営"
    }, {
      name: "description",
      content: "LimeNote株式会社は、SNS『LimeNote』を運営する企業です。横浜市戸塚区から、書くことの自由をひろげるサービスをお届けします。"
    }, {
      property: "og:title",
      content: "LimeNote株式会社"
    }, {
      property: "og:description",
      content: "SNS『LimeNote』を運営するLimeNote株式会社の公式サイト。"
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./company.profile-CuxGwBiB.js");
const Route$2 = createFileRoute("/company/profile")({
  head: () => ({
    meta: [{
      title: "会社概要 | LimeNote株式会社"
    }, {
      name: "description",
      content: "LimeNote株式会社の商号、設立、代表者、所在地、事業内容など、会社概要をご案内します。"
    }, {
      property: "og:title",
      content: "会社概要 | LimeNote株式会社"
    }, {
      property: "og:description",
      content: "LimeNote株式会社の基本情報。"
    }, {
      property: "og:url",
      content: "/company/profile"
    }],
    links: [{
      rel: "canonical",
      href: "/company/profile"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./company.message-BoZfX4EC.js");
const Route$1 = createFileRoute("/company/message")({
  head: () => ({
    meta: [{
      title: "代表メッセージ | LimeNote株式会社"
    }, {
      name: "description",
      content: "LimeNote株式会社 代表取締役CEO ねこ からのメッセージをご紹介します。"
    }, {
      property: "og:title",
      content: "代表メッセージ | LimeNote株式会社"
    }, {
      property: "og:description",
      content: "代表取締役CEO ねこ からのメッセージ。"
    }, {
      property: "og:url",
      content: "/company/message"
    }],
    links: [{
      rel: "canonical",
      href: "/company/message"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./company.history-B1r-1lrl.js");
const Route = createFileRoute("/company/history")({
  head: () => ({
    meta: [{
      title: "沿革 | LimeNote株式会社"
    }, {
      name: "description",
      content: "LimeNote株式会社のあゆみ。2023年の設立から現在までの主な出来事をご紹介します。"
    }, {
      property: "og:title",
      content: "沿革 | LimeNote株式会社"
    }, {
      property: "og:description",
      content: "LimeNote株式会社のあゆみ。"
    }, {
      property: "og:url",
      content: "/company/history"
    }],
    links: [{
      rel: "canonical",
      href: "/company/history"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServiceRoute = Route$8.update({
  id: "/service",
  path: "/service",
  getParentRoute: () => Route$9
});
const RecruitRoute = Route$7.update({
  id: "/recruit",
  path: "/recruit",
  getParentRoute: () => Route$9
});
const NewsRoute = Route$6.update({
  id: "/news",
  path: "/news",
  getParentRoute: () => Route$9
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$9
});
const CompanyRoute = Route$4.update({
  id: "/company",
  path: "/company",
  getParentRoute: () => Route$9
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const CompanyProfileRoute = Route$2.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => CompanyRoute
});
const CompanyMessageRoute = Route$1.update({
  id: "/message",
  path: "/message",
  getParentRoute: () => CompanyRoute
});
const CompanyHistoryRoute = Route.update({
  id: "/history",
  path: "/history",
  getParentRoute: () => CompanyRoute
});
const CompanyRouteChildren = {
  CompanyHistoryRoute,
  CompanyMessageRoute,
  CompanyProfileRoute
};
const CompanyRouteWithChildren = CompanyRoute._addFileChildren(CompanyRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  CompanyRoute: CompanyRouteWithChildren,
  ContactRoute,
  NewsRoute,
  RecruitRoute,
  ServiceRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
