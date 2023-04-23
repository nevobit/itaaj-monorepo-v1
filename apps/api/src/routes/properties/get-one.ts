import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { getAllProperties } from "../../properties";
import { getOneProperty } from "../../properties/get-one";
interface Query {
 slug:string;
}

export const getOnePropertyRoute: RouteOptions = {
 method: 'GET',
 url: '/properties/:slug',
 handler: async (request: FastifyRequest, reply: FastifyReply) => {
  try{
   const { params } = request;
   const { slug } = params as Query;
   const property = await getOneProperty(slug);
   reply.status(200).send(property);
  }catch(err){
   reply.status(500).send(err);
  }
 }
};