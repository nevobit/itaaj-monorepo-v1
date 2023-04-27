import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { getOnePost } from "../../posts/get-one";
interface Query {
 slug:string;
}

export const getOnePostRoute: RouteOptions = {
 method: 'GET',
 url: '/posts/:slug',
 handler: async (request: FastifyRequest, reply: FastifyReply) => {
  try{
   const { params } = request;
   const { slug } = params as Query;
   const property = await getOnePost(slug);
   reply.status(200).send(property);
  }catch(err){
   reply.status(500).send(err);
  }
 }
};