import { RouteOptions } from "fastify";
import { getAllPostsRoute } from "./list";
import { createPostRoute } from "./create";
import { getOnePostRoute } from "./get-one";

export const postsRoutes: RouteOptions[] = [
 getAllPostsRoute,
 createPostRoute,
 getOnePostRoute
];
