import { FastifyInstance, RouteOptions } from 'fastify';
import { propertiesRoutes } from './properties';
import { postsRoutes } from './posts';
import { authRoutes } from './auth';
<<<<<<< HEAD
import { proposalsRoutes } from './proposals';
=======
>>>>>>> 3a2f2097101c63c4b3e12a7ddaf38509b021bf31

const routes: RouteOptions[] = [
 ...propertiesRoutes,
 ...postsRoutes,
<<<<<<< HEAD
 ...authRoutes,
 ...proposalsRoutes
=======
 ...authRoutes
>>>>>>> 3a2f2097101c63c4b3e12a7ddaf38509b021bf31
];

export const registerRoutes = (fastify: FastifyInstance) => {
 fastify.log.warn('Registering routes');

 routes.map((route) => {
  fastify.route(route);
 });
};