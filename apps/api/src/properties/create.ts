import { Property, PropertySchema } from "../models";
import slugify from 'slugify'

export const createProperty = async ( data: any ): Promise<Property | Error> => {
  const slug = slugify(data.name, { lower: true });
  const property = await PropertySchema.insert({...data, slug});
  return property.raw;
};