import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/company/vision")({
  beforeLoad: () => {
    throw redirect({ to: "/company", hash: "vision", replace: true });
  },
});
