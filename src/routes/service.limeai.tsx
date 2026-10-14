import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/service/limeai")({
  beforeLoad: () => {
    throw redirect({ to: "/service", hash: "limeai", replace: true });
  },
});
