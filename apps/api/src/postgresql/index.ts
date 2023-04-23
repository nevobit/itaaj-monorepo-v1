import { DataSource } from 'typeorm';
import { PropertySchema } from '../models';

const { HOST, USERNAME, PASSWORD, DATABASE } = process.env;

export const initPostgres = async () => {
 try{
  const AppDataSource = new DataSource({
   type: 'mysql', 
   host: HOST,
   port: 3306,
   username: USERNAME,
   password: PASSWORD,
   database: DATABASE,
   entities: [PropertySchema],
   // synchronize: true,
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
