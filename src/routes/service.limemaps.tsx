import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/service/limemaps")({
  beforeLoad: () => {
    throw redirect({ to: "/service", hash: "limemaps", replace: true });
  },
});
