import { RouteOptions } from "fastify";
import { getAllPropertiesRoute } from "./list";
import { createPropertyRoute } from "./create";
import { getOnePropertyRoute } from "./get-one";
import { deletePropertyRoute } from "./delete";

export const propertiesRoutes: RouteOptions[] = [
 getAllPropertiesRoute,
 createPropertyRoute,
 getOnePropertyRoute,
 deletePropertyRoute
];
