import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/recruit/graduates")({
  beforeLoad: () => {
    throw redirect({ to: "/recruit", hash: "graduates", replace: true });
  },
});
