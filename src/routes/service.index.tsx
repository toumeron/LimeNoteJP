import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/site/Pages";
export const Route = createFileRoute("/service/")({
  head: () => ({ meta: [{ title: "サービス紹介 | LimeService株式会社" }] }),
  component: ServicesPage,
});
