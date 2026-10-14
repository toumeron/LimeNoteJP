import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Home,
  Building2,
  Layers3,
  Users,
  Newspaper,
  Mail,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { AccountIcon } from "./AccountIcon";
import { navigation } from "@/content/site";
const categoryIcons: Record<string, LucideIcon> = {
  HOME: Home,
  COMPANY: Building2,
  SERVICE: Layers3,
  RECRUIT: Users,
  NEWS: Newspaper,
  CONTACT: Mail,
};
export function Header() {
  const [mobile, setMobile] = useState(false);
  const location = useLocation();
  const ref = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => setMobile(false), [location.href]);
  useEffect(() => {
    function outside(e: PointerEvent) {
      if (!ref.current?.contains(e.target as Node)) setMobile(false);
    }
    function escape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobile(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <header className="site-header" ref={ref}>
      <a className="skip-link" href="#main-content">
        本文へスキップ
      </a>
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {navigation.map((n) => {
            const Icon = categoryIcons[n.en];
            return (
              <div
                key={n.to}
                className={`nav-item ${location.pathname === n.to || (n.to !== "/" && location.pathname.startsWith(n.to + "/")) ? "active" : ""}`}
              >
                <Link to={n.to}>
                  <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                  {n.label}
                </Link>
              </div>
            );
          })}
        </nav>
        <button
          ref={toggle}
          className="mobile-menu-button"
          type="button"
          aria-label={mobile ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={mobile}
          aria-controls="mobile-menu"
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <div className="header-account">
          <AccountIcon />
        </div>
      </div>
      {mobile && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="モバイルナビゲーション"
        >
          {navigation.map((n) => {
            const Icon = categoryIcons[n.en];
            return (
              <Link className="mobile-nav-title" key={n.to} to={n.to}>
                <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                {n.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
