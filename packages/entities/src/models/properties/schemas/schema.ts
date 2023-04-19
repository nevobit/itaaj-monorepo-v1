import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Area, Location } from './property';
import { PropertyType } from './property';
import { Category } from './property';
import { StatusType } from '@itaaj/entities';

@Entity('Property')
export class PropertySchema extends BaseEntity {
 @PrimaryGeneratedColumn("uuid")
 uuid!: string;
 
 @Column()
 name!: string;
 
 @Column()
 description!: string;

 @Column()
 address!: string;

 @Column()
 city!: string;

 @Column()
 state!: string;

 @Column()
 country!: string;

 @Column()
 neighborhood!: string;

 @Column()
 street!: string;

 @Column()
 external_number!: string;

 @Column()
 internal_number!: string;

 @Column({ type: 'json' })
 location!: Location;

 @Column()
 price!: number;

 @Column({ type: 'json' })
 area!: Area;

 @Column()
 garage!: number;

 @Column('simple-array')
 images!: string[];

 @Column('simple-array')
 amenities!: string[];

 @Column()
 bedrooms!: number;

 @Column()
 bathrooms!: number;

 @Column()
 image!: string;

 @Column()
 owner!: string;

 @Column()
 virtualTourUrl!: string;

 @Column()
 video!: string;

 @Column()
 antiquity!: number;

 @Column()
 propertyStatus?: string;

 @Column()
 type!: PropertyType;

 @Column()
 blockchainId?: string;

 @Column()
 category!: Category;

 @Column()
 partner!: string;

 @Column()
 status!: StatusType;
 
 @Column()
 createdAt!: string;
 
 @Column()
 updatedAt!: string;
}