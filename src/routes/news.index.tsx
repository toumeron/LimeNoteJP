import { createFileRoute } from "@tanstack/react-router";
import { NewsPage } from "@/components/site/Pages";
export const Route = createFileRoute("/news/")({
  head: () => ({ meta: [{ title: "ニュース | LimeService株式会社" }] }),
  component: NewsPage,
});
