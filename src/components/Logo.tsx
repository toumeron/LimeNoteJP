import { Link } from "@tanstack/react-router";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  } as const;
  const s = sizes[size];

  return (
    <Link
      to="/"
      className="inline-flex items-center gap-1 font-display font-black"
      aria-label="LimeService"
    >
      <span className={`${s}`}>Lime</span>
      <span className={`${s}`}>Service</span>
    </Link>
  );
}
