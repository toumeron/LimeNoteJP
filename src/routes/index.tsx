import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/Pages";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "LimeService株式会社" }] }),
  component: HomePage,
});
