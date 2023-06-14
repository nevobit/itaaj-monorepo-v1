import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { login } from "../../business-logic";
import { registerOfficer } from "../../business-logic/auth/register";

interface Query {
 username:string;
 password:string;
}

export const registerRoute: RouteOptions = {
 method: 'POST',
 url: '/auth/register',
 handler: async (request: FastifyRequest, reply: FastifyReply) => {
  try{
   const { body } = request;
   const data = body as any;
   const officer = await registerOfficer(data);
   reply.status(200).send(officer);
  }catch(err){
   reply.status(500).send(err);
  }
 }
};