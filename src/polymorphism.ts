export class Employee {
    constructor(public name: string) {

    }
}

export class Manager extends Employee { }
export class VicePresident extends Manager { }

export function sayHello(employee: Employee) : void {
    console.log(`Hello ${employee.name}`);
}

