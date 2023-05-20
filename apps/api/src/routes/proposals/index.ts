import { RouteOptions } from "fastify";
import { getAllProposalsRoute } from "./list";
import { createProposalRoute } from "./create";
import { updateProposalRoute } from "./update";

export const proposalsRoutes: RouteOptions[] = [
 getAllProposalsRoute,
 createProposalRoute,
 updateProposalRoute,
];
