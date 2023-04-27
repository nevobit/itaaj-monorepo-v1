import { Post, PostSchema } from "../models";
import slugify from 'slugify'

export const createPost = async ( data: any ): Promise<Post | Error> => {
  const slug = slugify(data.title, { lower: true });
  const post = await PostSchema.insert({...data, slug});
  return post.raw;
};