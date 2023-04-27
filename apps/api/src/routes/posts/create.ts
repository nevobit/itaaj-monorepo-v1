import { RouteOptions } from "fastify";
import { Post } from "../../models";
import { createPost } from "../../posts";

export const createPostRoute: RouteOptions = {
 method: 'POST',
 url: "/posts",
 handler: async (request, reply) => {
   const { body } = request;
   const data = body as Post;
   try {
     const obj = await createPost(data);
     reply.status(201).send(obj);
   } catch (err) {
     if (err instanceof Error) {
       console.log(err);
       reply.status(500).send(err);
     }
   }
 },
};