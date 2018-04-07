import { Employee } from './employee.model';
export class Position {
    id:number;
    name:string;
    dpt_id: number;
    employees:Array<number>;
}