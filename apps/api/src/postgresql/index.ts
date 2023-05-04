import { DataSource } from 'typeorm';
import { OfficerSchema, PostSchema, PropertySchema } from '../models';

const { HOST_MYSQL, USERNAME_MYSQL, PASSWORD, DATABASE } = process.env;

export const initPostgres = async () => {
 try{
  const AppDataSource = new DataSource({
   type: 'mysql', 
   host: HOST_MYSQL,
   port: 3306,
   username: USERNAME_MYSQL,
   password: PASSWORD,
   database: DATABASE,
   entities: [PropertySchema, PostSchema, OfficerSchema],
   synchronize: true,
   // dropSchema: true,
   ssl: {
    rejectUnauthorized: true
   }
  });
  
  await AppDataSource.initialize().then(() => {
   console.log('Connection has been established successfully instance');  
}).catch((err) => console.log(err));
  
 
 }catch(err){
  console.log("Unable to connect to the database", err);
 }
}
