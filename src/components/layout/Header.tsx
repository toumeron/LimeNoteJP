import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { AccountIcon } from "./AccountIcon";
import { navigation } from "@/content/site";

export function Header() {
  const location = useLocation();
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const isCurrent = (to: string) =>
    location.pathname === to ||
    (to !== "/" && location.pathname.startsWith(to + "/"));

  useEffect(() => {
    dialog.current?.close();
  }, [location.href]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1051px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialog.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previous;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="global-header">
      <a className="skip-link" href="#main-content">
        本文へスキップ
      </a>
      <div className="global-header-inner">
        <div className="global-brand">
          <Logo />
        </div>
        <span className="global-header-rule" aria-hidden="true" />
        <nav className="global-navigation" aria-label="メインナビゲーション">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={item.en === "CONTACT" ? "global-contact" : ""}
              aria-current={isCurrent(item.to) ? "page" : undefined}
            >
              <span>{item.label}</span>
              {item.en === "CONTACT" && (
                <ArrowUpRight size={15} aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>
        <div className="global-account">
          <AccountIcon />
        </div>
        <button
          className="global-menu-toggle"
          type="button"
          aria-label="メニューを開く"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="global-menu"
          onClick={() => {
            dialog.current?.showModal();
            setOpen(true);
          }}
        >
          <span aria-hidden="true" />
        </button>
      </div>
      <dialog
        ref={dialog}
        id="global-menu"
        className="global-menu"
        aria-label="サイトメニュー"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="global-menu-sheet">
          <div className="global-menu-top">
            <Logo />
            <button
              type="button"
              aria-label="メニューを閉じる"
              onClick={() => dialog.current?.close()}
            >
              <X size={22} strokeWidth={1.4} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="モバイルナビゲーション">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                aria-current={isCurrent(item.to) ? "page" : undefined}
                onClick={() => dialog.current?.close()}
              >
                <span className="global-menu-label">{item.label}</span>
                <ArrowUpRight size={22} strokeWidth={1.3} aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>
      </dialog>
    </header>
  );
}
