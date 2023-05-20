import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { getAllProposal } from "../../business-logic";
interface Query {
 page: number;
 limit: number;
 search: string;
}

export const getAllProposalsRoute: RouteOptions = {
 method: 'GET',
 url: '/proposals',
 handler: async (request: FastifyRequest, reply: FastifyReply) => {
  try{
   const { query } = request;
   const {page, limit, search} = query as Query;
   const properties = await getAllProposal(page, limit, search);
   reply.status(200).send(properties);
  }catch(err){
   reply.status(500).send(err);
  }
 }
};