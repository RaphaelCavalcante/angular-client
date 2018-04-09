import { Position } from './position.model';
export class Employee {
    id: number;
    name: string;
    phone_num: string;
    email: string;
    position: number;
    constructor(
        private nameInput: string,
        private phoneInput: string,
        private emailInput: string,
        private positionInput: number
    ) {
        this.name= nameInput;
        this.phone_num = phoneInput;
        this.email = this.emailInput;
        this.position = this.positionInput;
    }
}
