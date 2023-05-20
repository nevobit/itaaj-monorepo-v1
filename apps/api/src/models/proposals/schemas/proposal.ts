import { Base } from "../../../common";

export interface Proposal extends Base{
 name: string;
 nationality: string;
 email: string;
 phone: string;
 economic_proposal: string;
 apartado: number;
 enganche: number;
 rest: number;
 fund: string;
 proposal_status: string;
 property:string;
}