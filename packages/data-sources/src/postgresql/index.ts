import { DataSource } from 'typeorm';
import  { PropertySchema }  from '@itaaj/entities';

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
   ssl: {
    rejectUnauthorized: true
   }
  });
  
  await AppDataSource.initialize();
  console.log('Connection has been established successfully');  
 
 }catch(err){
  console.log("Unable to connect to the database", err);
 }
}
