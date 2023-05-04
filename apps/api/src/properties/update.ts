import { Property, PropertySchema } from "../models";

export const updateProperty = async (uuid: string, data: Partial<Property>): Promise<any | null> => {
  const property = await PropertySchema.findBy({uuid: uuid});

  if (!property) {
    return null;
  }

  Object.assign(property, data);

  await PropertySchema.update(uuid, data);

  return property;
};
