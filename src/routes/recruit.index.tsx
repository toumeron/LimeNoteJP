import { createFileRoute } from "@tanstack/react-router";
import { RecruitPage } from "@/components/site/Pages";
export const Route = createFileRoute("/recruit/")({
  head: () => ({ meta: [{ title: "採用情報 | LimeService株式会社" }] }),
  component: RecruitPage,
});
