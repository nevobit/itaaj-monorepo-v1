import { OfficerSchema } from "../../../models";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface User{
 username: string;
 password: string;
}

const { JWT_SECRET } = process.env;

export const login = async ({username, password}: User) => {
 const officer = await OfficerSchema.findBy({username: username});
 
 if(!officer) throw new Error ("Invalid credentials");
 
 const isValidPassword = await bcrypt.compare(password, officer[0]?.password || "")
 
 if(!isValidPassword) {
  throw new Error('Invalid credentials');
 }
 
<<<<<<< HEAD
 const token = jwt.sign({uuid: officer[0]?.uuid}, JWT_SECRET!, {expiresIn: '5d'})
=======
 const token = jwt.sign({uuid: officer[0]?.uuid}, JWT_SECRET!, {expiresIn: '24h'})
>>>>>>> 3a2f2097101c63c4b3e12a7ddaf38509b021bf31
 
 return { token };
}