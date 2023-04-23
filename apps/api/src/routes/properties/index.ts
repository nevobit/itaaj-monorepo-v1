import { RouteOptions } from "fastify";
import { getAllPropertiesRoute } from "./list";
import { createPropertyRoute } from "./create";
import { getOnePropertyRoute } from "./get-one";

export const propertiesRoutes: RouteOptions[] = [
 getAllPropertiesRoute,
 createPropertyRoute,
 getOnePropertyRoute
];
