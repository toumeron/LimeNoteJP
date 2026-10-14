import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/recruit/internship")({
  beforeLoad: () => {
    throw redirect({ to: "/recruit", hash: "internship", replace: true });
  },
});
