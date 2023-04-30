import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { deleteProperty } from "../../properties";
interface Query {
 slug:string;
}

export const deletePropertyRoute: RouteOptions = {
 method: 'DELETE',
 url: '/properties/:slug',
 handler: async (request: FastifyRequest, reply: FastifyReply) => {
  try{
   const { params } = request;
   const { slug } = params as Query;
   const property = await deleteProperty(slug);
   reply.status(200).send(property);
  }catch(err){
   reply.status(500).send(err);
  }
 }
};