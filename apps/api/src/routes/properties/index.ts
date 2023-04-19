import { RouteOptions } from "fastify";
import { getAllPropertiesRoute } from "./list";
import { createPropertyRoute } from "./create";

export const propertiesRoutes: RouteOptions[] = [
 getAllPropertiesRoute,
 createPropertyRoute
];
