import { PropertySchema } from "../models";

export const deleteProperty = async ( uuid: string ): Promise<any | Error | null> => {
  await PropertySchema.delete({uuid:uuid});
  return true;
};