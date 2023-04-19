import { RouteOptions } from "fastify";
import { createProperty } from "../../properties";
import { Property } from "../../models";

export const createPropertyRoute: RouteOptions = {
 method: 'POST',
 url: "/properties",
 handler: async (request, reply) => {
   const { body } = request;
   const data = body as Property;
   try {
     const obj = await createProperty(data);
     reply.status(201).send(obj);
   } catch (err) {
     if (err instanceof Error) {
       console.log(err);
       reply.status(500).send(err);
     }
   }
 },
};