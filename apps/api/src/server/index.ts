import "dotenv/config";
import fastify, { FastifyInstance } from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyMultipart from "@fastify/multipart";
import { registerRoutes } from "../routes";
import jsonServer from "json-server";
import { initPostgres } from "../postgresql";

const { PORT, HOST } = process.env;
const corsOptions = {
  origin: "*",
};

const main = async (): Promise<void> => {
  await initPostgres();
  
  const server: FastifyInstance = fastify({
    logger: true,
  });

  server.register(fastifyCors, corsOptions);

  server.register(fastifyMultipart);


  server.register(
    (instance, options, next) => {
      registerRoutes(instance);
      next();
    },
    { prefix: "api/v1" }
  );

  await server.listen({ port: Number(PORT), host: HOST || "0.0.0.0" }, (error, address) => {
    if (error) {
      server.log.error(error);
      process.exit(1);
    }
    server.log.info(`Backend App is running at http://${address}`);
    server.log.info("Press CTRL-c to stop");
  });
};

void main();
