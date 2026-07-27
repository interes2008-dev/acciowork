import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pt")({
  component: () => <Outlet />,
});