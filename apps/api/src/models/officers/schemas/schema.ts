import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class OfficerSchema extends BaseEntity {
 @PrimaryGeneratedColumn('uuid')
 uuid!: string;
 
 @Column({ default: '' })
 username!: string;
 
 @Column({ default: '' })
 firstName!: string;
 
 @Column({ default: '' })
 lastName!: string;
 
 @Column({ default: '' })
 middleName!: string;
 
 @Column({ default: '' })
 middleLastName!: string;
 
 @Column({ default: '' })
 email!: string;
 
 @Column({ default: '' })
 password!: string;
 
 @Column({ default: '' })
 photo!: string;
 
 @Column({ default: '' })
 role!: string;
 
 @Column({ default: '' })
 lastLogin!: string;
}