import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/company/profile")({
  beforeLoad: () => {
    throw redirect({ to: "/company", hash: "profile", replace: true });
  },
});
