import { RouteOptions } from "fastify";
import { updateProperty } from "../../properties";
import { Property } from "../../models";

export const updatePropertyRoute: RouteOptions = {
 method: 'PUT',
 url: "/properties",
 handler: async (request, reply) => {
   const { body } = request;
   const data = body as Property;
   try {
     const obj = await updateProperty(data.uuid, data);
     reply.status(201).send(obj);
   } catch (err) {
     if (err instanceof Error) {
       console.log(err);
       reply.status(500).send(err);
     }
   }
 },
};