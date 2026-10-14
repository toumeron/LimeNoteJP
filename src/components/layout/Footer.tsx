import { Link } from "@tanstack/react-router";
import { navigation } from "@/content/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner wrap">
        <p>LimeService株式会社</p>
        <nav aria-label="フッターナビゲーション">
          {navigation.map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
        </nav>
        <small>© {new Date().getFullYear()} LimeService, Inc.</small>
      </div>
    </footer>
  );
}
