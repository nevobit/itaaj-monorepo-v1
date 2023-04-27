import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './post';

@Entity('Post')
export class PostSchema extends BaseEntity {
 @PrimaryGeneratedColumn("uuid")
 uuid!: string;
 
 @Column({ default: '' })
 slug!: string;
 
 @Column({ default: '' })
 title!: string;

 @Column({ default: '' })
 description!: string;

 @Column({ default: '' })
 category!: string;

 @Column({ default: '' })
 image!: string;

 @Column({ default: 0 })
 views!: number;

 @Column({ default: '' })
 content!: string;

 @Column('simple-array',{ default: "[]"})
 comments?: Comment[];

 @Column({ default: 0 })
 likes!: number;

 @Column({ default: '' })
 user_photo!: string;

 @Column({ default: "" })
 user_name?: string;

 @Column({ default: "spanish" })
 language!: string;

 @Column({ default: '' })
 status!: string;

 @Column({ default: '' })
 createdAt!: string;

 @Column({ default: '' })
 updatedAt!: string;
}