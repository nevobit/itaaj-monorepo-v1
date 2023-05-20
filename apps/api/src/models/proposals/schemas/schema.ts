import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Proposal')
export class ProposalSchema extends BaseEntity {
 @PrimaryGeneratedColumn("uuid")
 uuid!: string;
 
 @Column({ default: '' })
 name!: string;
 
 @Column({ default: '' })
 nationality!: string;

 @Column({ type: 'text', default: ''  })
 email!: string;

 @Column({ default: '' })
 phone!: string;

 @Column({ default: '' })
 economic_proposal!: string;

 @Column({ default: 0 })
 apartado!: number;

 @Column({ default: 0})
 enganche!: number;

 @Column({ default: 0 })
 rest!: number;

 @Column({ default: '' })
 fund!: string;

 @Column({ default: 'pending' })
 proposal_status!: string;

 @Column({ default: 'active' })
 status!: string;
 
 @Column({ default: '' })
 property!: string;

 @Column({ default: '' })
 createdAt!: string;

 @Column({ default: '' })
 updatedAt!: string;
}