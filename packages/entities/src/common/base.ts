import { StatusType } from "./constants";

export interface Base {
 uuid: string;
 status: StatusType;
 createdAt: string;
 updatedAt: string;
}
