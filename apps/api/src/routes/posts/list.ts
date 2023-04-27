import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { getAllPosts } from "../../posts";
interface Query {
 page: number;
 limit: number;
 search: string;
}

export const getAllPostsRoute: RouteOptions = {
 method: 'GET',
 url: '/posts',
 handler: async (request: FastifyRequest, reply: FastifyReply) => {
  try{
   const { query } = request;
   const {page, limit, search} = query as Query;
   const posts = await getAllPosts(page, limit, search);
   reply.status(200).send(posts);
  }catch(err){
   reply.status(500).send(err);
  }
 }
};