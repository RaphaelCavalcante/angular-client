import { Position } from './position.model';
export class Employee {
    id: number;
    name: string;
    phone_num: string;
    email: string;
    position: Position;
    constructor(
        private nameInput: string,
        private phoneInput: string,
        private emailInput: string,
        private positionInput: Position
    ) {

    }
}
