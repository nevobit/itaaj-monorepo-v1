import { PostSchema } from "../models";

export const getOnePost = async ( slug: string ): Promise<any | Error | null> => {
  const post = await PostSchema.findBy({slug:slug});
  return post;
};