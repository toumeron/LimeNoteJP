import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/company/message")({
  beforeLoad: () => {
    throw redirect({ to: "/company", hash: "message", replace: true });
  },
});
