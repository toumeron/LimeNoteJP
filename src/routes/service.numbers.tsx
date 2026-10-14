import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/service/numbers")({
  beforeLoad: () => {
    throw redirect({ to: "/service", hash: "numbers", replace: true });
  },
});
