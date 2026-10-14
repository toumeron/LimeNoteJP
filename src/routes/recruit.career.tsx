import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/recruit/career")({
  beforeLoad: () => {
    throw redirect({ to: "/recruit", hash: "career", replace: true });
  },
});
