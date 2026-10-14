import { Link } from "@tanstack/react-router";
export function PageHero({
  title,
  crumbs,
}: {
  title: string;
  crumbs?: { to?: string; label: string }[];
}) {
  return (
    <div className="page-hero">
      <div className="wrap">
        {crumbs && (
          <nav aria-label="パンくず">
            <ol className="breadcrumbs">
              <li>
                <Link to="/">ホーム</Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={i}>
                  {c.to ? (
                    <Link to={c.to}>{c.label}</Link>
                  ) : (
                    <span aria-current="page">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1>{title}</h1>
      </div>
    </div>
  );
}
