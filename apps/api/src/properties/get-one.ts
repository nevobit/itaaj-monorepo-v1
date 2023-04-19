import { Property, PropertySchema } from "../models";

export const createProperty = async ( slug: any ): Promise<any | Error | null> => {
  const property = await PropertySchema.findOneBy({slug:slug});
  return property;
};