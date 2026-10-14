import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/company/access")({
  beforeLoad: () => {
    throw redirect({ to: "/company", hash: "access", replace: true });
  },
});
