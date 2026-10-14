import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/Pages";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "お問い合わせ | LimeService株式会社" }] }),
  component: ContactPage,
});
