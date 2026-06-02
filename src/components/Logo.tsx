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
      aria-label="LimeNote株式会社"
    >
      <span className={`${s} bg-gradient-primary bg-clip-text text-transparent`}>
        Lime
      </span>
      <span className={`${s} text-accent`}>Note</span>
    </Link>
  );
}
