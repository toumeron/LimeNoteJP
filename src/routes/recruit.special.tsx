import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/recruit/special")({
  beforeLoad: () => {
    throw redirect({ to: "/recruit", hash: "special", replace: true });
  },
});
