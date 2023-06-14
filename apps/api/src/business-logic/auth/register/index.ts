import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { OfficerSchema } from '../../../models';

interface UserToken {
  token: string;
}
const { JWT_SECRET } = process.env;

export const registerOfficer = async (data: any): Promise<UserToken | Error> => {
 const newData = data;
   
  const salt = bcrypt.genSaltSync(10);
  newData.password = bcrypt.hashSync(data.password, salt);

  const officer = await OfficerSchema.insert(newData);
  
  const token = jwt.sign({ id: officer.raw.uuid }, JWT_SECRET!, { expiresIn: '5d' });

  return { token };
};