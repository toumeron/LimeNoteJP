import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/service/limenote")({
  beforeLoad: () => {
    throw redirect({ to: "/service", hash: "limenote", replace: true });
  },
});
