import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/news")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { category?: "all" | "press" | "notice" } => ({
    category:
      search.category === "press" || search.category === "notice"
        ? search.category
        : "all",
  }),
  component: Outlet,
});
