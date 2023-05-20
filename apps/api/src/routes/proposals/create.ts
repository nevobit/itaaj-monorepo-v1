import { RouteOptions } from "fastify";
import { createProposal } from "../../business-logic";
import { Proposal } from "../../models/proposals";

export const createProposalRoute: RouteOptions = {
 method: 'POST',
 url: "/proposals",
 handler: async (request, reply) => {
   const { body } = request;
   const data = body as Proposal;
   try {
     const obj = await createProposal(data);
     reply.status(201).send(obj);
   } catch (err) {
     if (err instanceof Error) {
       console.log(err);
       reply.status(500).send(err);
     }
   }
 },
};