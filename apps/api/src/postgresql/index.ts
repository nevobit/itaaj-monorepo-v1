import { DataSource } from 'typeorm';
import { PropertySchema } from '../models';

export const initPostgres = async () => {
 try{
  const AppDataSource = new DataSource({
   type: 'mysql', 
   host: 'aws.connect.psdb.cloud',
   port: 3306,
   username: 'tq8ao9e6ykvns8ix8cmh',
   password: 'pscale_pw_9CN0h5j1kllbF4CKxUVfVgl0Kz73kvhBC6flzgNAGpl',
   database: 'itaaf-database',
   entities: [PropertySchema],
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
