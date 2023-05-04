import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { login } from "../../business-logic";

interface Query {
 username:string;
 password:string;
}

export const loginRoute: RouteOptions = {
 method: 'POST',
 url: '/auth/login',
 handler: async (request: FastifyRequest, reply: FastifyReply) => {
  try{
   const { body } = request;
   const { username, password } = body as Query;
   const officer = await login({username, password});
   reply.status(200).send(officer);
  }catch(err){
   reply.status(500).send(err);
  }
 }
};