import { DataSource } from 'typeorm';
import { OfficerSchema, PostSchema, PropertySchema } from '../models';
<<<<<<< HEAD
import { ProposalSchema } from '../models/proposals';
=======
>>>>>>> 3a2f2097101c63c4b3e12a7ddaf38509b021bf31

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
   entities: [PropertySchema, PostSchema, OfficerSchema, ProposalSchema],
   synchronize: false,
   // dropSchema: true,
   ssl: {
    rejectUnauthorized: false
   }
  });
  
  await AppDataSource.initialize().then(() => {
   console.log('Connection has been established successfully instance');  
}).catch((err) => console.log(err));
   
 }catch(err){
  console.log("Unable to connect to the database", err);
 }
}
