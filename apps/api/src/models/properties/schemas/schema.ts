import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Area, Location } from './property';
import { PropertyType } from './property';
import { Category } from './property';
import { StatusType } from '../../../common';

@Entity('Property')
export class PropertySchema extends BaseEntity {
 @PrimaryGeneratedColumn("uuid")
 uuid!: string;
 
 @Column({ default: '' })
 slug!: string;
 
 @Column({ default: '' })
 name!: string;

 @Column({ default: '' })
 description!: string;

 @Column({ default: '' })
 address!: string;

 @Column({ default: '' })
 city!: string;

 @Column({ default: '' })
 state!: string;

 @Column({ default: '' })
 country!: string;

 @Column({ default: '' })
 neighborhood!: string;

 @Column({ default: '' })
 street!: string;

 @Column({ default: '' })
 external_number!: string;

 @Column({ default: '' })
 internal_number!: string;

 @Column({ type: 'json', default: "{}" })
 location?: Location;

 @Column({ default: 0 })
 price!: number;

 @Column({ type: 'json', default: "{}" })
 area?: Area;

 @Column({ default: 0 })
 garage!: number;

 @Column('simple-array',{ default: "[]"})
 images?: string[];

 @Column('simple-array', {default: "[]"})
 amenities?: string[];

 @Column({ default: 0 })
 bedrooms!: number;

 @Column({ default: 0 })
 bathrooms!: number;

 @Column({ default: '' })
 image!: string;

 @Column({ default: '' })
 owner!: string;

 @Column({ default: '' })
 virtualTourUrl!: string;

 @Column({ default: '' })
 video!: string;

 @Column({ default: 0 })
 antiquity!: number;

 @Column({ default: '' })
 propertyStatus?: string;

 @Column({ default: '' })
 type!: string;

 @Column({ default: '' })
 blockchainId?: string;

 @Column({ default: 'general' })
 category!: string;

 @Column({ default: '' })
 partner!: string;

 @Column({ default: '' })
 status!: string;

 @Column({ default: '' })
 createdAt!: string;

 @Column({ default: '' })
 updatedAt!: string;
}