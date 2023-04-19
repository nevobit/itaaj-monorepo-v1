import 'dotenv/config';
// import fastify, { FastifyInstance } from 'fastify';
// import fastifyCors from '@fastify/cors';
// import fastifyMultipart from '@fastify/multipart';
// import { initPostgres } from '@itaaj/data-sources/src/index';
// import { registerRoutes } from '../routes';
import jsonServer from 'json-server'

const { PORT, HOST, NODE_ENV } = process.env;
// const corsOptions = {
//  origin: '*',
// };

const main = async() => {
 
 const server = jsonServer.create();
 
 const router = jsonServer.router('db.json');
 
 server.use("/api/v1", router);
 
 server.listen(PORT, () => {
 console.log(`Backend App is running at http://$`);
 console.log('Press CTRL-c to stop');
 });
 
//  const server: FastifyInstance = fastify({
//   logger: true,
//  });

//  server.register(fastifyCors, corsOptions);
 
//  server.register(fastifyMultipart);

 // await initPostgres();
 
 // server.register(
 //  (instance, options, next) => {
 //   registerRoutes(instance);
 //   next();
 //  },
 //  { prefix: 'api/v1' },
 // );

 


// server.register((instance, opts, done) => {
//  const router = jsonServer.router('db.json');
//  instance.decorate('jsonServer', router);
//  done();
// });
 
//  await server.listen({ port: Number(PORT), host: HOST }, (error, address) => {
//   if (error) {
//    server.log.error(error);
//    process.exit(1);
//   }
//   server.log.info(`Backend App is running at http://${address}`);
//   server.log.info('Press CTRL-c to stop');
//  });

}

void main();
