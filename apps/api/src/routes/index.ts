import { FastifyInstance, RouteOptions } from 'fastify';
import { propertiesRoutes } from './properties';

const routes: RouteOptions[] = [
 ...propertiesRoutes
];

export const registerRoutes = (fastify: FastifyInstance) => {
 fastify.log.warn('Registering routes');

 routes.map((route) => {
  fastify.route(route);
 });
};