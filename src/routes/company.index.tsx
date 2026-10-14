import { createFileRoute } from "@tanstack/react-router";
import { CompanyPage } from "@/components/site/Pages";
export const Route = createFileRoute("/company/")({
  head: () => ({ meta: [{ title: "企業情報 | LimeService株式会社" }] }),
  component: CompanyPage,
});
