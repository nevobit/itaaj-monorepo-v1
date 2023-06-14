import { RouteOptions } from "fastify";
import { loginRoute } from "./login";
import { registerRoute } from "./register";


export const authRoutes: RouteOptions[] = [
 loginRoute,
 registerRoute
];
