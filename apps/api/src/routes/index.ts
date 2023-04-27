import { FastifyInstance, RouteOptions } from 'fastify';
import { propertiesRoutes } from './properties';
import { postsRoutes } from './posts';

const routes: RouteOptions[] = [
 ...propertiesRoutes,
 ...postsRoutes
];

export const registerRoutes = (fastify: FastifyInstance) => {
 fastify.log.warn('Registering routes');

 routes.map((route) => {
  fastify.route(route);
 });
};