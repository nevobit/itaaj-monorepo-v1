import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
// import { getAllProperties } from '@itaaj/business-logic';

interface Query {
 page: number;
 limit: number;
 search: string;
}

export const getAllPropertiesRoute: RouteOptions = {
 method: 'GET',
 url: '/properties',
 handler: async (request: FastifyRequest, reply: FastifyReply) => {
  try{
   const { query } = request;
   const {page, limit, search} = query as Query;
   // const properties = await getAllProperties(page, limit);
   reply.status(200).send();
  }catch(err){
   reply.status(500).send(err);
  }
 }
};