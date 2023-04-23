import { Property, PropertySchema } from "../models";

export const getOneProperty = async ( slug: any ): Promise<any | Error | null> => {
  const property = await PropertySchema.findBy({slug:slug});
  return property;
};