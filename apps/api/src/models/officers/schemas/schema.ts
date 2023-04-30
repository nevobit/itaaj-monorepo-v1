import { Column, PrimaryGeneratedColumn } from "typeorm";

export class OfficersSchema {
 @PrimaryGeneratedColumn('uuid')
 uuid!: string;
 
 @Column()
 name!: string;
 
 @Column()
 total!: number;
}