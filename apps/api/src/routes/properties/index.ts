import { RouteOptions } from "fastify";
import { getAllPropertiesRoute } from "./list";

export const propertiesRoutes: RouteOptions[] = [
 getAllPropertiesRoute
];
