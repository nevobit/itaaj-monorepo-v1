import { Property, PropertySchema } from "@itaaj/entities";

export const createProperty = async ( data: any ): Promise<Property | Error> => {
  const property = await PropertySchema.insert(data);
  return property.raw;
};